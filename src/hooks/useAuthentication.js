import { db } from "../firebase/config"
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut
} from 'firebase/auth' // standard methods from Firebase
import { useState, useEffect } from 'react'

export const useAuthentication = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(null)
  const [cancelled, setCancelled] = useState(false) // cleanup to deal with memory leak
  const auth = getAuth()

  function isCancelled() {
    if (cancelled) {
      return
    }
  }

  // Only email and password are saved in Firebase's authentication methods, other properties like display name needs to be saved by updating the profile.
  const createUser = async(data) => {
    isCancelled()
    setLoading(true)
    setError(null)

    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      await updateProfile(user, {
        displayName: data.displayName
      })

      setLoading(false)
      return user
    } catch (error) {
      console.log(error.message)
      console.log(typeof error.message)
      setError(error.message.substring(10))
    }
    setLoading(false)
  }

  useEffect(() => {
    return () => setCancelled(true)
  }, [])

  return {
    auth,
    createUser,
    error,
    loading
  }
}
import { useAuthentication } from "../../hooks/useAuthentication"
import style from "./Register.module.css"
import { useState, useEffect } from "react"

const Register = () => {

  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const { createUser, error: authError, loading } = useAuthentication

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    const user = {
      displayName,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("The passwords do not match!")
      return
    }
    console.log(user)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className={style.register}>Register to post your stories!</h1>
      <label>
        <span>Name:</span>
        <input
          type="text"
          name="displayName"
          placeholder="Enter your name"
          required
          onChange={(e) => {setDisplayName(e.target.value)}}/>
      </label>
      <label>
        <span>Email:</span>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          required
          onChange={(e) => {setEmail(e.target.value)}}/>
      </label>
      <label>
        <span>Password:</span>
        <input
          type="password" 
          ame="password"
          placeholder="Enter your password"
          required
          onChange={(e) => {setPassword(e.target.value)}}/>
      </label>
      <label>
        <span>Confirm your password:</span>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
          required
          onChange={(e) => {setConfirmPassword(e.target.value)}}/>
      </label>
      <button className="btn">Register</button>
      {error && <p className="error">{error}</p>}
    </form>
  )
}

export default Register
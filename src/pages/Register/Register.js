import style from "./Register.module.css"

const Register = () => {
  return (
    <form>
      <h1 className={style.register}>Register to post your stories!</h1>
      <label>
        <span>Name:</span>
        <input type="text" name="displayName" placeholder="Enter your name" required/>
      </label>
      <label>
        <span>Email:</span>
        <input type="email" name="email" placeholder="Enter your email" required/>
      </label>
      <label>
        <span>Password:</span>
        <input type="password" name="password" placeholder="Enter your password" required/>
      </label>
      <label>
        <span>Confirm your password:</span>
        <input type="password" name="confirmPassword" placeholder="Confirm your password" required/>
      </label>
      <button className="btn">Register</button>
    </form>
  )
}

export default Register
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSgnin } from '../hook/useSignin'
function Signin() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signin, error, isLoding } = useSgnin()

  console.log(error)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    await signin(firstName, lastName, email, password)
  }
  return (
    <div>
      <p>Signup</p>
      <form className="signup" onSubmit={handleSubmit}>
        <h3>Sign up</h3>

        <label>First Name: </label>
        <input
          type="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
        <br />
        <br />

        <label>Last Name: </label>
        <input
          type="firstName"
          onChange={(e) => setlastName(e.target.value)}
          value={lastName}
        />

        <br />
        <br />

        <label>Email: </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <br />
        <br />

        <label>Password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button disabled={isLoding}>Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
      <Link to={'/'}>Home</Link>
    </div>
  )
}

export default Signin

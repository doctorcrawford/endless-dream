import { auth } from './../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react'

function SignIn() {

  const [signUpSuccess, setSignUpSuccess] = useState(null)
  const [signInSuccess, setSignInSuccess] = useState(null)
  const [signOutSuccess, setSignOutSuccess] = useState(null)

  function doSignUp(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignUpSuccess(`You've successfully signed up, ${userCredential.user.email}!`)
      })
      .catch((e) => {
        setSignUpSuccess(`There was an error signing up: ${e.message}!`)
      })
  }

  function doSignIn(e) {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setSignInSuccess(`You've successfully signed in as ${userCredential.user.email}!`)
      })
      .catch((e) => {
        setSignInSuccess(`There was an error signing in: ${e.message}`)
      })
  }

  function doSignOut() {
    signOut(auth)
      .then(() => setSignOutSuccess('You have successfully signed out!')
      ).catch((e) => setSignOutSuccess(`There was an error signing out: ${e.message}`)
      )
  }

  return (
    <>
      <h1>Sign Up</h1>
      {signUpSuccess}
      <form onSubmit={doSignUp}>
        <input
          type='text'
          name="email"
          placeholder="Email" />
        <input
          type="password"
          name="password"
          placeholder="Password" />
        <button type="submit">Sign up</button>
      </form>

      <h1>Sign In</h1>
      {signInSuccess}
      <form onSubmit={doSignIn}>
        <input
          type='text'
          name="email"
          placeholder="Email" />
        <input
          type="password"
          name="password"
          placeholder="Password" />
        <button type="submit">Sign in</button>
      </form>

      <h1>Sign Out</h1>
      {signOutSuccess}
      <br />
      <button onClick={doSignOut}>Sign out</button>
    </>
  )
}

export default SignIn
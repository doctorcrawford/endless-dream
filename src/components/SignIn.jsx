import { auth } from './../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'

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
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Box m='5' maxW='md' p='4' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
          _hover={{
            bgGradient: 'linear(to-r, yellow.400, pink.200, gray.300)',
          }} borderWidth='1px' borderRadius='lg'>
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
            <Button type="submit">Sign up</Button>
          </form>
        </Box>

        <Box m='5' maxW='md' p='4' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
          _hover={{
            bgGradient: 'linear(to-r, yellow.400, pink.200, gray.300)',
          }} borderWidth='1px' borderRadius='lg'>
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
            <Button type="submit">Sign in</Button>
          </form>
        </Box>

        <Box m='5' maxW='xs' p='4' bgGradient='linear(to-r, gray.300, yellow.400, pink.200)'
          _hover={{
            bgGradient: 'linear(to-r, yellow.400, pink.200, gray.300)',
          }} borderWidth='1px' borderRadius='lg'>
          <h1>Sign Out</h1>
          {signOutSuccess}
          <br />
          <Button onClick={doSignOut}>Sign out</Button>
        </Box>
      </Box>
    </>
  )
}

export default SignIn
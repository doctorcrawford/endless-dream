import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <h1>Endless Dream</h1>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/sign-in'>Sign In</Link>
        </li>
      </ul>
    </>
  )
}

export default Header;
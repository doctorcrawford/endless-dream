import { Link } from 'react-router-dom'
import styled from 'styled-components'

const EndlessDreamHeader = styled.h1`
  font-size: 50px;
  font-weight: 600;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`
const LinkStyle = styled.li`
  font-size: 20px;
  font-weight: 60;
  background-image: linear-gradient(to left, #553c9a, #b393d3);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`

function Header() {
  return (
    <>
      <EndlessDreamHeader>
        <h1>Endless Dream</h1>
      </EndlessDreamHeader>
      <ul>
        <LinkStyle>
          <Link to='/'>Home</Link>
        </LinkStyle>
        <LinkStyle>
          <Link to='/sign-in'>Sign In</Link>
        </LinkStyle>
      </ul>
    </>
  )
}

export default Header;
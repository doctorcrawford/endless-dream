import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyle = styled.div`
  background-image: url(https://img.freepik.com/free-photo/beautiful-verdigris-oxidized-copper-background_24837-103.jpg?w=2000&t=st=1689197736~exp=1689198336~hmac=ba778ebb02a5a38ebf67f115537041ea7f074f895b1378546bda3b0b0257b9a6);
  background-size: 250px;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  display: flex;
  flex-direction: column;
`

const EndlessDreamHeader = styled.h1`
  font-size: 50px;
  font-weight: 600;
  background-image: url(https://img.freepik.com/free-photo/beautiful-verdigris-oxidized-copper-background_24837-103.jpg?w=2000&t=st=1689197736~exp=1689198336~hmac=ba778ebb02a5a38ebf67f115537041ea7f074f895b1378546bda3b0b0257b9a6);
  background-size: 250px;
  background-repeat: repeat;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: grey;
  margin-bottom: 0;
`

const Container = styled.div`
  font-size: 20px;
  font-weight: 100;
  width: fit-content;
  color: grey;
  align-items: center;
  flex-direction: row;
`

function Header() {
  const padding = {
    paddingRight: '1rem'
  }
  return (
    <>
      <HeaderStyle>
        <EndlessDreamHeader>
          <h1>Endless Dream</h1>
        </EndlessDreamHeader>
        <Container>
          <Link to='/' style={padding}>Home</Link>
          <Link to='/sign-in'>Sign In</Link>
        </Container>
      </HeaderStyle>
    </>
  )
}

export default Header;
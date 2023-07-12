import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const HeaderStyle = styled.div`
  background-image: url(https://img.freepik.com/free-photo/beautiful-verdigris-oxidized-copper-background_24837-103.jpg?w=2000&t=st=1689197736~exp=1689198336~hmac=ba778ebb02a5a38ebf67f115537041ea7f074f895b1378546bda3b0b0257b9a6);
  background-size: 250px;
  background-repeat: repeat;
  background-clip: text;
  -webkit-background-clip: text;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`

const EndlessDreamHeader = styled.h1`
  font-size: 80px;
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
  height: 1em;
`

const Container = styled.p`
  font-size: 20px;
  font-weight: 100;
  color: grey;
  align-items: center;
  flex-direction: row;
  backdrop-filter: blur(80px);
  padding: 1em;
  outline: 2px solid grey;
  border-radius: 30px;
  box-shadow: 4px 4px 8px 2px grey;
  width: 20vw;
`

function Header() {
  const padding = {
    paddingRight: '1rem'
  }
  return (
    <>
      <HeaderStyle>
        <EndlessDreamHeader>
          Endless Dream
        </EndlessDreamHeader>
        <Tabs>
          <TabList>
            <Tab><Link to='/' style={padding}>Home</Link></Tab>
            <Tab><Link to='/sign-in'>Sign In</Link></Tab>
          </TabList>
        </Tabs>
      </HeaderStyle>
    </>
  )
}

export default Header;
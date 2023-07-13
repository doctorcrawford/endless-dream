import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { HeaderStyle, EndlessDreamHeader, NavbarLink } from '../styles/HeaderStyle'

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
        <Tabs variant='enclosed'>
          <TabList>
            <Tab><NavbarLink to='/' style={padding}>Home</NavbarLink></Tab>
            <Tab><NavbarLink to='/sign-in'>Sign In</NavbarLink></Tab>
          </TabList>
        </Tabs>
        <hr />
      </HeaderStyle>
    </>
  )
}

export default Header;
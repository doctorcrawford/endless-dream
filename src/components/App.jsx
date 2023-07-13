import Header from './Header'
import DreamControl from './DreamControl'
import SignIn from './SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './../styles/app.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<DreamControl />} />
        <Route path='/sign-in' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
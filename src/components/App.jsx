import Header from './Header'
import DreamControl from './DreamControl'
import SignIn from './SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './../styles/app.css'

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
import Header from './Header'
import DreamControl from './DreamControl'
import SignIn from './SignIn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './../styles/app.css'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/' element={<DreamControl />} />
      </Routes>
    </Router>
  )
}

export default App;
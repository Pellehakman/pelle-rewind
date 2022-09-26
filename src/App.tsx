import { Routes, Route } from 'react-router-dom'
import '../src/styles/variables.scss'
import Nav from './components/Nav'
import Home from './views/Home'
import Footer from './components/Footer'
import { getDatabase } from "firebase/database";

const database = getDatabase();

function App() {

  


  return (
    <div className="app">
      <Nav />
        <Routes>
          <Route path='/' element={ <Home /> } />
        </Routes>
      <Footer />
    </div>
  )
}

export default App

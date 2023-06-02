import './App.css'
import { Home } from './pages/Home'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { CreatePost } from './components/create';



function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/newpost' element={< CreatePost />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

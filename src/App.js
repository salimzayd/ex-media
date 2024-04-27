import './App.css';
import Header from './components/header/Header.jsx';
import Hero from './components/ui/Hero.jsx';
import Services from './components/ui/Services.jsx';
import Navbar from "./components/header/Navbar.jsx"
import { Route,Router,Routes, } from 'react-router-dom';
import About from './components/ui/About.jsx';
import Home from './components/ui/Home.jsx';
 

function App() {
  return (
  <div className='App'>

    <Navbar />
    <Routes>
      {/* <Route path='/' element={<Hero />} /> */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/services' element={<Services />} />
    </Routes>
  </div>
  );
}

export default App;

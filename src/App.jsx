
import './App.css'
import { Route, Routes ,BrowserRouter} from 'react-router-dom'
import Home from '../src/components/Home';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path = "/home" element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App;

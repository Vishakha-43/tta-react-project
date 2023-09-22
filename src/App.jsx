
import './App.css'
import { Route, Routes ,BrowserRouter} from 'react-router-dom'
import Home from '../src/components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';


function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path = "/About" element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      
    </>
  )
}

export default App;

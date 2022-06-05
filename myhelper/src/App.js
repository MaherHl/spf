import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Request from './pages/Request';
import Pricing from './pages/Pricing';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";







function App() {
  return (
   
     <Router>
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/request' element={<Request/>}/>   
         <Route path='/Pricing' element={<Pricing/>}/>
         
       </Routes>
     </Router>
      

 
  );
}

export default App;

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Request from './pages/Request';
import Pricing from './pages/Pricing';
import Painters from './pages/Painters';
import Constructors from './pages/Constructors';
import WhWorker from './pages/WhWorker';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";







function App() {
  return (
   
     <Router>
       <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/request' element={<Request/>}/>   
         <Route path='/Pricing' element={<Pricing/>}/>
         <Route path='/painters' element={<Painters/>}/>
         <Route path='/constructors' element={<Constructors/>}/>
         <Route path='/warehouse' element={<WhWorker/>}/>
         
       </Routes>
     </Router>
      

 
  );
}

export default App;


import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
// {/*import Home from './pages/Home';*/}
import Competitions from './pages/Competitions';
// import NavegationBar from './Components/NavegationBar';
// import AppHeader from './Components/AppHeader';
// import About from './views/About';
// import Contact from './views/Contact';

const App = () => {
  return (<Router><div>

        {/* <nav> */}
          {/* <Link to='Home'>Home</Link> */}
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/contact">Contact</Link> */}
        {/* </nav> */}
        <Routes>
          {/*<Route  path='/' element={<Home/>}/>*/}
          {/*<Route  path='/home' element={<Home/>}/>*/} 
          <Route  path='/' element={<Competitions/>}/> 
          </Routes></div></Router>
 
 );
}; export default App;

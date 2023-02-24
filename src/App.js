import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './pages/Home';
// import NavegationBar from './Components/NavegationBar';
// import AppHeader from './Components/AppHeader';
// import About from './views/About';
// import Contact from './views/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/home' element={<Home/>}/> 
        </Routes>
      </div>
    </Router>
  );
};

export default App;



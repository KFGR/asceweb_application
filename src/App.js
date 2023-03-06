import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './pages/Home';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';
// import NavegationBar from './Components/NavegationBar';
// import AppHeader from './Components/AppHeader';
// import About from './views/About';
// import Contact from './views/Contact';

const App = () => {
  return (
    <Router>
      <AppHeader></AppHeader>
      <div>
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/home' element={<Home/>}/> 
        </Routes>
      </div>
      <AppFooter></AppFooter>
    </Router>
  );
};

export default App;



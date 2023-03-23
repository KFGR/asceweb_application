import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
// import AppHeader from './components/AppHeader';

import HeaderHero from './pages/Home/HeaderHero';
import AppFooter from './components/AppFooter';



const App = () => {
  function CurrentPage({Component1, Component2}){
    return(
      <>
        <Component1/>
        <Component2/>
      </>
    );}

  return (
    <Router>
      {/* <AppHeader/>     */}
      <div>
        <Routes>
          <Route  path='/' element={<CurrentPage Component1={HeaderHero} Component2={Home}/>}/>
          <Route  path='/home' element={<CurrentPage Component1={HeaderHero} Component2={Home}/>}/>


        </Routes>
      </div>
      <AppFooter/>
    </Router>
  );
};

export default App;
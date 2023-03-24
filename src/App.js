import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './pages/Home';
import Team from './pages/Team';
// import AppHeader from './components/AppHeader';

// import HeaderHero from './pages/Home/HeaderHero';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';



const App = () => {
  // function CurrentPage({ Component1, Component2 }) {
  //   const id = Component1.props.id;
  //   return (
  //     <>
  //       <Component1 id={Component1.props.id}/>
  //       <Component2/>

  //       {/* <Component2 /> */}
  //     </>
  //   );
  // }
  

  return (
    <Router>
      {/* <AppHeader/>     */}
      <div>
        <Routes>
        {/* <Route path="/" element={<CurrentPage Component1={<AppHeader id="Home_header" />} Component2={<Home />} />} /> */}
        <Route path='/' element={<><AppHeader id="Home_header"/> <Home/></>}/>
        <Route path='/home' element={<><AppHeader id="Home_header"/> <Home/></>}/>

        <Route path='/team' element={<><AppHeader id="Normal_header"/> <Team/></>}/>

          {/* <Route  path='/home' element={<CurrentPage Component1={<AppHeader id="Home_header"/>} Component2={Home}/>}/>
          <Route path='/team' element={<CurrentPage Component1={<AppHeader id="Normal_header"/>} Component2={Team}/>}/> */}


        </Routes>
      </div>
      <AppFooter/>
    </Router>
  );
};

export default App;
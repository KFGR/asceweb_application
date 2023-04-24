import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
// import Team from './pages/Team';
// import AppHeader from './components/AppHeader';

// import HeaderHero from './pages/Home/HeaderHero';
// import AppHeader from './components/AppHeader';
// import AppFooter from './components/AppFooter';

const LazyAppHeader = React.lazy(() => import('./components/AppHeader'));
const LazyAppFooter = React.lazy(() => import('./components/AppFooter'));
// const LazyAppLoader = React.lazy(() => import('./components/AppLoader'));

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyTeam = React.lazy(() => import('./pages/Team'));




const App = () => {
  return (
    <Router>
      {/* <AppHeader/>     */}
      <div>
        <Routes>
        {/* <Route path="/" element={<CurrentPage Component1={<AppHeader id="Home_header" />} Component2={<Home />} />} /> */}
        {/* <Route path='/' element={<><AppHeader id="Home_header"/> <Home/></>}/>
        <Route path='/home' element={<><AppHeader id="Home_header"/> <Home/></>}/>

        <Route path='/team' element={<><AppHeader id="Normal_header"/> <Team/></>}/> */}
        <Route path='/' element={<React.Suspense fallback="loading..."><><LazyAppHeader id="Home_header"/><LazyHome/></></React.Suspense>}/>
        <Route path='/Home' element={<React.Suspense fallback="loading..."><><LazyAppHeader id="Home_header"/><LazyHome/></></React.Suspense>}/>
        <Route path='/team' element={<React.Suspense fallback='loading...'><><LazyAppHeader id="Normal_header"/><LazyTeam/></></React.Suspense>}/>




          {/* <Route  path='/home' element={<CurrentPage Component1={<AppHeader id="Home_header"/>} Component2={Home}/>}/>
          <Route path='/team' element={<CurrentPage Component1={<AppHeader id="Normal_header"/>} Component2={Team}/>}/> */}


        </Routes>
      </div>
      <LazyAppFooter/>
    </Router>
  );
};

export default App;
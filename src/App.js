
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './pages/Home';
//import Sponsors from './pages/Sponsors';
// import Team from './pages/Team';
// import AppHeader from './components/AppHeader';

// import HeaderHero from './pages/Home/HeaderHero';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazyTeam = React.lazy(() => import('./pages/Team'));

const LazySponsors = React.lazy(() => import('./pages/Sponsors'));

const LazyCompetitions = React.lazy(() => import('./pages/Competitions'));


// trying to add the adminLogIn page just to see it running
const LazyAdminLogIn = React.lazy(() => import('./pages/AdminLogIn'));




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
        <Route path='/' element={<React.Suspense fallback='loading...'><><AppHeader id="another_home_header"/><LazyHome/></></React.Suspense>}/>
        <Route path='/Home' element={<React.Suspense fallback='loading...'><><AppHeader id="Home_header"/><LazyHome/></></React.Suspense>}/>
        <Route path='/team' element={<React.Suspense fallback='loading...'><><AppHeader id="Normal_header"/><LazyTeam/></></React.Suspense>}/>
        <Route path='/Sponsors' element={<React.Suspense fallback='loading...'><><AppHeader id="Normal_header"/><LazySponsors/></></React.Suspense>}/>

        <Route path='/Competitions' element={<React.Suspense fallback='loading...'><><AppHeader id="competitions_header"/><LazyCompetitions/></></React.Suspense>}/>
        
          {/* <Route  path='/home' element={<CurrentPage Component1={<AppHeader id="Home_header"/>} Component2={Home}/>}/>
          <Route path='/team' element={<CurrentPage Component1={<AppHeader id="Normal_header"/>} Component2={Team}/>}/> */}

        {/* Trying to add the AdminLogIn Page */}
        <Route path='/AdminLogin' element={<React.Suspense fallback='loading...'><><AppHeader id="another_home_header"/><LazyAdminLogIn/></></React.Suspense>}/>


        </Routes>
      </div>
      <AppFooter/>
    </Router>
  );
};

export default App;




import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import Home from './pages/Home';
//import Sponsors from './pages/Sponsors';
// import Team from './pages/Team';
// import AppHeader from './components/AppHeader';

// import HeaderHero from './pages/Home/HeaderHero';
// import AppHeader from './components/AppHeader';
// import AppFooter from './components/AppFooter';

const LazyAppHeader = React.lazy(() => import('./components/AppHeader'));
const LazyAppFooter = React.lazy(() => import('./components/AppFooter'));
// const LazyAppLoader = React.lazy(() => import('./components/AppLoader'));

const LazyHome = React.lazy(() => import('./pages/Home'));
const LazySponsors = React.lazy(() => import('./pages/Sponsors'));
const LazyCompetitions = React.lazy(() => import('./pages/Competitions'));
const LazyDashboard = React.lazy(() => import('./pages/Dashboard'));
const LazyAdminLogIn = React.lazy(() => import('./pages/AdminLogIn'));
const LazyStudentSignUp = React.lazy(() => import ('./pages/StudentSignUp/StudentSignUp'));
const LazyAboutUs = React.lazy(() => import('./pages/AboutUs'))

function Dashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token === null) {
      navigate('/AdminLogin');
    }
  }, [navigate,token]);

  return (
    <React.Suspense fallback='loading...'>
      <><LazyDashboard/></>
    </React.Suspense>
  );
}

const App = () => {
  return (
    <Router>

      {/* <AppHeader/>     */}
      <div>
        <Routes>
        <Route path='/' element={<React.Suspense fallback="loading..."><><LazyAppHeader id="Home_header"/><LazyHome/></></React.Suspense>}/>
        <Route path='/Home' element={<React.Suspense fallback="loading..."><><LazyAppHeader id="Home_header"/><LazyHome/></></React.Suspense>}/>
        <Route path='/Sponsors' element={<React.Suspense fallback='loading...'><><LazyAppHeader id="Normal_header"/><LazySponsors/></></React.Suspense>}/>
        <Route path='/Competitions' element={<React.Suspense fallback='loading...'><><LazyAppHeader id="competitions_header"/><LazyCompetitions/></></React.Suspense>}/>
        <Route path='/AboutUs' element={<React.Suspense fallback='loading...'><><LazyAppHeader id="Normal_header"/><LazyAboutUs/></></React.Suspense>}/>
        <Route path='/AdminLogin' element={<React.Suspense fallback='loading...'><><LazyAdminLogIn/></></React.Suspense>}/>
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/StudentSignUp' element={<React.Suspense fallback='loading...'><><LazyAppHeader id="Normal_header"/><LazyStudentSignUp/></></React.Suspense>}/>
        </Routes>
      </div>
      <LazyAppFooter/>
    </Router>
  );
};

export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

// const LazyHome = React.lazy(() => import('./pages/Home'));
// const LazySponsors = React.lazy(() => import('./pages/Sponsors'));
// const LazyCompetitions = React.lazy(() => import('./pages/Competitions'));





const App = () => {
  return (
    <Router>
      {/* <AppHeader/>     */}
      <div>
        <Routes>

        <Route path='/' element={<React.Suspense fallback="loading..."><><LazyAppHeader id="Home_header"/><LazyAppHeader id="Normal_header"/></></React.Suspense>}/>
        <Route path='/' element={<React.Suspense fallback="loading..."><><LazyAppFooter/></></React.Suspense>}/>

        {/* <Route path='/Home' element={<React.Suspense fallback="loading..."><><LazyAppHeader id="Home_header"/><LazyHome/></></React.Suspense>}/>
        <Route path='/Sponsors' element={<React.Suspense fallback='loading...'><><LazyAppHeader id="Normal_header"/><LazySponsors/></></React.Suspense>}/>
        <Route path='/Competitions' element={<React.Suspense fallback='loading...'><><LazyAppHeader id="Normal_header"/><LazyCompetitions/></></React.Suspense>}/> */}


        </Routes>
      </div>
      {/* <LazyAppFooter/> */}
    </Router>
  );
};

export default App;


// // import logo from './logo.svg';
// import './App.css';
// // import AppLogo from './Components/AppLogo/AppLogo';
// // import NavegationBar from './Components/NavegationBar';
// import AppHeader from './Components/AppHeader';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     // <section id='header' className='header'>
      
//     //   <AppHeader></AppHeader>
//     // </section>
    
//   );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
// import NavegationBar from './Components/NavegationBar';
// import AppHeader from './Components/AppHeader';
// import About from './views/About';
// import Contact from './views/Contact';

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav> */}
          {/* <Link to='Home'>Home</Link> */}
          {/* <Link to="/about">About</Link> */}
          {/* <Link to="/contact">Contact</Link> */}
        {/* </nav> */}
        <Routes>
          <Route  path='/' element={<Home/>}/>
          <Route  path='/home' element={<Home/>}/>
          <Route  path='/Sponsors' element={<Sponsors/>}/> 
          {/* <Route exact path='/team' element={<Team/>}/>  */}
          {/* <Route path='/about' component={About} /> */}
          {/* <Route path='/contact' component={Contact} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;



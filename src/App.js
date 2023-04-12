import logo from './logo.svg';
import './App.css';

//Default one of the App

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

//From FECompetitions (VS version) - Nor werked

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//import Home from './pages/Home';
import StudentSignUp from './pages/StudentSignUp';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/StudentSignUp' element={<StudentSignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}; export default App;
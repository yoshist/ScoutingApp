import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Match_App from './pages/apps/Match_App';
import Strategic_App from './pages/apps/Strategic_App';
import PIT_App from './pages/apps/PIT_App';
import Header from './components/Header';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/match-app" element={<Match_App/>} />
        <Route path="/strategic-app" element={<Strategic_App/>} />
        <Route path="/pit-app" element={<PIT_App/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

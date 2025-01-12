import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import Match_App from './pages/apps/Match_App';
import Strategic_App from './pages/apps/Strategic_App';
import PIT_App from './pages/apps/PIT_App';
import DTF_Report from './pages/reports/DTF_Report';
import Team_Score_Report from './pages/reports/Team_Score_Report';
import Header from './components/Header';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/match-app" element={<Match_App/>} />
        <Route path="/strategic-app" element={<Strategic_App/>} />
        <Route path="/pit-app" element={<PIT_App/>} />

        <Route path="/dtf-report" element={<DTF_Report/>} />
        <Route path="/team-score-report" element={<Team_Score_Report/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;

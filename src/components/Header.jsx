import React from 'react'
import './Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  
  const location = useLocation()
  const navigate = useNavigate();
  console.log(location.pathname);

  function pathMatchRoute(route) {
    if(route === location.pathname){
      return true;
    }
  }

  return (
     <div className="outer-div-style">
        <header className="header-style flex">
        <div className="scouting-apps">
          <h3>Scouting Apps</h3>

            <div className="menu flex">            
                <div className={`menu-item font-weight: 900; ${
                  pathMatchRoute("/match-app") ? "current-page-app" : ""}`} 
                  onClick={() => navigate("/match-app")}><div>Match</div></div>

                <div className={`menu-item font-weight: 900; ${
                  pathMatchRoute("/strategic-app") ? "current-page-app" : ""}`} 
                  onClick={() => navigate("/strategic-app")}><div>Strategic</div></div>

                <div className={`menu-item font-weight: 900; ${
                  pathMatchRoute("/pit-app") ? "current-page-app" : ""}`} 
                  onClick={() => navigate("/pit-app")}><div>PIT</div></div>
            </div>
        </div>
        <div className="scouting-reports">
          <h3>Reports</h3>

          <div className="menu flex">
              <div className={`menu-item font-weight: 900; ${
                  pathMatchRoute("/dtf-report") ? "current-page-report" : ""}`} 
                  onClick={() => navigate("/dtf-report")}><div>DTF</div></div>

              <div className={`menu-item font-weight: 900; ${
              pathMatchRoute("/team-score-report") ? "current-page-report" : ""}`} 
              onClick={() => navigate("/team-score-report")}><div>Team Score</div></div>        
          </div>
        </div>
        </header>
     </div>
  )
}

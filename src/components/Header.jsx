import React from 'react'
import './Header.css';

export default function Header() {
  return (
     <div className="outer-div-style">
        <header className="header-style flex">
        <div className="scouting-apps">
          <h3>Scouting Apps</h3>
          <hr />
            <ul className="menu flex">
                <li>Match</li>
                <li>Strategic</li>
                <li>Pit</li>
            </ul>
        </div>
        <div className="scouting-reports">
          <h3>Reports</h3>
          <hr />
          <ul className="menu flex">
              <li>DTDF</li>
              <li>Team Score</li>         
          </ul>
        </div>
        </header>
     </div>
  )
}

import React from 'react';
import '../Field_Types.css';

export default function Match_App() {
  return (
    <div><h1 align="center">Match App</h1>

      <form>
        <div>
          <table>
            <tr>
              <td >
                <label for="scouting-initial">Scouter Initial: </label>
              </td>
              <td>
                <input className="text-field-style" type="text" id="scouting-initial" name="Scouting_Initial"/>
              </td>
            </tr>

            <tr>
              <td>
                <label for="event">Event: </label>
              </td>
              <td>
              <input className="text-field-style" type="text" id="event" name="Event"/>
              </td>
            </tr>

            <tr>
              <td>
                <label for="match-level">Match Level: </label>
              </td>
              <td>
                <input className="radio-field-style" type="radio" id="Qualifications" name="Match_Level" value="Qualifications"/>
                <label>Qualifications</label><br />
                <input className="radio-field-style" type="radio" id="Semifinals" name="Match_Level" value="Semifinals"/>
                <label>Semifinals</label> <br />
                <input className="radio-field-style" type="radio" id="Finals" name="Match_Level" value="Finals" />
                <label>Finals</label>
              </td>
            </tr>

            <tr>
              <td>
                <label for="Robot">Robot: </label>
              </td>
              <td>
                <input className="radio-field-style" type="radio" id="Robot-Red1" name="Robot" value="Red 1"/>
                <label>Red-1</label>

                <input className="radio-field-style" type="radio" id="Robot-Blue1" name="Robot" value="Blue 1"/>
                <label>Blue-1</label><br/>

                <input className="radio-field-style" type="radio" id="Robot-Red2" name="Robot" value="Red 2"/>
                <label>Red-2</label>

                <input className="radio-field-style" type="radio" id="Robot-Blue1" name="Robot" value="Blue 2"/>
                <label>Blue-2</label><br/>

                <input className="radio-field-style" type="radio" id="Robot-Red3" name="Robot" value="Red 3"/>
                <label>Red-3</label>

                <input className="radio-field-style" type="radio" id="Robot-Blue4" name="Robot" value="Blue 4"/>
                <label>Blue-4</label>
              </td>
            </tr>

          </table>
        </div>

      </form>
      
      
    </div>
  )
}

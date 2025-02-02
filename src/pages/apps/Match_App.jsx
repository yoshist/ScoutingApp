import React, {useState} from 'react';
import '../Field_Types.css';

export default function Match_App() {

  // formData is a state object that stores the current values of the form inputs.
  // It is initialized using the useState hook in React.
  // This code initializes formData as an object with empty values for each form field.
  // 
  // setFormData is the function provided by useState to update the state (formData).
  // It allows you to modify formData when the user interacts with the form.
  
  const [formData, setFormData] = useState ({
    scoutingInitials: "",   // key for the text input of "Souting Initials."
    matchNumber: "",
    teamNumber: "",
    matchLevel: "",
    robbot: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value}));
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent page reload
    setSubmittedData(formData); // save the form data for display
    console.log(formData);
  };

  return (
    <div><h1 align="center">Match App</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <table>
            <tr>
              <td >
                <label for="scouting-initial">Scouter Initials: </label>
              </td>
              <td>
                <input className="text-field-style" type="text" id="scouting-initial" name="Scouting_Initials" onChange={handleChange}/>
              </td>
            </tr>

            <tr>
              <td>
                <label for="match-number">Match Number: </label>
              </td>
              <td>
              <input className="text-field-style" type="text" id="match-number" name="Match_Number"/>
              </td>
            </tr>

            <tr>
              <td>
                <label for="team-number">Team Number: </label>
              </td>
              <td>
              <input className="text-field-style" type="text" id="team-number" name="Team_Number"/>
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
                <label>Finals</label> <br /> <br />
              </td>
            </tr>

            <tr>
              <td>
                <label for="Robot">Robot: </label>
              </td>
              <td>
                <input className="radio-field-style" type="radio" id="Robot-Red1" name="Robot" value="Red 1" />
                <label className="red">Red-1</label>

                <input className="radio-field-style" type="radio" id="Robot-Blue1" name="Robot" value="Blue 1"/>
                <label className="blue">Blue-1</label><br/>

                <input className="radio-field-style" type="radio" id="Robot-Red2" name="Robot" value="Red 2"/>
                <label className="red">Red-2</label>

                <input className="radio-field-style" type="radio" id="Robot-Blue1" name="Robot" value="Blue 2"/>
                <label className="blue">Blue-2</label><br/>

                <input className="radio-field-style" type="radio" id="Robot-Red3" name="Robot" value="Red 3"/>
                <label className="red">Red-3</label>

                <input className="radio-field-style" type="radio" id="Robot-Blue3" name="Robot" value="Blue 3"/>
                <label className="blue">Blue-3</label>
              </td>
            </tr>
            <br /><br />
            <tr>
              <td></td>
              <td><button type="submit" className="button" onclick="sendInfo()">Submit</button></td>
            </tr>
          </table>
        </div>
      </form>



      {submittedData && (
        <div>
          <h2>Submitted Data:</h2>
          <p>Scouter Initials: {submittedData.scoutingInitials}</p>
          <p>Match Number: {submittedData.matchNumber}</p>
          <p>Team Number: {submittedData.teamNumber}</p>
          <p>Match Level: {submittedData.matchLevel}</p>
          <p>Robot: {submittedData.robot}</p>
        </div>
      )}

    </div>
  )
}

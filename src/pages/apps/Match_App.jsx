import React, { useState } from 'react';
import '../Field_Types.css';

export default function Match_App() {
  const [formData, setFormData] = useState({
    scoutingInitials: "",
    matchNumber: "",
    teamNumber: "",
    matchLevel: "",
    robot: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData(formData);
    console.log(formData);
  };

  return (
    <div>
      <h1 align="center">Match App</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="scouting-initial">Scouter Initials: </label>
                </td>
                <td>
                  <input
                    className="text-field-style"
                    type="text"
                    id="scouting-initial"
                    name="scoutingInitials"
                    value={formData.scoutingInitials}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="match-number">Match Number: </label>
                </td>
                <td>
                  <input
                    className="text-field-style"
                    type="text"
                    id="match-number"
                    name="matchNumber"
                    value={formData.matchNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="team-number">Team Number: </label>
                </td>
                <td>
                  <input
                    className="text-field-style"
                    type="text"
                    id="team-number"
                    name="teamNumber"
                    value={formData.teamNumber}
                    onChange={handleChange}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Match Level: </label>
                </td>
                <td>
                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Qualifications"
                    name="matchLevel"
                    value="Qualifications"
                    checked={formData.matchLevel === "Qualifications"}
                    onChange={handleChange}
                  />
                  <label htmlFor="Qualifications">Qualifications</label>
                  <br />

                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Semifinals"
                    name="matchLevel"
                    value="Semifinals"
                    checked={formData.matchLevel === "Semifinals"}
                    onChange={handleChange}
                  />
                  <label htmlFor="Semifinals">Semifinals</label>
                  <br />

                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Finals"
                    name="matchLevel"
                    value="Finals"
                    checked={formData.matchLevel === "Finals"}
                    onChange={handleChange}
                  />
                  <label htmlFor="Finals">Finals</label>
                  <br />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Robot: </label>
                </td>
                <td>
                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Robot-Red1"
                    name="robot"
                    value="Red 1"
                    checked={formData.robot === "Red 1"}
                    onChange={handleChange}
                  />
                  <label className="red" htmlFor="Robot-Red1">Red-1</label>

                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Robot-Blue1"
                    name="robot"
                    value="Blue 1"
                    checked={formData.robot === "Blue 1"}
                    onChange={handleChange}
                  />
                  <label className="blue" htmlFor="Robot-Blue1">Blue-1</label>
                  <br />

                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Robot-Red2"
                    name="robot"
                    value="Red 2"
                    checked={formData.robot === "Red 2"}
                    onChange={handleChange}
                  />
                  <label className="red" htmlFor="Robot-Red2">Red-2</label>

                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Robot-Blue2"
                    name="robot"
                    value="Blue 2"
                    checked={formData.robot === "Blue 2"}
                    onChange={handleChange}
                  />
                  <label className="blue" htmlFor="Robot-Blue2">Blue-2</label>
                  <br />

                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Robot-Red3"
                    name="robot"
                    value="Red 3"
                    checked={formData.robot === "Red 3"}
                    onChange={handleChange}
                  />
                  <label className="red" htmlFor="Robot-Red3">Red-3</label>

                  <input
                    className="radio-field-style"
                    type="radio"
                    id="Robot-Blue3"
                    name="robot"
                    value="Blue 3"
                    checked={formData.robot === "Blue 3"}
                    onChange={handleChange}
                  />
                  <label className="blue" htmlFor="Robot-Blue3">Blue-3</label>
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <button type="submit" className="button">Submit</button>
                </td>
              </tr>
            </tbody>
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
  );
}

import { Dropdown } from 'bootstrap';
import React, { useState } from 'react';

function DailyReflectionForm ({onAddEntry}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formJSON = Object.fromEntries(formData.entries());
    onAddEntry ({...formJSON, id: crypto.randomUUID()});
  };

  const [feel, setFeel] = useState("happy");
  const [feelTomorrow, setFeelTomorrow] = useState("happy");
    
  const handleFeelChange =(event) =>{
    setFeel(event.target.value)
  }

  const handleFeelTomorrowChange =(event) =>{
    setFeelTomorrow(event.target.value)
  }

  const reflectionFormStyle = {
    backgroundColor: "#FFEBF8",
    paddingTop: "5px",
    marginTop: "10px"
  }

  return (
    <div className="col-12" style={reflectionFormStyle}>
      <form onSubmit={handleSubmit}>
          <div className="reflection-entry col-6">
            <div className='question'>  
              <label>Date: </label>
              <input
                type="date"
                name = "date"
              />
            </div>
            
            <div className='question'>
              <label>How do I feel today? </label>
              <select value={feel} onChange={handleFeelChange} name="feel">
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Strong">Strong</option>
              <option value="Calm">Calm</option>
              <option value="Nervous">Nervous</option>
              <option value="Angry">Angry</option>
              <option value="Surprised">Surprised</option>
              <option value="Excited">Excited</option>
              <option value="Annoyed">Annoyed</option>
              <option value="Proud">Proud</option>
              <option value="Silly">Silly</option>
              <option value="Bored">Bored</option>
              </select>
            </div>

            <div className='question'>
              <label>What did I try today? </label>
              <textarea
              name = "try"
              />
            </div>

            <div className='question'>
              <label>What did I worry about today? </label>
              <textarea
              name= "worry"
              />
            </div>

            <div className='question'>
              <label>What am I pleased about today? </label>
              <textarea
              name = "pleased"
              />
            </div>

            <div className='question'>
              <label>How do I feel about tomorrow? </label>
              <select value={feelTomorrow} onChange={handleFeelTomorrowChange} name="feelTomorrow">
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Strong">Strong</option>
              <option value="Calm">Calm</option>
              <option value="Nervous">Nervous</option>
              <option value="Angry">Angry</option>
              <option value="Surprised">Surprised</option>
              <option value="Excited">Excited</option>
              <option value="Annoyed">Annoyed</option>
              <option value="Proud">Proud</option>
              <option value="Silly">Silly</option>
              <option value="Bored">Bored</option>
              </select>
            </div>

          </div>
        <button type="submit" className='button-block'>Submit</button>
      </form>
    </div>
  );
};

export default DailyReflectionForm;
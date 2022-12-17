import React from 'react';
import { useState } from 'react';
import "../css/oneTap.css";
import Symptoms from '../../../components/Symptoms/js/Symptoms';
const data = [
  "Headache", "Fever", "Dry Cough", "Wet Cough", "Loose Motion", "Constipation", "Runny Nose", "Red Eye", "Feeling cold"
  , "Rashes", "Itching", "Breathlessness", "Bone Pain", "Dizziness", "Oral Ulcer", "Stomach Ulcer", "Nausea", "Weakness", "Pain in Knee", "Leg Sprain", "Cut on Skin", "Vomitting", "Swollen Eye", "Migraine", "Unable to Sleep",
  "Loss of appetite", "Pain in Kness", "Burning while Urinating"
  , "Itchiness in Genitals", "Dandruff", "Abdominal (Pain)", "Abdominal (Burning)", "Chest Pain", "Chest Burning", "Neck Pain", "Nose Bleeding"];
function OneTap() {
  const [show, setShow] = useState(true);
  const [symData, setSymData] = useState(data);
  const [selectedSymptom, setSelectedSymptom] = useState([]);

  const handleSymptomColor = (k) => {
    return selectedSymptom.push(k);
  }
  function test() {
    console.log("symptom is clicked");
  }
  return (
    <div>
      <div className="container">
        <div className="enquiry-div">
          <p className="general-question">
            Are you here for General Consultation?
          </p>
        </div>
        <div className="selection">
          <button className="btn btn-primary">Yes</button>
          <button className="btn btn-secondary">No, I want to see a specialist</button>
        </div>
        <hr></hr>
        <div>
          <span>
            <p className="text-1">Please select 0-3 Symptoms and Let Us Generate a Prescription for you </p>
          </span>
          <span>
            <button onClick={() => { setShow(!show) }}
              className="btn-light">{show ? "Show More Symptoms" : "Show Less"}</button>
          </span>
        </div>

        {/*  symptoms cards component  */}
        <div className="d-flex flex-wrap ">
          {/* {symData.slice((x, i) => show ? i < 18 : i).map((x, i) => {
            return <div onClick={() => { handleSymptomColor(i) }} className={`m-2 ${selectedSymptom.includes(i) ? "selectedSymptomColor" : "sym-card"}`}
              key={i}>{x}</div>
          })} */}
          {symData.map((x, i) => {
            return <div onClick={() => { handleSymptomColor(i) }} className={`m-2 ${selectedSymptom.includes(i) ? "selectedSymptomColor" : "sym-card"}`}
              key={i}>{x}</div>
          })}
        </div>
        {console.log(selectedSymptom, "abc")};
        {/* symptom component ends */}
        <div className="d-flex justify-content-center mt-4">
          <button className="btn btn-submit">Generate Prescription</button>
        </div>
      </div>
    </div>
  )
}

export default OneTap

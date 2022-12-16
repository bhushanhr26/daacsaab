import React from 'react';
import { useState } from 'react';
import "../css/oneTap.css";
import Symptoms from '../../../components/Symptoms/js/Symptoms';
const data=[
  "Headache","Fever","Dry Cough","Wet Cough","Loose Motion","Constipation","Runny Nose","Red Eye","Feeling cold"
,"Rashes","Itching","Breathlessness","Bone Pain","Dizziness","Oral Ulcer","Stomach Ulcer","Nausea","Weakness","Pain in Knee","Leg Sprain","Cut on Skin","Vomitting","Swollen Eye","Migraine","Unable to Sleep",
"Loss of appetite","Pain in Kness","Burning while Urinating"
,"Itchiness in Genitals","Dandruff","Abdominal (Pain)","Abdominal (Burning)","Chest Pain","Chest Burning","Neck Pain","Nose Bleeding"];
function OneTap() {
const [show,setShow]=useState(true);
const [symData, setSymData] = useState(data);
const[buttonText,setButtonText]=useState("Show more Symptoms")
const changeText=(text)=>setButtonText(text);
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
        <button onClick={()=>{setShow(false); setButtonText("Show Less")}}  className="btn-light">{buttonText}</button>
      </div>
      <div className="d-flex flex-wrap ">
       
      {symData.filter((x,i)=>show?i<18:i).map((x,i)=>{
      return <div className="testS ms-2 my-2 sym-card"
       key={i}>{x}</div>
          })}
      </div>
      
      
      </div>
      
    </div>
  )
}

export default OneTap

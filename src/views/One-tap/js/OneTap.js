import React from 'react';
import "../css/oneTap.css";
const oneTap = () => {
const symptoms=["Headache","Fever","Dry Cough","Wet Cough","Loose Motion","Constipation","Runny Nose","Red Eye","Feeling cold"
,"Rashes","Itching","Breathlessness","Pain in Knee","Leg Sprain","Cut on Skin","Vomitting","Swollen Eye","Migraine","Unable to Sleep",
"Loss of appetite","Pain in Kness"];
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

      </div>
    </div>
  )
}

export default oneTap

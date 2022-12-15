import React from 'react';
import "../css/oneTap.css";
const oneTap = () => {
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
      </div>
    </div>
  )
}

export default oneTap

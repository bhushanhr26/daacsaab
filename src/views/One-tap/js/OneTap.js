import React, { useEffect } from "react";
import { useState } from "react";
import "../css/oneTap.css";
import Modal from "@mui/material/Modal";
import { Box, Typography } from "@mui/material";

const data = [
  "Headache",
  "Fever",
  "Dry Cough",
  "Wet Cough",
  "Loose Motion",
  "Constipation",
  "Runny Nose",
  "Red Eye",
  "Feeling cold",
  "Rashes",
  "Itching",
  "Breathlessness",
  "Bone Pain",
  "Dizziness",
  "Oral Ulcer",
  "Stomach Ulcer",
  "Nausea",
  "Weakness",
  "Pain in Knee",
  "Leg Sprain",
  "Cut on Skin",
  "Vomitting",
  "Swollen Eye",
  "Migraine",
  "Unable to Sleep",
  "Loss of appetite",
  "Pain in Kness",
  "Burning while Urinating",
  "Itchiness in Genitals",
  "Dandruff",
  "Abdominal (Pain)",
  "Abdominal (Burning)",
  "Chest Pain",
  "Chest Burning",
  "Neck Pain",
  "Nose Bleeding",
];

export default function OneTap() {
  const [show, setShow] = useState(true);
  const [symData, setSymData] = useState([...data]);
  const [selectedSymptom, setSelectedSymptom] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleSymptomColor = (symptom) => {
    if (!selectedSymptom.includes(symptom)) {
      const prevValue = [...selectedSymptom, symptom];
      setSelectedSymptom(prevValue);
    } else {
      const prevValue = selectedSymptom.filter((sym) => sym !== symptom);
      setSelectedSymptom(prevValue);
    }
  };

  return (
    <div className="">
      <div className="enquiry-div container">
        <p className="general-question">
          Are you here for General Consultation?
        </p>
      </div>
      <div className="selection container">
        <button className="btn btn-primary">Yes</button>
        <button className="btn btn-secondary">
          No, I want to see a specialist
        </button>
      </div>
      <hr></hr>
      <div className="container">
        <div className="d-flex justify-content-between">
          <p className="text-1">
            Please select 0-3 Symptoms and Let Us Generate a Prescription for
            you
          </p>
          <button
            onClick={() => {
              setShow(!show);
            }}
            className="btn-light"
          >
            {show ? "Show More Symptoms" : "Show Less"}
          </button>
        </div>
        {/*  symptoms cards component  */}
        <div className="d-flex flex-wrap ">
          {(show?symData.slice(0,15):symData).map((x, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  handleSymptomColor(i);
                }}
                className={`m-2 ${
                  selectedSymptom.includes(i)
                    ? "selectedSymptomColor"
                    : "sym-card"
                }`}
              >
                {x}
              </div>
            );
          })}
        </div>
        <button onClick={() => setShowModal(true)}>sfdvsfvsfvsfv</button>
        
        {/* symptom component ends */}
        <div className="d-flex justify-content-center mt-4 mb-5">
          <button className="btn btn-submit">Generate Prescription</button>
        </div>
      </div>
      <div>
        <Modal open={showModal}>
          <Box>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
}

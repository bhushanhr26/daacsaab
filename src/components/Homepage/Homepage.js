import React from "react";
import { makeStyles } from "@mui/styles";
import img1 from "../../assets/home1.svg";

import testomonial from "../../assets/openlightbox.svg";
import superCharge from "../../assets/div.svg";
import feature1 from "../../assets/feature1.svg";
import arrow from "../../assets/arrow.svg";

const useStyles = makeStyles({
  root: {
    background: "#025F4C",
    paddingTop: "80px",
  },
  main: {},
  firstContent: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  firstContentTestemonial: {
    display: "flex",
    justifyContent: "space-evenly",
  },
  grid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    maxWidth: "216px",
  },
  textColor: {
    color: "#36D6C3",
    fontSize: "21px",
  },
  textColorInner: {
    color: "#ffffff",
    fontSize: "21px",
  },
  textColorDesc: {
    color: "#FFFFFF",
    fontWeight: 400,
    fontSize: "12px",
    maxWidth: "150px",
    margin: "15px 0px 15px 0px",
  },
  talkToUs: {
    background: "#BCDD33",
    borderRadius: "8px",
    color: " #025F4C",
    fontWeight: 500,
    fontSize: "15.4px",
    border: "none",
    padding: "7px 17px",
    margin: "15px 0px 15px 0px",
  },
  testomonial: {
    color: "#36D6C3",
    fontWeight: 400,
    fontSize: "14px",
  },

  trusted: {
    background: " #FFFFFF",
  },
  testomonialText: {
    color: "#025F4C",
    fontWeight: 500,
    fontSize: "23.408px",
  },
  featureDiv: {
    border: " 1px solid #36D6C3",
    borderRadius: "48.1712px",
  },
});

export default function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={`${classes.firstContent} my-5`}>
          <div className={classes.grid}>
            {" "}
            <span className={classes.textColor}>
              With great Technology{" "}
              <span className={classes.textColorInner}>comes great</span>{" "}
              Healthcare
            </span>
            <span className={classes.textColorDesc}>
              Consultations with curated doctors starting as low as{" "}
              <span>₹ 249</span>
            </span>
            <button className={classes.talkToUs}>Talk to us</button>
            <div className={classes.firstContentTestemonial}>
              <div>
                <span className={classes.testomonial}>13k+</span>
                <p className={classes.testomonial}>Happy Patients</p>
              </div>
              <div>
                <span className={classes.testomonial}>4.8/5</span>
                <p className={classes.testomonial}>App Rating</p>
              </div>
              <div>
                <span className={classes.testomonial}>300+</span>
                <p className={classes.testomonial}>Doctors</p>
              </div>
            </div>
          </div>
          <img alt="img1" src={img1} />
        </div>
      </div>

      <div className={`${classes.trusted} `}>
        <div className="align-items-lg-start container d-flex justify-content-between py-5">
          <img alt="testemonial" src={testomonial} className="img-fluid mx-5" />
          <span className={`${classes.testomonialText} col-3`}>
            Trusted by 13K+ happy patients and their families
          </span>
        </div>
        <div className="container my-5">
          <img src={superCharge} alt="superCharge" className="img-fluid ms-5" />
        </div>
      </div>
      <div className={`container ${classes.featureDiv}`}>
        <div className="d-flex justify-content-around">
          <img src={feature1} alt="feature1" className="img-fluid" />
          <div className="d-flex flex-column col-3">
            <span className="featureText">
              Benefits your family<span className=""> will love</span>
            </span>
            <span className="chatText">
              <img src={arrow} alt="arrow" className="img-fluid me-3" />
              Chat with a family doctor 24/7
            </span>
            <span className="chatText">
              <img src={arrow} alt="arrow" className="img-fluid me-3" />
              Get help with any condition
            </span>
            <p className="consultationText">
              24/7 Virtual Consultations with our team of doctors. Text your
              doctor, anytime. Locate nearby partnered hospitals easily.
            </p>

            <button className="learnMoreBtn col-5">Learn more</button>
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column col-3">
            <span className="featureText1">
              Benefits your family<span className=""> will love</span>
            </span>
            <span className="chatTextOne">
              <img src={arrow} alt="arrow" className="img-fluid me-3" />
              Chat with a family doctor 24/7
            </span>
            <span className="chatTextOne">
              <img src={arrow} alt="arrow" className="img-fluid me-3" />
              Get help with any condition
            </span>
            <p className="consultationText">
              24/7 Virtual Consultations with our team of doctors. Text your
              doctor, anytime. Locate nearby partnered hospitals easily.
            </p>

            <button className="learnMoreBtn col-5">Learn more</button>
          </div>
          <img src={feature1} alt="feature1" className="img-fluid" />
        </div>
      </div>
    </div>
  );
}

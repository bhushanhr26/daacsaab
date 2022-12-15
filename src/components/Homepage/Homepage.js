import React from "react";
import { makeStyles } from "@mui/styles";
import img1 from "../../assets/home1.svg";
import { padding } from "@mui/system";

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
});

export default function Homepage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.firstContent}>
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
    </div>
  );
}

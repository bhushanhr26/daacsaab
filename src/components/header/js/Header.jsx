import React from "react";
import logo from "../../../assets/DaacSaabLogo.svg";
import { makeStyles } from "@mui/styles";
import "../css/header.css";

const useStyles = makeStyles({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "10px",
  },
});

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <span>Product Features</span>
        <span>About US</span>
        <span>Resoures</span>
      </div>
      <div>
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  );
}

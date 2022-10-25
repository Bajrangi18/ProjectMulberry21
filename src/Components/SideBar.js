// import React, { useState } from "react";
import "./SideBar.css";
// import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
// import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import dash from "../Images/dash.svg"
import remote from "../Images/remote.svg"
import detect from "../Images/detect.svg"
import home from "../Images/home.svg"
// import { SettingsBackupRestoreRounded } from "@material-ui/icons";
function SideBar({setScreen}) {
  function fun1(name) {
    document.getElementById(name).style.scale='1.2';
    document.getElementById(name).style.filter='invert(44%) sepia(13%) saturate(1328%) hue-rotate(98deg) brightness(97%) contrast(89%)';
}
function fun2(name) {
    document.getElementById(name).style.scale='1';
    document.getElementById(name).style.filter='invert(0%) sepia(2%) saturate(0%) hue-rotate(232deg) brightness(106%) contrast(100%)';
}


  return (
      <div id="nav">
            <br></br>
            <div className="container">
            <button type="button" className="btn "><img src={home} alt="home" id="home" />Home</button>
            </div>
            <hr></hr>
            <div className="container" >
            <button type="button" className="btn "id="dash_button" onClick = {() => setScreen(1)} onMouseOver={() => fun1('dash')} onMouseLeave={() => fun2('dash')} >
              <img src={dash} alt="dash" id="dash"/>Dashboard</button>
            </div>
            <br></br>
            <div className="container" >
            <button type="button" className="btn " id="remote_button" onClick = {() => setScreen(2)} onMouseOver={() => fun1('remote')} onMouseLeave={() => fun2('remote')}>
              <img src={remote} alt="remote" id="remote"/>Remote Access</button>
            </div>
            <br></br>
            <div className="container" >
            <button type="button" className="btn " id="detect_button" onClick = {() => setScreen(3)} onMouseOver={() => fun1('detect')} onMouseLeave={() => fun2('detect')}>
              <img src={detect} alt="detect" id="detect" />AI Detection</button>
            </div>
            <br></br>        
      </div>
  );
}

export default SideBar;
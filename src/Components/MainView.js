import InfoReader from "./InfoReader";
import "./MainView.css";
import moist from "../Images/moist.svg";
import pH from "../Images/pH.svg";
import solar from "../Images/solar.svg";
import Controls from "./Controls"
import EnvHolders from "./EnvHolders";
import tempT from "../Images/temp.svg";
import humi from "../Images/humid.svg";
function MainView(props) {
    let infMoist = 'Wet';
    let infpH = 'Medium';
    let infSolar = 'High';
    if (props.screenNum===1) {
        return (
            <div className="container" id="firstScreen"><br></br>
                <div className="container-flex text-center  ">
                    <div className="row gx-5" id="firstRow">
                        <div className="col-4">
                                <InfoReader info="Soil Moisture" value={400} pic={moist} inf={infMoist}/>
                        </div>
                        <div className="col-4">
                                <InfoReader info="Soil pH Level" value={6.8} pic={pH} inf={infpH}/>
                        </div>
                        <div className="col-4">
                                <InfoReader info="Solar Contact" value={300} pic={solar} inf={infSolar}/>
                        </div>
                    </div>
                    <br></br>
                </div><br></br>
                <div className="parent-div">
                    <div className="divOne">
                        Line Chart Area
                    </div>
                    <div className="divTwo" >
                    <h3 style={{'text-align':'center','color':'#3f8161','padding-top':'2%'}}>Flow Controls</h3><br></br>
                            <Controls type="Water Release" /><br></br>
                            <Controls type="Oxygen Release" /><br></br>
                    </div>
                    <div className="divThree">
                            <h3 style={{'text-align':'center','padding-top':'2%','color':'#3f8161'}}>Green House</h3><br></br>
                            <EnvHolders type="Temp" pic={tempT} value="30"/>
                            <EnvHolders type="Humid" pic={humi} value="67"/>
                    </div>
                </div>
            </div>
        );
    }
    if (props.screenNum===2) {
        return (
            <div>
                <p>Here: {props.screenNum}</p>
            </div>
        );
    }  if (props.screenNum===3) {
        return (
            <div>
                <p>Here: {props.screenNum}</p>
            </div>
        );
    }
}

export default MainView;

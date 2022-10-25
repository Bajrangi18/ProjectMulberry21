import "./InfoReader.css"
function InfoReader(props) {
    return (
            <div id="mainInfo">
                    <div className="div1"><img src={props.pic} alt={props.info} /></div>
                    <div className="div2"><p id="info">{props.info}</p></div>
                    <div className="div3"><p>{props.value}</p></div>
                    <div className="div4"><p id="inference">{props.inf}</p></div>
            </div>
    );
}

export default InfoReader;
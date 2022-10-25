function Controls(prop) {
    const styleControls = {
            'padding-left': '8%',
            'font-size': '1.5vw',
            'font-weight': '600',
            'color': '#3f8161',
    }
    return (
            <div class="test" >
                <div className="form-check form-switch" style={{'padding-left':'25%'}} >
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" style={{'scale':'1.1','padding-top':'11%','width':'25%'}}/>
                    <label className="form-check-label" for="flexSwitchCheckDefault" style={styleControls}>{prop.type}</label>
                    </div>
            </div>
    );
}

export default Controls
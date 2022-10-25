function EnvHolders(prop) {
    const styleHolder = {
        "display": "grid",
        "grid-template-columns": "5fr 1fr 4fr",
        "grid-template-rows": "1fr",
        "grid-column-gap": "25px",
        "grid-row-gap": "25px",
        'text-align':'center',
        'font-size': '1.5vw',
        'font-weight': '600',
        'color': '#3f8161'
    };
    return (
            <div style={styleHolder} className="EnvHolder">
                    <p>{prop.type}</p>
                    <img src={prop.pic} alt="img" style={{'filter': 'invert(44%) sepia(13%) saturate(1328%) hue-rotate(98deg) brightness(97%) contrast(89%)'}}/>
                    <p style={{'font-weight':'700'}}>{prop.value}</p>
            </div>

    );
}

export default EnvHolders;
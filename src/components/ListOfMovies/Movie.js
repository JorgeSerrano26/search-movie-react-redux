import React from 'react';

const divStyles = {
    display: "flex",
    border: "1px solid #000",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    width: "300px"
}

const Movie = ({id, title = '', image = '', year = null}) => {
    return <div key={id} style={divStyles}>
        <img src={image} alt={title} width="auto" height="100" />
        <div style={{flexGrow: 2, textAlign: "left", padding: "0 20px"}}>
            <p>{title}</p>
            <p>Año: {year}</p>
        </div>
    </div>
}

export default Movie;
import loader from "../../Assets/Images/loader.gif";
import React from "react";

const preloaderStyle = {
    gridArea: 'c',
    display: 'block',
    margin: '0 auto'
}

let Preloader = () => {
    return <img src={loader} style={preloaderStyle} />
}

export default Preloader
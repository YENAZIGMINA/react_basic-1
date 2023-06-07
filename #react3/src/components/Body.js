import React from "react";

const Body = (props) => {
    // console.log(props)
    return (
        <div>{props.name} live at {props.location}</div>
    )
}

export default Body;
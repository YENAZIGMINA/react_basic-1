import React from "react";

const Footer = (props) => {
    const {name,location} = props;
    return (
        <div>{name}'s hometown is {location}</div>
    )
}

export default Footer;
import React from "react";

const Header = function({num,color}){
    return (
        <div>
            I'm {num}번 {color} header
        </div>
    );
}

export default Header;
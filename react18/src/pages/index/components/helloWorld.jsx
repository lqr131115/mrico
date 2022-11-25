import React from "react";
import "./helloWorld.scss";

const HelloWord = (props) => {
    return (
        <div >
            <h1>{props.msg}</h1>
            <p>
                Install
                <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
                in your IDE for a better DX
            </p>
            <p className="read-the-docs">Click on the logo to learn more</p>
        </div>
    );
}

export default HelloWord;
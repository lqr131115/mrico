import React from "react";
import HelloWorld from "./components/helloWorld.jsx";
import logo from '../../static/react.png'
import "./index.scss"

const Index = () => {
  return (
    <div className="box">
      <div>
        <a href="https://react.docschina.org" target="_blank">
          <img src={logo} className='logo' alt="React log" />
        </a>
      </div>
      <HelloWorld msg="React" />
    </div>
  );
};

export default Index;

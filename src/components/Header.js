import React from "react";
import logo from '../images/logo192.png';

export default function Header() {
  return (
      <nav className="header">
        <div className="logoBar">
          <img className="logo" src={logo} />
          <h3 className="logoName">ReactFacts</h3>
        </div>
        <h4>Basic React App 1</h4>
      </nav>
  );
}

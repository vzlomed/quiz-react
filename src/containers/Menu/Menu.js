import React, { Component } from "react";
import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <div>
          <button></button>
          <img alt="" className="thumbnail" src="./logo.png"></img>
        </div>
        <div className="RightSide"></div>
      </div>
    );
  }
}

export default Menu;

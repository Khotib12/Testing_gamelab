// header.js
import React, { Component } from "react";
import { NavStyle, UlStyle, AStyle } from "./StyledHeader";

class Header extends Component {
  render() {
    return (
      <NavStyle>
        <h3>Logo</h3>
        <UlStyle>
          <li>
            <AStyle href="#">Home</AStyle>
          </li>
          <li>
            <AStyle href="#">About</AStyle>
          </li>
          <li>
            <AStyle href="#">Work</AStyle>
          </li>
          <li>
            <AStyle href="#">Careers</AStyle>
          </li>
          <li>
            <AStyle href="#">Contact Us</AStyle>
          </li>
        </UlStyle>
      </NavStyle>
    );
  }
}

export default Header;

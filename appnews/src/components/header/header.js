// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Navbar, NavItem, Row, Input} from 'react-materialize';

import './stylesheet/header.css';
import './stylesheet/header-switch.scss';
import { toggleDarkLight } from './javascript/switch-mode.js';

const Header = () => (
  <Row>  
    <div className="header-info" >
        <h1>News</h1>
        <div className="switch">
            <label>
              <input name="on" type="checkbox" value='1' onClick={toggleDarkLight}></input>
              <span className="lever"><p className="p-light">LIGHT</p><p className="p-dark">DARK</p></span>
            </label>
        </div>
    
    </div>
  </Row>
);

export default Header;
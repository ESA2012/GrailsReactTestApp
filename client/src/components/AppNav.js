import React from 'react';
import { Navbar, Nav, MenuItem, NavDropdown } from 'react-bootstrap';
import grailsLogo from '../images/grails-cupsonly-logo-white.svg';

export default class AppNav extends React.Component {

  constructor(props) {
    super(props);
    this.selectFile = this.selectFile.bind(this);
    this.doUploadFile = this.doUploadFile.bind(this);
  }

  selectFile() {
    this.inputElement.click()
  }

  doUploadFile() {
    alert('AUA');
  }

  render() {
    return (
      <Navbar style={{backgroundColor: '#4D8618', backgroundImage: 'none', borderRadius: 0}}>
        <Navbar.Header>
          <Navbar.Brand>
            <i className="fa grails-icon">
              <img src={grailsLogo} alt="Grails"/>
            </i>
            Grails
          </Navbar.Brand>
          <Navbar.Toggle/>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown eventKey={1} title="Menu" id="menu-dropdown">
              <MenuItem eventKey={1.1} onClick={this.selectFile}>
                Upload file
              </MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <input
          onChange={this.doUploadFile}
          style={{display: 'none'}}
          type="file"
          ref={input => this.inputElement = input}
        />
      </Navbar>
    );
  }
}



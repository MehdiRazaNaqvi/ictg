import LOGO from "../style/logo.png"
import "../style/home.css"





import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from "react-router-dom";

export default class Example extends React.Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const navigate = this.props.payload




    return (

      <div className="navbar_full" >


        <Navbar className="total" color="light" light expand="md">

          <div className="chk" >
            <NavbarBrand ><img className="logo" src={LOGO} /></NavbarBrand>

            <NavbarToggler className="toggler_logo" onClick={this.toggle} />

          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#home" >Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#services" >Services</NavLink>
              </NavItem>


              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  About
                </DropdownToggle>
                <DropdownMenu className="drop" end>
                  <DropdownItem href="#about" >
                    About Us
                  </DropdownItem>


                  <DropdownItem href="#team" >
                    Our Team
                  </DropdownItem>

                  <DropdownItem href="#careers" >
                    Careers
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>


              <NavItem>
                <NavLink href="#news" >News and Events</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="#corporate_training" nav caret>
                  Corporate Training
                </DropdownToggle>
                <DropdownMenu className="drop" end>
                  <DropdownItem href="#organization">
                    Organization and team assesment
                  </DropdownItem>
                  <DropdownItem href="#conflict" >
                    Conflict Resolution
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle href="#personal_training" nav caret>
                  Personal Training
                </DropdownToggle>
                <DropdownMenu className="drop" end>
                  <DropdownItem href="#self" >
                    Self managment training
                  </DropdownItem>
                  <DropdownItem href="#innner" >
                    Inner growth training
                  </DropdownItem>

                </DropdownMenu>
              </UncontrolledDropdown>

              <NavItem>
                <NavLink href="#coach">Coach Training</NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="#quote">Get a quote</NavLink>
              </NavItem>

            

              <NavItem>
                <NavLink href="#contact">Contact Us</NavLink>
              </NavItem>


            </Nav>

          </Collapse>


        </Navbar>
      </div>
    );
  }
}
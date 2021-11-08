import React,{useState,useEffect} from "react";
import {FaBars} from "react-icons/fa";
import { IconContext} from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import * as NavbarElements from "./NavbarElements";

const Navbar = ({ toggle }) => {
const [scrollNav,setScrollNav]=useState(false)


const chnageNav=()=>{
  if(window.scrollY >= 80){
    setScrollNav(true)
  }else{
    setScrollNav(false)
  }
};

useEffect(()=>{
  window.addEventListener('scroll',chnageNav)
},[]);


const toggleHome=()=>{
  scroll.scrollToTop()
};


  return (
    <>
    <IconContext.Provider value={{color:'#fff'}}>
      <NavbarElements.Nav scrollNav={scrollNav}>
        <NavbarElements.NavbarContainer>
          <NavbarElements.NavLogo to="/" onClick={toggleHome}>InfiniteLoop</NavbarElements.NavLogo>
          <NavbarElements.MobileIcon onClick={toggle}>
            <FaBars />
          </NavbarElements.MobileIcon>
          <NavbarElements.NavMenu>
            <NavbarElements.NavItem>
              <NavbarElements.NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>ERP</NavbarElements.NavLinks>
            </NavbarElements.NavItem>
            <NavbarElements.NavItem>
              <NavbarElements.NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Inventory-Management</NavbarElements.NavLinks>
            </NavbarElements.NavItem>
            <NavbarElements.NavItem>
              <NavbarElements.NavLinks to="services" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Services</NavbarElements.NavLinks>
            </NavbarElements.NavItem>
            <NavbarElements.NavItem>
              <NavbarElements.NavLinks to="HaveEPP" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Have-an-ERP-System</NavbarElements.NavLinks>
            </NavbarElements.NavItem>
            <NavbarElements.NavItem>
              <NavbarElements.NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Discover</NavbarElements.NavLinks>
            </NavbarElements.NavItem>
          </NavbarElements.NavMenu>
          <NavbarElements.NavBtn>
            {/* <NavBtnLink to="/">Sign In</NavBtnLink> */}
          </NavbarElements.NavBtn>
        </NavbarElements.NavbarContainer>
      </NavbarElements.Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

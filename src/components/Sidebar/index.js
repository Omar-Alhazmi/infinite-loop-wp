import React from "react";
import * as SidebarElements from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarElements.SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarElements.Icon onClick={toggle}>
        <SidebarElements.CloseIcon />
      </SidebarElements.Icon>
      <SidebarElements.SidebarWrapper>
        <SidebarElements.SidebarMenu>
          <SidebarElements.SidebarLink to="about" onClick={toggle}>
          ERP
          </SidebarElements.SidebarLink>
          <SidebarElements.SidebarLink to="discover" onClick={toggle}>
          Inventory-Management
          </SidebarElements.SidebarLink>
          <SidebarElements.SidebarLink to="services" onClick={toggle}>
          Services
          </SidebarElements.SidebarLink>
          <SidebarElements.SidebarLink to="HaveEPP" onClick={toggle}>
          Have-an-ERP-System 
         </SidebarElements.SidebarLink>
         <SidebarElements.SidebarLink to="signup" onClick={toggle}>
         Discover
        </SidebarElements.SidebarLink>
        </SidebarElements.SidebarMenu>
      </SidebarElements.SidebarWrapper>
    </SidebarElements.SidebarContainer>
  );
};

export default Sidebar;

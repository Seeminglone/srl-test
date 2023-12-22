
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../styles/theme";
import MenuItem from "./MenuItem";
import Links from "./Links";
import logo from "../../assets/logo-header.png";


const HeaderContainer = styled.div`
  background-color: ${theme.colors.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  padding: 0 100px;
  box-sizing: border-box;
  position: fixed;
  z-index: 3;
  font-family: "Roboto Condensed";
`;
const MenuItemsContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  overflow-x: auto;
`;

const IconContainer = styled.div`
  height: -webkit-fill-available;
  width: auto;
  margin: 12px;
`;

const LogoImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const Header = () => {
  const menuItems = [
    {
      title: "Video",
      link: "/videos",
    },
    {
      title: "Schedule",
      link: "/schedule",
    },
    {
      title: "Results",
      link: "/results",
    },
    {
      title: "Drivers",
      link: "/drivers",
    },
    {
      title: "Teams",
      link: "/teams",
    },
  ];

  return (
    <HeaderContainer>
      <IconContainer>
        <Link to="/">
          <LogoImage src={logo} />
        </Link>
      </IconContainer>

      <MenuItemsContainer>
        {menuItems.map((item, index) => {
          return <MenuItem {...item} key={index} />;
        })}
      </MenuItemsContainer>
      <Links />
    </HeaderContainer>
  );
};

export default Header;

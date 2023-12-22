import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import theme from "../../styles/theme";

const MenuItemButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  &:hover {
    background-color: ${theme.colors.green};

    & > a {
      color: ${theme.colors.dark};
    }
  }

  & > a {
    text-decoration: none;
    color: ${theme.colors.grey};
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 12px;
    font-size: 18px;
  }
`;

const MenuItem = ({ title, link }) => {
  return (
    <MenuItemButton>
      <Link to={link}>{title}</Link>
    </MenuItemButton>
  );
};

export default MenuItem;

import React from "react";
import { Link } from "react-router-dom";

import TMDBLogo from "../../images/tmdb_logo.svg";

import {
  Wrapper,
  Content,
  StyledLink,
  LogoImg,
  TMDBLogoImg
} from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Link>
      <div>
        <StyledLink to="/">Login</StyledLink>
        <StyledLink to="/">Sign Up</StyledLink>
      </div>
    </Content>
  </Wrapper>
);

export default Header;

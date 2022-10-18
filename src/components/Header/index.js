import React from "react";
import { Link } from "react-router-dom";

import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
      </Link>
    </Content>
  </Wrapper>
);

export default Header;

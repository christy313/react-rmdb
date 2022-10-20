import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../Authentication/AuthModal";

import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, StyledLink, TMDBLogoImg } from "./Header.styles";

const Header = () => {
  const [user, setUser] = useState(null);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Link>
        <StyledLink to="/">
          <AuthModal />
        </StyledLink>
      </Content>
    </Wrapper>
  );
};
export default Header;

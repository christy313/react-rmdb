import React, { useContext } from "react";
import { Link } from "react-router-dom";

import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, TMDBLogoImg, StyledLink } from "./Header.styles";

import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);
  // console.log(user);
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Link>

        <div>
          <StyledLink to="/login">
            <span>Login</span>
          </StyledLink>
          <StyledLink to="/signup">
            <span>Sign up</span>
          </StyledLink>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Header;

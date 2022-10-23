import React, { useContext } from "react";
import { Link } from "react-router-dom";

import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, TMDBLogoImg } from "./Header.styles";

import { Context } from "../../context";

const Header = () => {
  const [user] = useContext(Context);
  console.log(user);
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Link>

        {user ? (
          <Link to="/">
            <span>{`Hi, ${user.username}`}</span>
          </Link>
        ) : (
          <Link to="/login">
            <span>Login</span>
          </Link>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;

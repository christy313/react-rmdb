import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, TMDBLogoImg, StyledLink } from "./Header.styles";

import { Context } from "../../context";

const Header = () => {
  const [user, setUser] = useContext(Context);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Link>
        {/* {user && (
          <div>
            {`Hi, ${user.username}, your`}
            <StyledLink to="/favlist">
              <span>Favlist</span>
            </StyledLink>
          </div>
        )} */}

        {user ? (
          <StyledLink to="/" onClick={handleLogout}>
            <span>Logout</span>
          </StyledLink>
        ) : (
          <div>
            <StyledLink to="/login">
              <span>Login</span>
            </StyledLink>
            <StyledLink to="/signup">
              <span>Sign up</span>
            </StyledLink>
          </div>
        )}
      </Content>
    </Wrapper>
  );
};

export default Header;

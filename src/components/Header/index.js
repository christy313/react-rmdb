import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthModal from "../Authentication/AuthModal";

import TMDBLogo from "../../images/tmdb_logo.svg";

import { Wrapper, Content, StyledLink, TMDBLogoImg } from "./Header.styles";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <TMDBLogoImg src={TMDBLogo} alt="tmdb-logo" />
        </Link>
        <div>
          <StyledLink to="/login">Login</StyledLink>
          <StyledLink to="/Signup">Sign Up</StyledLink>
        </div>
      </Content>
    </Wrapper>
  );
};
export default Header;

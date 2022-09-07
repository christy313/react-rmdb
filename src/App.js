import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;

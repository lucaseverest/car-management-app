import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;

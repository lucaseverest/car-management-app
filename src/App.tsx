import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import theme from "./styles/theme";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Index";
import { CarProvider } from "./contexts/CarContext";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CarProvider>
        <GlobalStyle />
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </CarProvider>
    </ThemeProvider>
  );
};

export default App;

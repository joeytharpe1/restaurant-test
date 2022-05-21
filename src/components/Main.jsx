import React from "react";
import { Routes, Route } from "react-router-dom";

//file imports
import Login from "./Login";
import Signup from "./Signup";

//material imports
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000", //black
      light: "", //green
    },
    secondary: {
      main: "#097969", //green
    },
    warning: {
      main: "#fff",
    },
  },
  typography: {
    fontFamily: "Garamond",
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Main;

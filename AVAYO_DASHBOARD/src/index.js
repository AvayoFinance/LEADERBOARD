import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthProvider } from "./components/account/AuthProvider";
import { ContractProvider } from "./components/account/ContractProvider";
const theme = createTheme({
    palette: {
      primary: {
        main: "#2CCBFF",
      },
      secondary: {
        main: "#2CCBFF",
      },
      text: {
        primary: "##2CCBFF",
      },
    },
    typography: {
      fontFamily: "Montserrat",
      body1: {
        fontSize: 20,
      },
      body2: {
        fontSize: 16,
      },
      allVariants: {
        color: "ffffff",
      },
      h4: {
        fontWeight: 600,
        fontSize: 32,
      },
      h5: {
        fontSize: 24,
        fontWeight: 500,
      },
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: "0px 0px 21px 2px #2CCBFF",
            borderRadius: 20,
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: "12px 12px",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 400,
            fontSize: "1.2rem",
            padding: "10px",
            minWidth: 138,
          },
          contained: {
            boxShadow: "0px 0px 11px 2px #2CCBFF ",
          },
          containedSecondary: {
            color: "#ffffff",
          },
        },
      },
    },
  });

const POLLING_INTERVAL = 12000;

const getLibrary = (provider) => {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = POLLING_INTERVAL;
    return library;
};

const Application = () => {
    return (
        <AuthProvider>
            <ContractProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="mask"></div>
                <App />
            </ThemeProvider>
            </ContractProvider>
            </AuthProvider>
        
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Application />
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// import img from "../assets/pak.gif";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import { Store } from "react-notifications-component";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import * as React from "react";
import { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Accounts from "./Account";


const drawerWidth = 240;

function Main(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Router>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <Header openMenu={handleDrawerToggle} />
                <Sidebar closeMenu={handleDrawerToggle} open={mobileOpen} container={container} />
                <Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                    <Toolbar />
                    <Routes>
                        <Route exact path="/" element={<Dashboard />} />
                        <Route path="/account" element={<Accounts />} />
                        
                    </Routes>
                </Box>
            </Box>
        </Router>
    );
}

Main.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Main;

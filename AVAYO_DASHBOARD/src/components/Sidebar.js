import * as React from "react";
import { useState, useEffect } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { FaDiscord } from "react-icons/fa";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Layers, AccountCircle, Calculate, SwapHorizontalCircle, Article, Telegram, Twitter, Museum } from "@mui/icons-material";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/images/logo512.png";

export default function Sidebar(props) {
    const drawerWidth = 300;
    const [select_sideItem, setSelectItem] = useState(window.location.pathname);
    // useEffect(() => {
    //     console.log(select_sideItem);
    // }, select_sideItem);

    const drawer = (
        <div>
            <img className="side_logo" src={logo} />
            <ul className="side_selector">
                <li
                    onClick={() => {
                        setSelectItem("/");
                    }}
                    className={select_sideItem === "/" ? "side_select acive" : "side_select"}
                >
                    <Link to="/">
                        <>
                            <Layers />
                            <span>Dashboard</span>
                        </>
                    </Link>
                </li>
                <li
                    onClick={() => {
                        setSelectItem("/account");
                    }}
                    className={select_sideItem === "/account" ? "side_select acive" : "side_select"}
                >
                    <Link to="/account">
                        <>
                            <AccountCircle />
                            <span>Account</span>
                        </>
                    </Link>
                </li>
                <li
                    onClick={() => {
                        setSelectItem("/calculator");
                    }}
                    className={select_sideItem === "/calculator" ? "side_select acive" : "side_select"}
                >
                    
                </li>
                <li className="side_select">
                    <SwapHorizontalCircle />
                    <span>Swap(SOON)</span>
                </li>
                <li className="side_select">
                    <a href="https://medusa-finance.gitbook.io/medusa/" target="_blank">
                        <Article />
                        <span>Audit</span>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/+M5oe2Itrf-VlOTA1" target={"_blank"}>
                        <Telegram sx={{ color: "white", fontSize: "2rem", mr: "1rem" }} />
                    </a>
                    <a href="https://twitter.com/finance_medusa" target={"_blank"}>
                        <Twitter sx={{ color: "white", fontSize: "2rem", mr: "1rem" }} />
                    </a>
                    <a href="https://discord.gg/ybbW4rFB9u" target={"_blank"}>
                        <FaDiscord size={"2rem"} sx={{ color: "white", mr: "1rem" }} />
                    </a>
                </li>
            </ul>
        </div>
    );
    return (
        <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
            <Drawer
                container={props.container}
                variant="temporary"
                color="secondary"
                open={props.open}
                onClose={props.closeMenu}
                onClick={props.closeMenu}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": { border: "none", backgroundColor: "transparent", backdropFilter:"blur(5px)", width: drawerWidth },
                }}
            >
                <div>
                    <ul className="side_selector">
                        <li
                            onClick={() => {
                                setSelectItem("/");
                            }}
                            className={select_sideItem === "/" ? "side_select acive" : "side_select"}
                        >
                            <Link to="/">
                                <>
                                    <Layers />
                                    <span>Dashboard</span>
                                </>
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                setSelectItem("/account");
                            }}
                            className={select_sideItem === "/account" ? "side_select acive" : "side_select"}
                        >
                            <Link to="/account">
                                <>
                                    <AccountCircle />
                                    <span>Account</span>
                                </>
                            </Link>
                        </li>
                        <li
                            onClick={() => {
                                setSelectItem("/calculator");
                            }}
                            className={select_sideItem === "/calculator" ? "side_select acive" : "side_select"}
                        >
                            <Link to="/calculator">
                                <>
                                    <Calculate />
                                    <span>Calculator</span>
                                </>
                            </Link>
                        </li>
                        <li className="side_select">
                            <SwapHorizontalCircle />
                            <span>Swap</span>
                        </li>
                        <li className="side_select">
                            <a href="https://medusa-finance.gitbook.io/medusa/" target="_blank">
                                <Article />
                                <span>Docs</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/+M5oe2Itrf-VlOTA1" target={"_blank"}>
                                <Telegram sx={{ color: "white", fontSize: "2rem", mr: "1rem" }} />
                            </a>
                            <a href="https://twitter.com/finance_medusa" target={"_blank"}>
                                <Twitter sx={{ color: "white", fontSize: "2rem", mr: "1rem" }} />
                            </a>
                            <a href="https://discord.gg/ybbW4rFB9u" target={"_blank"}>
                                <FaDiscord size={"2rem"} sx={{ color: "white", mr: "1rem" }} />
                            </a>
                        </li>
                    </ul>
                </div>
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: { xs: "none", sm: "block" },
                    "& .MuiDrawer-paper": { border: "none", background: "transparent", width: drawerWidth },
                }}
                open
            >
                {drawer}
            </Drawer>
        </Box>
    );
}

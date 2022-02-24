import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";

const Header = () => {
    const { user, logOut } = useAuth();
    console.log("users eseche",user)
    return (
        <header>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography
                            variant="h4"
                            component="div"
                            sx={{
                                flexGrow: 1,
                                fontFamily: "Raleway, Arial",
                                padding: "10px 0px",
                            }}
                            textAlign="left"
                            fontWeight="bold"
                        >
                            Florist <span style={{ color: "black" }}>Shop</span>
                        </Typography>
                        <NavLink
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                            }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "navy",
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                color="inherit"
                                style={{ fontSize: "15px" }}
                            >
                                Home
                            </Button>
                        </NavLink>
                        <NavLink
                            to="/exploreAllProducts"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                fontWeight: "bold",
                            }}
                            activeStyle={{
                                fontWeight: "bold",
                                color: "navy",
                                textDecoration: "none",
                            }}
                        >
                            <Button
                                color="inherit"
                                style={{ fontSize: "15px" }}
                            >
                                Shop
                            </Button>
                        </NavLink>
                        {user?.email ? (
                            <Box>
                                <NavLink
                                    to="/dashboard"
                                    style={{
                                        textDecoration: "none",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                    activeStyle={{
                                        fontWeight: "bold",
                                        color: "navy",
                                        textDecoration: "none",
                                    }}
                                >
                                    <Button
                                        color="inherit"
                                        style={{ fontSize: "15px" }}
                                    >
                                        Dashboard
                                    </Button>
                                </NavLink>
                                <Button
                                    color="inherit"
                                    style={{ fontSize: "15px" }}
                                    onClick={logOut}
                                >
                                    Logout
                                </Button>
                            </Box>
                        ) : (
                            <NavLink
                                to="/login"
                                style={{
                                    textDecoration: "none",
                                    color: "white",
                                    fontWeight: "bold",
                                }}
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "navy",
                                    textDecoration: "none",
                                }}
                            >
                                <Button
                                    color="inherit"
                                    style={{ fontSize: "15px" }}
                                >
                                    Login
                                </Button>
                            </NavLink>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

export default Header;

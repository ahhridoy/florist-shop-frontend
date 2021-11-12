import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MyOrders from "../MyOrders/MyOrders";
import { Button } from "@mui/material";
import useAuth from "../../../hooks/useAuth/useAuth";
import {
    Switch,
    Route,
    useRouteMatch,
    NavLink,
    useHistory,
} from "react-router-dom";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddAProduct from "../AddAProduct/AddAProduct";
import ManageProducts from "../ManageProducts/ManageProducts";

const drawerWidth = 240;

const Dashboard = (props) => {
    const { logOut } = useAuth();
    const history = useHistory();

    const handleLogOut = (e) => {
        logOut(history);
        e.preventDefault();
    };

    let { path, url } = useRouteMatch();

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box style={{ textAlign: "left", padding: '5px'}}>
                <NavLink
                    to="/home"
                    style={{
                        textDecoration: "none",
                        color: "blue",
                    }}
                    activeStyle={{
                        fontWeight: "bold",
                        color: "navy",
                        textDecoration: "none",
                    }}
                >
                    <Button color="inherit" style={{ fontSize: "16px", textTransform: 'capitalize' }}>
                        Home
                    </Button>
                </NavLink>{" "}
                <br />
                <NavLink
                    to={`${url}`}
                    style={{
                        textDecoration: "none",
                        color: "#9C27B0",
                    }}
                    activeStyle={{
                        fontWeight: "bold",
                        color: "navy",
                        textDecoration: "none",
                    }}
                >
                    <Button color="inherit" style={{ fontSize: "16px", textTransform: 'capitalize' }}>
                        My Orders
                    </Button>
                </NavLink>{" "}
                <br />
                <NavLink
                    to={`${url}/manageAllOrders`}
                    style={{
                        textDecoration: "none",
                        color: "#9C27B0",
                    }}
                    activeStyle={{
                        fontWeight: "bold",
                        color: "navy",
                        textDecoration: "none",
                    }}
                >
                    <Button color="inherit" style={{ fontSize: "16px", textTransform: 'capitalize' }}>
                        Manage All Orders
                    </Button>
                </NavLink>{" "}
                <br />
                <NavLink
                    to={`${url}/addAProduct`}
                    style={{
                        textDecoration: "none",
                        color: "#9C27B0",
                    }}
                    activeStyle={{
                        fontWeight: "bold",
                        color: "navy",
                        textDecoration: "none",
                    }}
                >
                    <Button color="inherit" style={{ fontSize: "16px", textTransform: 'capitalize' }}>
                        Add a Product
                    </Button>
                </NavLink>{" "}
                <br />
                <NavLink
                    to={`${url}/manageProducts`}
                    style={{
                        textDecoration: "none",
                        color: "#9C27B0",
                    }}
                    activeStyle={{
                        fontWeight: "bold",
                        color: "navy",
                        textDecoration: "none",
                    }}
                >
                    <Button color="inherit" style={{ fontSize: "16px", textTransform: 'capitalize' }}>
                        Manage Products
                    </Button>
                </NavLink>{" "}
                <br />
                <NavLink
                    to={`${url}/makeAdmin`}
                    style={{
                        textDecoration: "none",
                        color: "#9C27B0",
                    }}
                    activeStyle={{
                        fontWeight: "bold",
                        color: "navy",
                        textDecoration: "none",
                    }}
                >
                    <Button color="inherit" style={{ fontSize: "16px", textTransform: 'capitalize' }}>
                        Make Admin
                    </Button>
                </NavLink>{" "}
                <br />
                <Button
                    color="secondary"
                    variant="contained"
                    style={{ fontSize: "16px", textTransform: 'capitalize' }}
                    onClick={handleLogOut}
                >
                    Logout
                </Button>
            </Box>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                color="secondary"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            fontFamily: "Raleway, Arial",
                            fontWeight: "bold",
                        }}
                    >
                        Florist Shop
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/addAProduct`}>
                        <AddAProduct></AddAProduct>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
};

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;

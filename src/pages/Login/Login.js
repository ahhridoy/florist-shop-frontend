import {
    Alert,
    Button,
    CircularProgress,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import login from "../../images/login.png";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading, authError } =
        useAuth();
    useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = (e) => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    };
    return (
        <>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        sx={{ marginTop: "150px" }}
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            sx={{ fontWeight: "bold" }}
                        >
                            Log-In
                        </Typography>
                        {!isLoading && (
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: "75%", m: 2 }}
                                    name="email"
                                    onBlur={handleOnBlur}
                                    id="standard-basic"
                                    label="Your Email"
                                    variant="standard"
                                />
                                <TextField
                                    sx={{ width: "75%", m: 2 }}
                                    name="password"
                                    onBlur={handleOnBlur}
                                    id="standard-basic"
                                    label="Password"
                                    variant="standard"
                                    type="password"
                                />
                                <Button
                                    sx={{ width: "75%", m: 2 }}
                                    variant="contained"
                                    color="secondary"
                                    type="submit"
                                >
                                    Login
                                </Button>
                                <Link
                                    to="/register"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Button variant="text" color="secondary">
                                        NEW USER? PLEASE REGISTER!
                                    </Button>
                                </Link>
                            </form>
                        )}
                        <Button
                            onClick={handleGoogleSignIn}
                            variant="contained"
                            color="secondary"
                        >
                            Google Sign In
                        </Button>
                        {isLoading && <CircularProgress />}
                        {user?.email && (
                            <Alert severity="success">
                                Login successfully!
                            </Alert>
                        )}
                        {authError && (
                            <Alert severity="error">{authError}</Alert>
                        )}
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img src={login} alt="" style={{ width: "100%" }}></img>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Login;

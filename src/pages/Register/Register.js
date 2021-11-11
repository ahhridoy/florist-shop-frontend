import {
    Container,
    Grid,
    Typography,
    TextField,
    Button,
    CircularProgress,
    Alert,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useFirebase/useAuth/useAuth";
import login from "../../images/login.png";

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    };

    const handleRegisterSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("Your password did not match");
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    };
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} sx={{ marginTop: "100px" }}>
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >
                        Register
                    </Typography>
                    {!isLoading && (
                        <form onSubmit={handleRegisterSubmit}>
                            <TextField
                                sx={{ width: "75%", m: 2 }}
                                name="name"
                                onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Your Name"
                                variant="standard"
                            />
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
                            <TextField
                                sx={{ width: "75%", m: 2 }}
                                name="password2"
                                onBlur={handleOnBlur}
                                id="standard-basic"
                                label="Re-Type Password"
                                variant="standard"
                                type="password"
                            />
                            <Button
                                sx={{ width: "75%", m: 2 }}
                                variant="contained"
                                color="secondary"
                                type="submit"
                            >
                                Register
                            </Button>
                            <Link
                                to="/login"
                                style={{ textDecoration: "none" }}
                            >
                                <Button variant="text" color="secondary">
                                    ALREADY HAVE AN ACCOUNT? PLEASE LOGIN!
                                </Button>
                            </Link>
                        </form>
                    )}
                    {isLoading && <CircularProgress />}
                    {user?.email && (
                        <Alert severity="success">
                            User Created successfully!
                        </Alert>
                    )}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <img src={login} alt="" style={{ width: "100%" }}></img>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;

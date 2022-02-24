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
import { useForm } from "react-hook-form";
import "./Register.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
// import login from "../../images/login.png";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Register = () => {
    // const [loginData, setLoginData] = useState({});
    const { user, registerUser, success, isLoading, authError } = useAuth();
    

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        registerUser(data)
    };

    // const history = useHistory();

    // const handleOnBlur = (e) => {
    //     const field = e.target.name;
    //     const value = e.target.value;
    //     const newLoginData = { ...loginData };
    //     newLoginData[field] = value;
    //     console.log(newLoginData);
    //     setLoginData(newLoginData);
    // };

    // const handleRegisterSubmit = (e) => {
    //     if (loginData.password !== loginData.password2) {
    //         alert("Your password did not match");
    //         return;
    //     }
    //     registerUser(
    //         loginData.email,
    //         loginData.password,
    //         loginData.name,
    //         history
    //     );
    //     e.preventDefault();
    // };

    return (
        <>
            <Header></Header>
            <Container>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="register-form"
                >
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{ fontWeight: "bold" }}
                    >
                        Register
                    </Typography>
                    <input
                        type="text"
                        className="register-input"
                        placeholder="Enter your name"
                        {...register("name")}
                    />
                    <input
                        type="email"
                        className="register-input"
                        placeholder="Enter your email"
                        {...register("email")}
                    />
                    <input
                        type="password"
                        className="register-input"
                        placeholder="Enter your password"
                        {...register("password")}
                    />

                    {errors.exampleRequired && (
                        <span>This field is required</span>
                    )}
                    <br />
                    <br />
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ width: "50%" }}
                        type="submit"
                    >
                        Register
                    </Button>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <Button variant="text" color="secondary">
                            ALREADY HAVE AN ACCOUNT? PLEASE LOGIN!
                        </Button>
                    </Link>
                </form>
                {success && (
                    <Alert severity="success">User Created Successfully!</Alert>
                )}
            </Container>
            <Footer></Footer>

            {/* <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        sx={{ marginTop: "100px" }}
                    >
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
                        {success && (
                            <Alert severity="success">
                                User Created Successfully!
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
            <Footer></Footer> */}
        </>
    );
};

export default Register;

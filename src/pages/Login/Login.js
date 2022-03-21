import {
  Alert,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth/useAuth";
import login from "../../images/login.png";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import "./Login.css";

const Login = () => {
  const { user, loginUser, signInWithGoogle, authError } = useAuth();
  useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    loginUser(data, location, history);
  };

  const location = useLocation();
  const history = useHistory();

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <>
      <Header></Header>
      <Container>
        <Grid container spacing={2}>
          <Grid item md={6}>
            <img
              className="login-img"
              style={{ marginTop: "100px" }}
              src={login}
              alt="LoginImage"
            />
          </Grid>
          <Grid
            item
            md={6}
            className="register-form"
            style={{ margin: "60px 0px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
                Login
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{ marginBottom: "20px" }}
              >
                Sign in into you account
              </Typography>
              <TextField
                id="standard-basic"
                variant="standard"
                type="email"
                className="register-input"
                placeholder="Email Address"
                {...register("email")}
              />
              <TextField
                id="standard-basic"
                variant="standard"
                type="password"
                className="register-input"
                placeholder="Password"
                {...register("password")}
              />
              <div className="checkbox-div">
                <div className="checkbox-check">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember Me"
                    />
                  </FormGroup>
                </div>
                <div>
                  <Button>Forget Password?</Button>
                </div>
              </div>

              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <br />
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "80%", height: "50px", marginTop: "-20px" }}
                type="submit"
              >
                Login
              </Button>

              <p>_______________ Or Login With ______________</p>
              <div className="icons-div">
                <Button style={{ fontSize: "30px" }}>
                  <ion-icon name="logo-facebook"></ion-icon>
                </Button>
                <Button sx={{ fontSize: "30px" }}>
                  <ion-icon name="logo-twitter"></ion-icon>
                </Button>
                <Button sx={{ fontSize: "30px" }} onClick={handleGoogleSignIn}>
                  <ion-icon name="logo-google"></ion-icon>
                </Button>
                <Button sx={{ fontSize: "30px" }}>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </Button>
              </div>

              <Link
                to="/register"
                style={{ textDecoration: "none", marginTop: "20px" }}
              >
                <Button>NEW USER? PLEASE REGISTER!</Button>
              </Link>
            </form>
          </Grid>
        </Grid>
        {user?.email && <Alert severity="success">Login successfully!</Alert>}
        {authError && <Alert severity="error">{authError}</Alert>}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Login;

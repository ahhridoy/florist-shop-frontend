import {
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Grid,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import "./Register.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth/useAuth";
import login from "../../images/login.png";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Register = () => {
  const { registerUser, success, signInWithGoogle } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const location = useLocation();
  const history = useHistory();

  const onSubmit = (data) => {
    registerUser(data, location, history);
  };

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
                Register
              </Typography>
              <TextField
                id="standard-basic"
                variant="standard"
                type="text"
                className="register-input"
                placeholder="Enter your name"
                {...register("name")}
              />
              <TextField
                id="standard-basic"
                variant="standard"
                type="email"
                className="register-input"
                placeholder="Enter your email"
                {...register("email")}
              />
              <TextField
                id="standard-basic"
                variant="standard"
                type="password"
                className="register-input"
                placeholder="Enter your password"
                {...register("password")}
              />

              <FormGroup style={{marginLeft: "50px"}}>
                <FormControlLabel
                  control={<Checkbox />}
                  label="I agree to the terms of service"
                />
              </FormGroup>

              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <br />
              <Button
                variant="contained"
                color="secondary"
                style={{ width: "80%", height: "50px", marginTop: "-20px" }}
                type="submit"
              >
                Register
              </Button>
              <p>_____________________ Or Login With _____________________</p>
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
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text" color="secondary">
                  ALREADY HAVE AN ACCOUNT? PLEASE LOGIN!
                </Button>
              </Link>
            </form>
          </Grid>
        </Grid>
        {success && (
          <Alert severity="success">User Created Successfully!</Alert>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Register;

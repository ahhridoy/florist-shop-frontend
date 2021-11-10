import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import bg from "../../../images/Banner.jpg";
import welcome from "../../../images/welcome.png";
import "./Banner.css";

const banner = {
    background: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "800px",
};

const Banner = () => {
    return (
        <Box style={banner}>
            <img className="welcome-img" src={welcome} alt="" />
            <h1 className="banner-title">2022 Flowers Trend</h1>
            <Button variant="contained" color="secondary">
                <span className="banner-button">Explore</span>
            </Button>
        </Box>
    );
};

export default Banner;

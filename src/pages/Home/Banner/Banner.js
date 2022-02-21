import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import bg from "../../../images/Banner.jpg";
import welcome from "../../../images/welcome.png";
import "./Banner.css";

const banner = {
    background: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    height: "750px",
};

const Banner = () => {
    return (
        <Box style={banner} className="banner-box">
            <img className="welcome-img" src={welcome} alt="" />
            <h1 className="banner-title" style={{ fontFamily: '"Comic Sans"' }}>
                2022 Flowers Trend
            </h1>
            <Link to="/exploreAllProducts" style={{textDecoration: 'none'}}>
                <Button variant="contained" color="secondary">
                    <span className="banner-button">Explore</span>
                </Button>
            </Link>
        </Box>
    );
};

export default Banner;

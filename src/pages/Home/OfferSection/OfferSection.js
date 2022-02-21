import { Grid } from "@mui/material";
import React from "react";
import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import img3 from "../../../images/3.jpg";
import img4 from "../../../images/4.jpg";

const OfferSection = () => {
    return (
        <div>
            <Grid container style={{ marginBottom: "30px" }} spacing={1}>
                <Grid item xs={12} sm={6} md={3}>
                    <img style={{ width: "100%" }} src={img1} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img style={{ width: "100%" }} src={img2} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img style={{ width: "100%" }} src={img3} alt="" />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <img style={{ width: "100%" }} src={img4} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default OfferSection;

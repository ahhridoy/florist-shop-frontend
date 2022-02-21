import { Container, Grid } from "@mui/material";
import React from "react";
import img1 from "../../../images/01.jpg";
import img2 from "../../../images/02.jpg";

const TwoFlowers = () => {
    return (
        <Container>
            <Grid
                container
                style={{ marginTop: "30px", marginBottom: "30px" }}
                spacing={2}
            >
                <Grid item xs={12} sm={6} md={6}>
                    <div className="offer-img">
                        <img style={{ width: "100%" }} src={img2} alt="" />
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                    <div className="offer-img">
                        <img style={{ width: "100%" }} src={img1} alt="" />
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TwoFlowers;

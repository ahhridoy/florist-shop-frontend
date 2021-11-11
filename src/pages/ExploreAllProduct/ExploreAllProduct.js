import React from 'react';
import { Button, Grid, Paper, Typography } from "@mui/material";

const ExploreAllProduct = (props) => {
    const { name, description, price, img } = props.product;
    return (
        <Grid item xs={12} sm={6} md={4} sx={{margin: '50px 0px'}}>
            <Paper style={{ padding: "20px", borderRadius: "10px" }}>
                <img
                    style={{ width: "100%", borderRadius: "10px" }}
                    src={img}
                    alt=""
                />
                <Typography
                    variant="h4"
                    gutterBottom
                    component="div"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                >
                    {name}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {description}
                </Typography>
                <Typography variant="h5" gutterBottom component="div">
                    Price: ${price}
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: "100%" }}
                >
                    Buy Now
                </Button>
            </Paper>
        </Grid>
    );
};

export default ExploreAllProduct;
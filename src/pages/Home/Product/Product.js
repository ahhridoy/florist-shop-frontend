import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Product = (props) => {
    const { _id, name, description, price, img } = props.product;
    return (
        <Grid item xs={12} sm={6} md={4}>
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
                <Link to={`/placeOrder/${_id}`} style={{textDecoration: 'none'}}>
                    <Button
                        variant="contained"
                        color="secondary"
                        style={{ width: "100%" }}
                    >
                        Buy Now
                    </Button>
                </Link>
            </Paper>
        </Grid>
    );
};

export default Product;

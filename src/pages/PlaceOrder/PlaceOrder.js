import { Container, Paper, Typography, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";
import ReactHookForm from "./ReactHookForm";

const PlaceOrder = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/placeOrder/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, [id]);

    return (
        <>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6}>
                        <Paper
                            style={{
                                padding: "20px",
                                borderRadius: "10px",
                                margin: "50px 0px",
                            }}
                        >
                            <img
                                style={{
                                    width: "20%",
                                    borderRadius: "10px",
                                }}
                                src={product.img}
                                alt=""
                            />
                            <Typography
                                variant="h4"
                                gutterBottom
                                component="div"
                                color="secondary"
                                sx={{ fontWeight: "bold" }}
                            >
                                {product.name}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {product.description}
                            </Typography>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                            >
                                Price: ${product.price}
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <ReactHookForm product={product}></ReactHookForm>
                    </Grid>
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default PlaceOrder;

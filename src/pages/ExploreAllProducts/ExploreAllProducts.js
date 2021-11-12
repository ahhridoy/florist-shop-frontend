import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ExploreAllProduct from "../ExploreAllProduct/ExploreAllProduct";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const ExploreAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
        <>
            <Header></Header>
            <Container>
                <Grid container spacing={2}>
                    {products.map((product) => (
                        <ExploreAllProduct
                            key={product.id}
                            product={product}
                        ></ExploreAllProduct>
                    ))}
                </Grid>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default ExploreAllProducts;

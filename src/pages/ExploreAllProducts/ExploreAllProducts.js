import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ExploreAllProduct from "../ExploreAllProduct/ExploreAllProduct";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const ExploreAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://blooming-scrubland-74816.herokuapp.com/products")
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

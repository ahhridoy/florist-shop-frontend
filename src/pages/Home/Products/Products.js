import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://arcane-spire-84650.herokuapp.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.slice(1, 7)));
    }, []);

    return (
        <Container>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;

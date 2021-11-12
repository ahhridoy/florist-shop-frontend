import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import Product from "../Product/Product";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/products")
        .then(res => res.json())
        .then(data => setProducts(data.slice(2, 8)))
    },[])

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

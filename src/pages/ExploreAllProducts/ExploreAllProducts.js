import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import ExploreAllProduct from "../ExploreAllProduct/ExploreAllProduct";

const ExploreAllProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);
    return (
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
    );
};

export default ExploreAllProducts;

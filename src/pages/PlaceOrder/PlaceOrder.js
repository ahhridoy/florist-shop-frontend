import { Container, Paper, Typography, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const [product, setProduct] = useState({});
    const {id} = useParams();

    useEffect( () => {
        fetch(`http://localhost:5000/placeOrder/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[])
    return (
        <Container>
            <Paper style={{ padding: "20px", borderRadius: "10px", margin: '50px 0px'}}>
                <img
                    style={{ width: "20%", borderRadius: "10px" }}
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
                <Typography variant="h5" gutterBottom component="div">
                    Price: ${product.price}
                </Typography>
                <Button
                        variant="contained"
                        color="secondary"
                        style={{ width: "100%" }}
                    >
                        Place Order
                    </Button>
            </Paper>
        </Container>
    );
};

export default PlaceOrder;
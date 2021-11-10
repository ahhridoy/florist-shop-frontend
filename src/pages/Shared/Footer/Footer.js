import { Container, Grid, List, ListItemText, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "#110917",
                padding: "15px",
            }}
        >
            <Container sx={{ padding: "20px" }}>
                <Grid container spacing={2} sx={{ color: "white" }}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            variant="h4"
                            gutterBottom
                            component="div"
                            sx={{ fontWeight: "bold" }}
                        >
                            Florist Shop
                        </Typography>
                        <Typography variant="caption" gutterBottom>
                            A florist shop is a retail establishment that sells
                            cut flowers and ornamental plants. The floral trade
                            involves activities such as flower care, flower
                            arranging, floral design, merchandising, and often
                            flower delivery. Florist shops are an ever popular
                            industry and one of the most searched guides on our
                            website.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <List>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: "500" }}
                            >
                                Information
                            </Typography>
                            <ListItemText>Our Company</ListItemText>
                            <ListItemText>Contact Us</ListItemText>
                            <ListItemText>Our Services</ListItemText>
                            <ListItemText>Why We?</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <List>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: "500" }}
                            >
                                Quicklink
                            </Typography>
                            <ListItemText>About</ListItemText>
                            <ListItemText>Blog</ListItemText>
                            <ListItemText>Shop</ListItemText>
                            <ListItemText>Contact</ListItemText>
                        </List>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <List>
                            <Typography
                                variant="h5"
                                gutterBottom
                                component="div"
                                sx={{ fontWeight: "500" }}
                            >
                                See Information
                            </Typography>
                            <ListItemText>
                                123, ABC, Road 234, California, USA.
                            </ListItemText>
                            <ListItemText>California</ListItemText>
                            <ListItemText>Phone: 01234 567 890</ListItemText>
                            <ListItemText>Email: florist@shop.com</ListItemText>
                        </List>
                    </Grid>
                </Grid>
            </Container>
            <Typography
                variant="overline"
                display="block"
                gutterBottom
                sx={{ color: "white" }}
            >
                All rights are reserved.
            </Typography>
        </footer>
    );
};

export default Footer;

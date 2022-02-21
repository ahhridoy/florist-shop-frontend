import { Container, Grid } from "@mui/material";
import React from "react";
import img1 from "../../../images/cart.png";
import img2 from "../../../images/money.png";
import img3 from "../../../images/credit-card.png";
import img4 from "../../../images/gift-card.png";
import "./DeliverySystem.css";

const DeliverySystem = () => {
    return (
        <Container>
            <div className="delivery-system-box">
                <Grid
                    container
                    style={{ marginTop: "30px", marginBottom: "30px" }}
                    spacing={2}
                >
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="delivery-box-img">
                            <img className="box-img" src={img1} alt="" />
                            <div className="box-text">
                                <h3>Free shipping</h3>
                                <p>On all orders over $49.00</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="delivery-box-img">
                            <img className="box-img" src={img2} alt="" />
                            <div className="box-text">
                                <h3>15 days returns</h3>
                                <p>Moneyback guarantee</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="delivery-box-img">
                            <img className="box-img" src={img3} alt="" />
                            <div className="box-text">
                                <h3>Secure checkout</h3>
                                <p>Protected by Paypal</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div className="delivery-box-img">
                            <img className="box-img" src={img4} alt="" />
                            <div className="box-text">
                                <h3>Offer & gift here</h3>
                                <p>On all orders over</p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
};

export default DeliverySystem;

import { Container, Typography } from "@mui/material";
import React from "react";
import girl from "../../../images/girl.jpg";

const ExtraSection = () => {
    return (
        <div style={{ backgroundColor: "#9C27B0", margin: "50px 0px" }}>
            <Container sx={{ padding: "50px" }}>
                <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    sx={{ fontWeight: "bold", color: "#110917" }}
                >
                    WHAT THEY'RE SAYING
                </Typography>
                <img
                    src={girl}
                    alt=""
                    style={{
                        width: "200px",
                        borderRadius: "100px",
                        boxShadow: "5px 5px 10px black",
                        marginBottom: "10px",
                    }}
                />
                <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: "#FEF2FF" }}
                >
                    A florist shop is a retail establishment that sells cut
                    flowers and ornamental plants. The floral trade involves
                    activities such as flower care, flower arranging, floral
                    design, merchandising, and often flower delivery. Florist
                    shops are an ever popular industry and one of the most
                    searched guides on our website. A florist shop is a retail
                    establishment that sells cut flowers and ornamental plants.
                    The floral trade involves activities such as flower care,
                    flower arranging, floral design, merchandising, and often
                    flower delivery. Florist shops are an ever popular industry
                    and one of the most searched guides on our website. A
                    florist shop is a retail establishment that sells cut
                    flowers and ornamental plants. The floral trade involves
                    activities such as flower care, flower arranging, floral
                    design, merchandising, and often flower delivery. Florist
                    shops are an ever popular industry and one of the most
                    searched guides on our website.
                </Typography>
                <Typography
                    variant="h6"
                    gutterBottom
                    component="div"
                    sx={{ marginTop: "20px" }}
                >
                    <span style={{ color: "#FF8000" }}>Katherine Sullivan</span>{" "}
                    - Customer
                </Typography>
            </Container>
        </div>
    );
};

export default ExtraSection;

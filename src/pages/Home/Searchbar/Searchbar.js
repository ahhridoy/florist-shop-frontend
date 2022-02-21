import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Container } from "@mui/material";

const Searchbar = () => {
    return (
        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
            <div>
                <TextField style={{ width: "80%" }} label="Search flowers" />
                <Button variant="contained" color="secondary">
                    <span style={{fontSize: "23px"}}>Search</span>
                </Button>
            </div>
        </Container>
    );
};

export default Searchbar;

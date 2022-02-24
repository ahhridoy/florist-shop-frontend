import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const MakeAdmin = () => {
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);

    const handleOnBlur = (e) => {
        setEmail(e.target.value);
    };

    const handleOnSubmit = (e) => {
        const user = { email };
        fetch("https://blooming-scrubland-74816.herokuapp.com/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            });

        e.preventDefault();
    };

    return (
        <>
            <form onSubmit={handleOnSubmit}>
                <TextField
                    type="email"
                    onBlur={handleOnBlur}
                    label="Enter Email"
                    variant="outlined"
                    sx={{ width: "50%" }}
                />{" "}
                <br />
                <Button type="submit" variant="contained" color="secondary">
                    Make Admin
                </Button>
            </form>
            {success && (
                <Alert severity="success">Made Admin Successfully!</Alert>
            )}
        </>
    );
};

export default MakeAdmin;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Alert } from "@mui/material";
import useAuth from "../../../hooks/useAuth/useAuth";
import "../../PlaceOrder/ReactHookForm.css";

const Review = () => {
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://arcane-spire-84650.herokuapp.com/reviews", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    setSuccess(true);
                }
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className="form-field">
                <input
                    className="input-field"
                    defaultValue={user.displayName}
                    {...register("name")}
                />
                <input
                    className="input-field"
                    defaultValue={user.email}
                    {...register("email")}
                />
                <textarea
                    style={{ width: "100%", height: "100px" }}
                    placeholder="Review"
                    {...register("review", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <br />
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: "50%" }}
                    type="submit"
                >
                    Review
                </Button>
            </form>
            {success && (
                <Alert severity="success">
                    Your Review Posted Successfully!
                </Alert>
            )}
        </>
    );
};

export default Review;

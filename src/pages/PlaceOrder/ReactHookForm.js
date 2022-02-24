import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ReactHookForm.css";
import { Button, Alert } from "@mui/material";
import useAuth from "../../hooks/useAuth/useAuth";

const ReactHookForm = (props) => {
    const { name, price } = props.product;
    const { user } = useAuth();
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("https://blooming-scrubland-74816.herokuapp.com/placeOrder", {
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
                    defaultValue={name}
                    {...register("product", { required: true })}
                />
                <input
                    className="input-field"
                    defaultValue={price}
                    {...register("price", { required: true })}
                />
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
                <input
                    className="input-field"
                    placeholder="Address"
                    {...register("address", { required: true })}
                />
                <input
                    className="input-field"
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                />
                {errors.exampleRequired && <span>This field is required</span>}
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ width: "50%" }}
                    type="submit"
                >
                    Place Order
                </Button>
            </form>
            {success && (
                <Alert severity="success">Order Placed Successfully!</Alert>
            )}
        </>
    );
};

export default ReactHookForm;

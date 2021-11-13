import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Alert } from "@mui/material";
import "../../PlaceOrder/ReactHookForm.css";

const AddAProduct = () => {
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch("http://localhost:5000/products", {
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
                    placeholder="Product Name"
                    {...register("name")}
                />
                <textarea
                    style={{ width: "100%", height: "100px" }}
                    placeholder="Product Description"
                    {...register("description")}
                />
                <input
                    className="input-field"
                    placeholder="Product Price"
                    {...register("price")}
                />
                <input
                    className="input-field"
                    placeholder="Image Link"
                    {...register("img", { required: true })}
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
                    Add a Product
                </Button>
            </form>
            {success && (
                <Alert severity="success">
                    Your Product Added Successfully!
                </Alert>
            )}
        </>
    );
};

export default AddAProduct;

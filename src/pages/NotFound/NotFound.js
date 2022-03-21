import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../images/not-found.jpg";

const NotFound = () => {
  return (
    <>
      <div style={{ margin: "100px 0px" }}>
        <img src={notFound} alt="" />
      </div>
      <Link to="/" style={{textDecoration: "none"}}>
        <Button variant="contained" color="secondary" >
          Back To Home
        </Button>
      </Link>
    </>
  );
};

export default NotFound;

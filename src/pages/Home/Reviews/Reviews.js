import { Container, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";

const Reviews = () => {
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/usersReview")
            .then((res) => res.json())
            .then((data) => setMyReviews(data));
    }, []);
    return (
        <Container>
            <TableContainer component={Paper}  sx={{margin: '50px 0px'}}>
                <Table sx={{ minWidth: 300 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    component="div"
                                    color="secondary"
                                >
                                    Customers Review
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {myReviews.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell align="center">
                                    {row.review}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Reviews;

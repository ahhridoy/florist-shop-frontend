import React, { useEffect, useState } from "react";
import img1 from "../../../images/dahlia.png";
import img2 from "../../../images/love-roses&orcid.png";
import img3 from "../../../images/orchid&gladiolus.png";
import img4 from "../../../images/roses&tuberoses.png";
import img5 from "../../../images/roses-stick.png";
import img6 from "../../../images/orchid.png";
import { Container, Grid } from "@mui/material";
import Product from "../Product/Product";

const products = [
    {
        id: 1,
        name: "Dahlia",
        description:
            "Dahlia is a genus of bushy, tuberous, herbaceous perennial plants native to Mexico and Central America. A member of the Compositae family of dicotyledonous plants, its garden relatives thus include the sunflower, daisy, chrysanthemum, and zinnia.",
        price: "34.00",
        img: img1,
    },
    {
        id: 2,
        name: "Love Rose & Orchid",
        description:
            "Orchidaceae, commonly called the orchid family, is a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant. Along with the Asteraceae, they are one of the two largest families of flowering plants.",
        price: "28.00",
        img: img2,
    },
    {
        id: 3,
        name: "Orchid & Gladiolus",
        description:
            "Gladiolus is a genus of perennial cormous flowering plants in the iris family. It is sometimes called the sword lily, but is usually called by its generic name. The genus occurs in Asia, Mediterranean Europe, South Africa, and tropical Africa. The center of diversity is in the Cape Floristic Region.",
        price: "37.00",
        img: img3,
    },
    {
        id: 4,
        name: "Roses & Tuberoses",
        description:
            "Agave amica, formerly Polianthes tuberosa, the tuberose, is a perennial plant in the family Asparagaceae, subfamily Agavoideae, extracts of which are used as a note in perfumery. Now widely grown as an ornamental plant, the species was originally native to Mexico.",
        price: "18.00",
        img: img4,
    },
    {
        id: 5,
        name: "Roses Stick",
        description:
            "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.",
        price: "42.00",
        img: img5,
    },
    {
        id: 6,
        name: "Roses Stick",
        description:
            "Orchidaceae, commonly called the orchid family, is a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant. Along with the Asteraceae, they are one of the two largest families of flowering plants.",
        price: "29.00",
        img: img6,
    },
];

const Products = () => {
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     fetch()
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[])

    return (
        <Container>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <Product key={product.id} product={product}></Product>
                ))}
            </Grid>
        </Container>
    );
};

export default Products;

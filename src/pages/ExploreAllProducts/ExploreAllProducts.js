import React from 'react';
import img1 from "../../images/dahlia.png";
import img2 from "../../images/love-roses&orcid.png";
import img3 from "../../images/orchid&gladiolus.png";
import img4 from "../../images/roses&tuberoses.png";
import img5 from "../../images/roses-stick.png";
import img6 from "../../images/orchid.png";
import img7 from "../../images/cherry-blossom.png";
import img8 from "../../images/gladiolus.png";
import img9 from "../../images/orchid&roses.png";
import img10 from "../../images/twelve-roses.png";
import img11 from "../../images/water-lily.png";
import img12 from "../../images/roses-pot.png";
import img13 from "../../images/roses&bokul.png";
import img14 from "../../images/rainbow-tolip.png";
import img15 from "../../images/shoeblackplant.png";
import img16 from "../../images/love-lily.png";
import { Container, Grid } from '@mui/material';
import ExploreAllProduct from '../ExploreAllProduct/ExploreAllProduct';

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
    {
        id: 6,
        name: "Roses Stick",
        description:
            "Orchidaceae, commonly called the orchid family, is a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant. Along with the Asteraceae, they are one of the two largest families of flowering plants.",
        price: "29.00",
        img: img6,
    },
    {
        id: 7,
        name: "Cherry Blossom",
        description:
            "Cherry blossoms are Japan's national flower. Known as sakura in Japanese, these pale blooms are a symbol of more than just spring — they stand for renewal and hope. 2 Picnicking beneath cherry blossom trees is a Japanese tradition. The century-old custom is known as hanami, which means flower viewing.",
        price: "19.00",
        img: img7,
    },
    {
        id: 8,
        name: "Gladiolus",
        description:
            "Gladiolus is a genus of perennial cormous flowering plants in the iris family. It is sometimes called the sword lily, but is usually called by its generic name. The genus occurs in Asia, Mediterranean Europe, South Africa, and tropical Africa. The center of diversity is in the Cape Floristic Region.",
        price: "31.00",
        img: img8,
    },
    {
        id: 9,
        name: "Orchid & Roses",
        description:
            "Orchidaceae, commonly called the orchid family, is a diverse and widespread family of flowering plants, with blooms that are often colourful and fragrant. Along with the Asteraceae, they are one of the two largest families of flowering plants.",
        price: "32.00",
        img: img9,
    },
    {
        id: 10,
        name: "Twelve Roses",
        description:
            "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.",
        price: "39.00",
        img: img10,
    },
    {
        id: 11,
        name: "Water Lily",
        description:
            "Black Cherry Waterlily is a hardy, medium sized, dark-red waterlily. This is a scrumptious variety from Award Winning hybridizer, Tony Moore. Vivid, dark red flowers have stellate shape and inner petals are a darker shade of red on the Black Cherry Hardy Waterlily.",
        price: "17.00",
        img: img11,
    },
    {
        id: 12,
        name: "Roses Pot",
        description:
            "A rose is a woody perennial flowering plant of the genus Rosa, in the family Rosaceae, or the flower it bears. There are over three hundred species and tens of thousands of cultivars. They form a group of plants that can be erect shrubs, climbing, or trailing, with stems that are often armed with sharp prickles.",
        price: "37.00",
        img: img12,
    },
    {
        id: 13,
        name: "Rose & Mimusops",
        description:
            "Spanish cherry (Mimusops elengi) is a small to medium sized evergreen tree. Leafs are dark green, elliptic shaped and glossy. Bark of the tree is very thick and dark grayish in color.",
        price: "19.00",
        img: img13,
    },
    {
        id: 14,
        name: "Rainbow Tolip",
        description:
            "Rainbow Tulips is a variety of Rainbow Flowers that is great for Fall Wedding Bouquets, Happy Birthday Flowers, Anniversary Flowers, Homecoming Flowers, Baby Shower Centerpieces, Wedding Flower Arrangements, Dining Room Centerpieces, and much more.",
        price: "21.00",
        img: img14,
    },
    {
        id: 15,
        name: "Shoe Black Plant",
        description:
            "Hibiscus rosa-sinensis, known colloquially as Chinese hibiscus, China rose, Hawaiian hibiscus, rose mallow and shoeblackplant, is a species of tropical hibiscus, a flowering plant in the Hibisceae tribe of the family Malvaceae.",
        price: "16.00",
        img: img15,
    },
    {
        id: 16,
        name: "Love Lily",
        description:
            "The strong slender stalks of Sugar Love Lily (Lilium asiaticum) are topped with clusters of blooms for long-lasting color. Sugar Love Lily has stunning, bicolor blooms with vibrant pink tips and white centers. A low-growing lily perfect for massing near the front of mixed borders.",
        price: "23.00",
        img: img16,
    },
];

const ExploreAllProducts = () => {
    return (
        <Container>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <ExploreAllProduct key={product.id} product={product}></ExploreAllProduct>
                ))}
            </Grid>
        </Container>
    );
};

export default ExploreAllProducts;
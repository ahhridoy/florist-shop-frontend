import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import DeliverySystem from "../DeliverySystem/DeliverySystem";
import ExtraSection from "../ExtraSection/ExtraSection";
import OfferSection from "../OfferSection/OfferSection";
import Products from "../Products/Products";
import ReviewsSlide from "../ReviewsSlide/ReviewsSlide";
import Searchbar from "../Searchbar/Searchbar";
import TwoFlowers from "../TwoFlowers/TwoFlowers";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <OfferSection></OfferSection>
            <Searchbar></Searchbar>
            <Products></Products>
            <TwoFlowers></TwoFlowers>
            <ReviewsSlide></ReviewsSlide>
            <ExtraSection></ExtraSection>
            <DeliverySystem></DeliverySystem>
            <Footer></Footer>
        </div>
    );
};

export default Home;

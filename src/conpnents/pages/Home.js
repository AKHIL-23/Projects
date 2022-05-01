import React from "react";
import Slider from "./HomeComponets/Slider"
import './Home.css';

import Navbar from "../commonUtils/Navbar";
import CourseOwlCarousel from "../commonUtils/CourseOwlCarousel";
import Content from "../commonUtils/Content";
import Whyus from "../commonUtils/Whyus";
import StudentTestimonial from "../commonUtils/StudentTestimonial";
import QueryForm from "../commonUtils/QueryForm";
import Footer from "../commonUtils/Footer";



const Home = () => {
    return (<>

        <main className=" container-fluid ">
            <Navbar />
            <Slider />
            <Content />
            <CourseOwlCarousel />
            <Whyus />
            <StudentTestimonial />
            <QueryForm />
            <Footer />





        </main>


    </>);

}
export default Home;
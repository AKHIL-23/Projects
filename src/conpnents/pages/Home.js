import React from "react";
import Slider from "./HomeComponets/Slider"
import './Home.css';
import TrendingCourse from "../TrendingCourse";
import CourseOwlCarousel from "../CourseOwlCarousel";
import Content from "../Content";
import Whyus from "../Whyus";
import StudentTestimonial from "../StudentTestimonial";
import QueryForm from "../QueryForm";
import Footer from "../Footer";


const Home = () => {
    return (<>

        <main className=" container-fluid ">
            <Slider />
            <Content />
            <CourseOwlCarousel />
            <Whyus />
            <StudentTestimonial />
            <QueryForm />
            <Footer />
            {/* <TrendingCourse /> */}




        </main>


    </>);

}
export default Home;
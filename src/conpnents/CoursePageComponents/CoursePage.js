import React from 'react'
import Careerguidance from './Careerguidance';
import CourseBanner from './CourseBanner';
import './CoursePage.css';
import IntervierPreparation from './IntervierPreparation';
import Whyus from '../commonUtils/Whyus'
import CourseOwlCarousel from '../commonUtils/CourseOwlCarousel'
import QuerForm from '../commonUtils/QueryForm'
import Footer from '../commonUtils/Footer'
import { useParams } from 'react-router-dom';
import Navbar from '../commonUtils/Navbar';



const CoursePage = () => {
    const param = useParams();

    console.log(param.c_id);
    return (
        <>
            <Navbar />
            <CourseBanner />
            <Careerguidance />
            <IntervierPreparation />
            <Whyus />
            <CourseOwlCarousel />
            <QuerForm />
            <Footer />



        </>



    )
}

export default CoursePage
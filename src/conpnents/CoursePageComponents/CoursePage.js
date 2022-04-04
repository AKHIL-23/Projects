import React from 'react'
import Careerguidance from './Careerguidance';
import CourseBanner from './CourseBanner';
import './CoursePage.css';
import IntervierPreparation from './IntervierPreparation';
import Whyus from './../Whyus'
import CourseOwlCarousel from './../CourseOwlCarousel'
import QuerForm from './../QueryForm'
import Footer from './../Footer'



const CoursePage = (props) => {
    return (
        <>
            <CourseBanner data={props.courseData} />
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
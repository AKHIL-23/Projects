import React from 'react';
import "./CourseOwlCarousel.css"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import CourseOwlItems from './CourseOwlItems';

let CoursedummyData = [
    {
        c_id: "101",
        name: "JAVASCRIPT",
        img: "/assets/img/AllCourseListPage/Android.PNG",
        price: "$434",
        iconClass: "fab fa-js-square",
        iconColor: "#F5DE19",
        discription: "Discription JAVASCRIPT Lorem usdam exercitationem dolor fugit asperiores",
        summary: "summary JAVASCRIPT lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"



    },
    {
        c_id: "102",
        name: "PHP",
        img: "/assets/img/AllCourseListPage/Android.PNG",
        price: "$434",
        iconClass: "fab fa-php",
        iconColor: "#6181B6",
        discription: "Discription PHP Lorem usdam exercitationem dolor fugit asperiores",
        summary: "summary PHP lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"



    },
    {
        c_id: "103",
        name: "REACT",
        img: "/assets/img/AllCourseListPage/Android.PNG",
        price: "$434",
        iconClass: "fab fa-react",
        iconColor: "#53C1DE",
        discription: "Discription REACT Lorem usdam exercitationem dolor fugit asperiores",
        summary: "summary  REACT lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"

    },
    {

        c_id: "104",
        name: "ANDROID",
        img: "/assets/img/AllCourseListPage/Android.PNG",
        price: "$434",
        iconClass: "fab fa-android",
        iconColor: "#3DDC84",
        discription: "Discription ANDROID Lorem usdam exercitationem dolor fugit asperiores",
        summary: "summary ANDROID lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"


    },
    {

        c_id: "105",
        name: "ANGULAR",
        img: "/assets/img/AllCourseListPage/Android.PNG",
        price: "$434",
        iconClass: "fab fa-angular",
        iconColor: "#E23237",
        discription: "Discription ANGULAR Lorem usdam exercitationem dolor fugit asperiores",
        summary: "summary ANGULAR lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"
    }

];


const CourseOwlCarousel = () => {
    const state = {
        responsive: {
            0: {
                items: 1,

            },
            450: {
                items: 2,

            },
            600: {
                items: 3,

            },
            1000: {
                items: 4,

            },
        },
    }
    return (
        <OwlCarousel
            className="owl-theme relative  w-screen "
            id="offerCoursesCarousel-wrapper"
            loop={true}
            autoplay={true}
            dots={false}
            items={5}
            touchDrag={true}
            lazyLoad={false}
            margin={30}
            autoplayTimeout={1700}
            autoplayHoverPause={true}
            responsive={state.responsive}
            animateOut={'fadeOut'}
            animateIn={'flipInX'}
            center={true}
            nav={false}
        >

            {CoursedummyData.map(courseData => <CourseOwlItems key={courseData.c_id} data={courseData} />)}





        </OwlCarousel >
    )
}

export default CourseOwlCarousel
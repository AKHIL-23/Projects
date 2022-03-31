import React from 'react';
import "./CourseOwlCarousel.css"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import CourseOwlItems from './CourseOwlItems';

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
            className="owl-theme relative  w-screen"
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
            <CourseOwlItems />
            <CourseOwlItems />
            <CourseOwlItems />





        </OwlCarousel >
    )
}

export default CourseOwlCarousel
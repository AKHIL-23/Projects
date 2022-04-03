import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import StudentTestimonialItem from './StudentTestimonialItem';

const StudentTestimonial = () => {
    const state = {
        responsive: {
            0: {
                items: 1,

            },
            500: {
                items: 2,

            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            },
        },
    }
    return (
        <section className=' '>
            <h1>Students</h1>
            <OwlCarousel
                className="owl-theme  container mx-auto p-5   "
                id="offerCoursesCarousel-wrapper"
                loop={true}
                autoplay={true}
                dots={false}
                items={5}
                touchDrag={true}
                lazyLoad={false}
                margin={10}
                autoplayTimeout={1700}
                autoplayHoverPause={true}
                responsive={state.responsive}
                animateOut={'fadeOut'}
                animateIn={'flipInX'}
                center={false}
                nav={false}
            >
                <StudentTestimonialItem />
                <StudentTestimonialItem />
                <StudentTestimonialItem />





            </OwlCarousel >

        </section>
    )
}

export default StudentTestimonial
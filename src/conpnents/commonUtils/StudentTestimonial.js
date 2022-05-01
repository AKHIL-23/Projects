import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import StudentTestimonialItem from './StudentTestimonialItem';
import { data } from 'autoprefixer';

let studentDummyData = [
    {
        id: 1,
        studentImage: "/assets/img/studentTestimonial/student_1.png",
        studentName: "student 1",
        studentMessage: "Message from student 1 lorem lorem lorem lorem lorem"
    },
    {
        id: 2,
        studentImage: "/assets/img/studentTestimonial/student_2.png",
        studentName: "student 2",
        studentMessage: "Message from student 2 lorem lorem lorem lorem lorem"
    },
    {
        id: 3,
        studentImage: "/assets/img/studentTestimonial/student_3.png",
        studentName: "student 3",
        studentMessage: "Message from student 3 lorem lorem lorem lorem lorem"
    },
    {
        id: 4,
        studentImage: "/assets/img/studentTestimonial/student_4.png",
        studentName: "student 4",
        studentMessage: "Message from student 4 lorem lorem lorem lorem lorem"
    }

]

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
            <h1 className="text-xl m-2 lg:text-2xl xl:text-3xl 2xl:text-4xl text-center py-3 text-blue-500">Students</h1>
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
                {/* <StudentTestimonialItem studentData={studentDummyData} />
                <StudentTestimonialItem studentData={studentDummyData} />
                <StudentTestimonialItem studentData={studentDummyData} /> */}

                {studentDummyData.map(data => <StudentTestimonialItem key={data.id} studentData={data} />)}




            </OwlCarousel >

        </section>
    )
}

export default StudentTestimonial
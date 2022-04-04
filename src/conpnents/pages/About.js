import React from 'react'
import CourseOwlCarousel from "./../CourseOwlCarousel";
import Content from "./../Content";
import QueryForm from "./../QueryForm";
import Footer from "./../Footer";

const About = () => {
    return (
        <>
            <section>
                <div className='mt-12 relative'>
                    <div className=' absolute top-12 left-3 sm:top-36 2xl:left-6'>
                        <h1 className='text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-blue-500 uppercase '>Together  </h1>
                        <p className='mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl text-blue-700 '>we will win !</p>
                    </div>

                    <img src="/assets/img/aboutUsPage/aboutusbanner.svg" alt="" />
                </div>

            </section>

            <div className='pb-10' style={{ backgroundColor: "#e8f2ff" }} >
                <div className='container mx-auto  p-6 ' >

                    <h1 className="text-xl text-center m-2 lg:text-2xl xl:text-3xl 2xl:text-4xl text-blue-500">About ZN Infotech</h1>
                    <p className='text-justify text-xs sm:text-sm 2xl:text-base'>Z.N.Infotech Pvt.Ltd aims at empowering the students of today to face the challenges of the marketplace of tomorrow. Many companies are recruiting fresher trainers who know the technology.We have designed various courses based on the industry requirements. For this, we offer JSP, J2EE ASP.NET, VB.NET, Java, HTML, C/C++, PHP , Sun Certification & Microsoft Certification preparation and Web Designing courses with attracting prices.We offer services in Professional Project Training, Customized Software Development, Web Designing and various course curriculums based on the industry requirements and Technical Interview oriented.ZN Infotech is registered as a pvt. ltd. Company under the Companies Act 1956 and approved by Ministry of Corporate Affairs (MCA), Govt. of India. </p>

                </div>
                <CourseOwlCarousel />


            </div>

            <Content />
            <QueryForm />
            <Footer />





        </>

    )
}

export default About
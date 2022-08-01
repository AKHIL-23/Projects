import React from 'react'

import TrendingCards from './TrendingCards';



let trendData = [
    {
        __id:'1',
        courseimg: "/assets/img/TrandingCourseSVG/android.svg",
        coursename: "TRAINING ON PHP",
        coursecontent: "ZN Infotech offers the students of B-Tech, MCA, BCA, IGNOU for live project/industrial/final year project training on php"

    },
    {
        __id:'2',
        courseimg: "/assets/img/TrandingCourseSVG/IoT1.svg",
        coursename: "TRAINING ON ANDROID",
        coursecontent: "ZN Infotech is the best place for the students of B-Tech, MCA, BCA, IGNOU for live project/industrial/final year project training on android mobile development"

    },
    {
        __id:'3',
        courseimg: "/assets/img/TrandingCourseSVG/framework.svg",
        coursename: "TRAINING ON PYTHON",
        coursecontent: "ZN Infotech is the best place for the students of B-Tech, MCA, BCA, IGNOU for live project/industrial/final year project training on android mobile development."

    },
    {
        __id:'4',
        courseimg: "/assets/img/TrandingCourseSVG/framework.svg",
        coursename: "TRAINING ON JAVA",
        coursecontent: "ZN Infotech leading institute for live project/industrial/final year project training on java for the students of B-Tech, MCA, BCA, IGNOU etc."

    },
    // {
    //     __id:'5',
    //     courseimg: "/assets/img/TrandingCourseSVG/framework.svg",
    //     coursename: "TRAINING ON .NET",
    //     coursecontent: ".net is the easy platform for website/software/mobile app development,Students of B-Tech,MCA,BCA, IGNOU can select .net for live poject/summer/industrial training at zn infotech"

    // }

];

const TrendingCourse = () => {
    return (
        <>
        {/* text-xl ml-28 lg:text-2xl xl:text-3xl 2xl:text-4xl */}
            <h1 className=" text-xl lg:text-2xl text-blue-500 font-bold text-center mb-2 mt-6 px-5">INDUSTRIAL/PROJECT/SUMMER TRAINING  IN LUCKNOW</h1>
            <section className='grid   grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4   gap-10 pb-10 lg:pb-20  px-7 md:px-20 xl:px-28 py-4 xl:pb-36  '>
            {trendData.map(trendingcourseData => <TrendingCards key={trendingcourseData.__id} dummy={trendingcourseData} />)}
                
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className='absolute left-0  w-full bottom-0 z-0'>
                <path fill="#EAF9FF" fillOpacity="1"
                    d="M0,32L34.3,80C68.6,128,137,224,206,234.7C274.3,245,343,171,411,117.3C480,64,549,32,617,42.7C685.7,53,754,107,823,144C891.4,181,960,203,1029,176C1097.1,149,1166,75,1234,80C1302.9,85,1371,171,1406,213.3L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z">
                </path>
            </svg> */}

            </section>

        </>
    )
}

export default TrendingCourse;
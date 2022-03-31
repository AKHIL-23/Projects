import React from 'react'

let dummyData = [
    {
        ciconClass: "fab fa-js-square",
        cname: "JAVASCRIPT",
        ciconColor: "#F5DE19",
        ccontent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"

    },
    {
        ciconClass: "fab fa-php",
        cname: "PHP",
        ciconColor: "#6181B6",
        ccontent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"

    },
    {
        ciconClass: "fab fa-react",
        cname: "REACT",
        ciconColor: "#53C1DE",
        ccontent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"

    },
    {
        ciconClass: "fab fa-android",
        cname: "ANDROID",
        ciconColor: "#3DDC84",
        ccontent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"

    }, {
        ciconClass: "fab fa-apple",
        cname: "IOS",
        ciconColor: "#ffff",
        ccontent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"

    },
    {
        ciconClass: "fab fa-angular",
        cname: "ANGULAR",
        ciconColor: "#E23237",
        ccontent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa rerum autem dolo harum! Quibusdam exercitationem dolor fugit asperiores"

    }
];

const CourseOwlItems = () => {


    return (
        <div className=" item offerCoursescontent-area ">

            <div className="content ">

                <div className="offerCourse-imgArea">

                    <i className={dummyData[2].ciconClass} style={{ fontSize: 50, marginTop: 19, color: dummyData[2].ciconColor }} ></i>
                </div>
                <h2>{dummyData[2].cname}</h2>

                <p >{dummyData[2].ccontent} </p>
                <button className='active:bg-blue-900 bg-blue-500 hover:bg-red-600   px-4 py-2 rounded-md mt-4 text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold    '>Detailed Syllabus</button>

            </div>

        </div >
    )
}

export default CourseOwlItems
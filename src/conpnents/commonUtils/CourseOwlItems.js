import React from 'react'
import { Link } from "react-router-dom";


const CourseOwlItems = (props) => {


    return (
        <div className=" item offerCoursescontent-area ">

            <div className="content ">

                <div className="offerCourse-imgArea">

                    <i className={props.data.iconClass} style={{ fontSize: 50, marginTop: 19, color: props.data.iconColor }} ></i>
                </div>
                <h2>{props.data.name}</h2>

                <p >{props.data.discription} </p>

                <Link to={`/Course/${props.data.c_id}`} >
                    <button className='active:bg-blue-900 bg-blue-500 hover:bg-red-600   px-4 py-2 rounded-md mt-4 text-base  text-white transform hover:-translate-y-1 hover:scale-110 transition duration-500 ease-in-out   cursor-pointer font-bold    '>Detailed Syllabus</button>
                </Link>

            </div>

        </div >
    )
}

export default CourseOwlItems
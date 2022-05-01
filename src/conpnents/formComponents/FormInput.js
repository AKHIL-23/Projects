import React, { useState } from 'react'
import './FormInput.css'
const FormInput = (props) => {
    const [eye, setEye] = useState("eye-off-outline");


    const fun1 = () => {
        if (eye == "eye-off-outline") {
            setEye("eye-outline");
        }
        else {
            setEye("eye-off-outline");
        }


    }
    return (
        // {props.data.type == 'password' && eye == "eye-outline" ? props.data.type = 'text' : props.data.type == 'password'}
        <div className='relative  '>
            <input type={props.data.type} name={props.data.name} id={props.data.id} placeholder=" " value={props.value} onChange={props.onChange} className={`bg-transparent w-full md:w-96   h-11  focus:ring-blue-500 rounded-md p-1 ring-2 focus:outline-none inputBox ${!props.data.error ? `ring-${props.ringclr}-300` : `ring-red-500`} `} />

            {props.data.name == `password` ? <ion-icon name={eye} class='absolute top-2 right-3 text-xl cursor-pointer' onClick={fun1}></ion-icon> : ""}





            <label htmlFor={props.data.id} className=' absolute top-2 left-5 cursor-text inputTextLabel transition duration-200 text-gray-500'>{props.data.label}</label>
            <h1 className='text-red-600 p-2  w-80 text-sm errMsg'>{props.data.error}</h1>

        </div>
    )
}

export default FormInput


// focus: border - blue - 500

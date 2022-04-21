import React from 'react'

function Options(props) {


    return (
        <option disabled={props.sn == "State Name"} value="" className='bg-green-400' > {props.sn}</option >
    )
}

export default Options
// {props.sn == { `Union Territories Name || State Name`} ?true : false}
import React from 'react'

function Options(props) {


    return (
        <option disabled={props.sn == "choose your State Name"} value={props.sn} className={`bg-${props.clor}-400`} > {props.sn}</option >
    )
}

export default Options
// {props.sn == { `Union Territories Name || State Name`} ?true : false}
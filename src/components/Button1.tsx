import React from "react";
import s from './Button.module.css'

type ButtonType = {
    name: string
    callBack:()=>void
}


export const ButtonTask=(props: ButtonType)=>{
    const onClickHandler=()=>{
        props.callBack()
    }
    return(
        <button className={s.Button} onClick={onClickHandler}>{props.name}</button>
    )
}
import React from "react";
import s from './InputComponent.module.css'

type Button1PropsType = {
    name: string
    callBack: () => void
}


export const Button1 = (props: Button1PropsType) => {
    const OnClickButton1Handler = () => {
        props.callBack()
    }
    return (
        <button className={s.button} onClick={OnClickButton1Handler}>{props.name}</button>
    )
}
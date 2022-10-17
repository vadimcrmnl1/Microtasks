import React from "react";
import s from "./../App.module.css"

type TaskaPropsType = {
    title: string
}

export const Taska1 = (props: TaskaPropsType) => {
    return (

        <div className={s.titleTaska}>{props.title}</div>


    )
}
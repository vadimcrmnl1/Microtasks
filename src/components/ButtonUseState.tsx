import React, {useState} from "react";
import s from './ButtonUseState.module.css'

export const ButtonUseState = () => {

    let[a, setA]=useState(1)

    const onClickHandler = () => {
        setA(++a);
        console.log(a)
    }

    const onClickHandler0=()=>{
        setA(1)
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>{a}</h1>
            <div className={s.buttonblock}>
            <button className={s.Button} onClick={onClickHandler}>number</button>
            <button className={s.Button} onClick={onClickHandler0}>0</button>
            </div>
        </div>
    )
}
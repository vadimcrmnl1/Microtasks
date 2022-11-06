import React, {ChangeEvent} from "react";
import s from './InputComponent.module.css'

type InputPropsType = {
    setTitle: (title: string) => void
    title: string
}


export const Input = (props: InputPropsType) => {
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value)
    }
    return(
        <input className={s.input} value={props.title} onChange={onChangeInputHandler}/>
    )
}
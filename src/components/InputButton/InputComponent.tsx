import React, {useState} from "react";
import s from './InputComponent.module.css'
import {Input} from "./Input";
import {Button1} from "./Button1";

export function InputComponent() {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle] = useState('')
    console.log(title)

    const callBackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }


    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);

    }

    return (
        <div className={s.inputComponent}>
            <Input setTitle={setTitle} title={title}/>
            <Button1 name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div className={s.message} key={index}>{el.message}</div>
                )
            })}
        </div>
    );
}

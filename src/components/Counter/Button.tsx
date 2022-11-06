import React, {MouseEventHandler} from "react";
import s from './Counter.module.css';

type ButtonProps = {
    title: string
    onClick: MouseEventHandler<HTMLButtonElement>
    disabled: boolean | undefined

}

const Button = (props: ButtonProps) => {


    return <button className={props.disabled ? s.disabled : s.button}
                   onClick={props.onClick}
                   disabled={props.disabled}
    >{props.title}</button>


}


export default Button
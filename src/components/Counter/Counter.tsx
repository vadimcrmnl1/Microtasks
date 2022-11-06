import React, {useState} from 'react';
import s from './Counter.module.css';
import Button from "./Button";

function Counter() {

    let [number, setNumber] = useState(0)

    let onCLickHandler = () => {
        setNumber(++number);
    }
    let onClickHandler0 = () => {
        setNumber(0);
    }


    return (
        <div className={s.tablo}>
            <div className={number >= 5 ? s.numberFull : s.number}>{number}</div>
            <div className={s.buttons}>
                <Button title={'inc'}
                        onClick={onCLickHandler}
                        disabled={number >= 5}
                />
                <Button title={'reset'}
                        onClick={onClickHandler0}
                        disabled={number <= 0}
                />
            </div>
        </div>
    )
}

export default Counter;

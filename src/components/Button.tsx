import React from "react";
import {ButtonTask} from "./Button1";
import s from './Banktotes.module.css'


// export function Button() {
//     // const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
//     //     console.log('Hello Im VASYA')
//     // }
//     // const mySecondSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
//     //     console.log('Hello Im Mikita')
//     // }
//
//     // const onClickHandler = (name: string) => {
//     //     console.log(name)
//     // }
//
//     const foo1 = () => {
//     console.log(100200)
//     }
//
//     const foo2 = (number: number) => {
// console.log(number)
//     }
//
//     return (
//         <>
//             {/*<button onClick={event => onClickHandler('VASYA')}>Button - 1</button>*/}
//             {/*<button onClick={event => onClickHandler('MIKITA')}>Button - 2</button>*/}
//             <button onClick={foo1}>1</button>
//             <button onClick={event => foo2(100200)}>2</button>
//         </>
//
//     )
// }


export const Button = () => {
    const ButtonFoo1 = (subscriber: string, age: number, city: string) => {
        console.log(`Name: ${subscriber}, Age: ${age}, City: ${city}`)
    }
    const ButtonFoo2 = (subscriber: string) => {
        console.log(subscriber)
    }
    const ButtonFoo3 = () => {
        console.log('Iam stupid button')
    }
    return (
        <div className={s.buttonblock}>
            <ButtonTask name={'MyYouTubeChannel-1'} callBack={() => ButtonFoo1('Vasya', 29, 'Minsk')}/>
            <ButtonTask name={'MyYouTubeChannel-2'} callBack={() => ButtonFoo2('Ivan')}/>
            <ButtonTask name={'MyYouTubeChannel-3'} callBack={ButtonFoo3}/>
        </div>
    )
}
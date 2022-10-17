import React from "react";

export function Button() {
    const myFirstSubscriber = () => {
        console.log('Hello Im VASYA')
    }
    const mySecondSubscriber = () => {
        console.log('Hello Im Mikita')
    }
    return (
        <>
            <button onClick={myFirstSubscriber}>Button - 1</button>
            <button onClick={mySecondSubscriber}>Button - 2</button>
        </>

    )
}
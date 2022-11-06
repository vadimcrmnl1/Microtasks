import React, {useState} from "react";
import s from './Banktotes.module.css'

type BanknotesType = {
    money: Array<BanknotesPropsType>
}

type BanknotesPropsType = {
    banknotes: string,
    value: number,
    number: string
}

export const Banknotes = (props: BanknotesType) => {

    const [money, setMoney] = useState([
        {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
        {banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
        {banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    // let currentMoney = money;
    // if (nameButton === 'Rubls') {
    //     currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknotes === 'RUBLS')
    // }
    // if (nameButton === 'Dollars') {
    //     currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknotes === 'Dollars')
    // }

    const [filter, setFilter] = useState('all')


    let currentMoney = money;
    if (filter === 'Rubls') {
        currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknotes === 'RUBLS')
    }
    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney, index) => filteredMoney.banknotes === 'Dollars')
    }

    const onclickFilterHandler = (nameButton: string) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul className={s.Money1}>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span> {objFromMoneyArr.banknotes}</span>
                            <span> {objFromMoneyArr.value}</span>
                            <span> {objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div className={s.buttonblock}>
                <button className={s.Button} onClick={() => onclickFilterHandler('All')}>All</button>
                <button className={s.Button} onClick={() => onclickFilterHandler('Rubls')}>Rubls</button>
                <button className={s.Button} onClick={() => onclickFilterHandler('Dollars')}>Dollars</button>
            </div>
        </>
    )
}


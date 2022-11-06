import React from 'react';
import s from "./App.module.css";
import {Taska1} from "./components/Taska1";
import {students} from "./components/students";
import {NewComponent, NewComponent2} from "./components/NewComponent";
import {topCars} from "./components/TopCars";
import {Button} from "./components/Button";
import {ButtonUseState} from "./components/ButtonUseState";
import {Banknotes} from "./components/Banktotes";
import {InputComponent} from "./components/InputButton/InputComponent";
import Counter from "./components/Counter/Counter";



function App() {
    return (
        <>
            <div className={s.App}>
                <div className={s.titleMain}>MICROTASKS</div>
                <Taska1 title={'TASK № 1-1'}/>
                <NewComponent students={students}/>
                <Taska1 title={'TASK № 1-2'}/>
                <NewComponent2 topCars={topCars}/>
                <Taska1 title={'TASK № 1-3'}/>
                <Button/>
                <Taska1 title={'TASK № 1-4'}/>
                <ButtonUseState/>
                <Taska1 title={'TASK № 1-5'}/>
                <Banknotes money={[]}/>
                <Taska1 title={'TASK № 2-1'}/>
                <InputComponent/>
                <Taska1 title={'TASK № 2-2"MONDAY TEST"'}/>
                <Counter/>


            </div>
        </>
    );
}

export default App;

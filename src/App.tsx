import React from 'react';
import s from "./App.module.css";
import {Taska1} from "./components/Taska1";
import {students} from "./components/students";
import {NewComponent, NewComponent2} from "./components/NewComponent";
import {topCars} from "./components/TopCars";
import {Button} from "./components/Button";




function App() {
    return (
        <>
            <div>
                <div className={s.titleMain}>MICROTASKS</div>
                <Taska1 title={'TASK № 1-1'}/>
                <NewComponent students={students}/>
                <Taska1 title={'TASK № 1-2'}/>
                <NewComponent2 topCars={topCars}/>
                <Taska1 title={'TASK № 1-3'}/>
                <Button/>

            </div>
        </>
    );
}

export default App;

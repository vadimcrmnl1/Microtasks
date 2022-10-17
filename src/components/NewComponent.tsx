import React from "react";
import s from "./NewComponent.module.css"

type NewComponentType = {
    students: Array<StudentsProps>
}

type StudentsProps = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentType) => {

    return (
        <div>
            <ul className={s.taska1}>
                {props.students.map((objectFromStudentArray, index) => {
                    return (
                        <ul className={s.spisok}>
                            <li key={objectFromStudentArray.id}>
                                <span className={s.name}>{objectFromStudentArray.name} </span>
                                <span className={s.age}>  {objectFromStudentArray.age}</span>
                            </li>

                        </ul>

                    )
                })}

            </ul>
        </div>
    )

}

type NewComponent2Type = {
    topCars: Array<TopCars>
}

type TopCars = {
    manufacturer: string,
    model: string
}

export const NewComponent2 = (props: NewComponent2Type) => {

    return (
        <div>
            <table>
                {props.topCars.map((objectFromTopCars, index) => {
                    return (
                        <table className={s.tableCars}>
                            <tr key={index}>
                                <td>{objectFromTopCars.manufacturer}</td>
                                <td>{objectFromTopCars.model}</td>
                            </tr>

                        </table>
                    )
                })}
            </table>
        </div>
    )
}
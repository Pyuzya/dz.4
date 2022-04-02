import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Tables from "./Tables";

const Form = (props) => {
    const [changeDate, setChangeDate] = useState()
    const [changeLength, setChangeLength] = useState()
    const [state, setState] = useState([
        {
            date: '2042.12.23',
            length: '23'
        },
        {
            date: '2023.12.21',
            length: ''
        },
        {
            date: '2022.10.14',
            length: '55'
        }
    ])


    const handleDelete = (id => {
        setState(state.filter((e, i) => i !== id))
    })

    const handleChangeDate = (evt => {
        setChangeDate({ value: evt.target.value })
    })

    const handleChangeLength = (evt => {
        setChangeLength({ value: evt.target.value })
    })




    const handleSubmit = ((evt, i) => {
        evt.preventDefault()

        const findDate = state.findIndex(elem => elem.date === changeDate.value)

        if (findDate >= 0) {
            let newState = [...state]
            const newDate = Number(changeLength.value)
            newState[findDate].length = Number(newState[findDate].length) + newDate
            setState(newState)
        } else {
            setState((prevState) => {
                return [
                    ...prevState, {
                        date: changeDate.value,
                        length: changeLength.value
                    }
                ]
            }
            )
        }

    })
    return (
        <div className="form">
            <form onSubmit={evt => { handleSubmit(evt) }}>
                <input name="date" type='text' className="input" placeholder="Дата(ГГГГ.ММ.ДД)" onChange={handleChangeDate}></input>
                <input name="length" type='number' className="input" placeholder="Пройдено км" onChange={handleChangeLength}></input>
                <button className="button" >Добавить</button>
            </form>
            <Tables name={state} delete={handleDelete} />
        </div>
    )
}

export default Form;

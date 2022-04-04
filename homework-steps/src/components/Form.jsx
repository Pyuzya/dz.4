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

    const handleChangeDate = ((evt, i) => {
        let newState = [...state]
        newState[i].date = evt
        setState(newState)
    })

    const handleChangeLength = ((evt, i) => {
        let newState = [...state]
        newState[i].length = evt
        setState(newState)
    })

    const handleSubmit = ((evt) => {
        evt.preventDefault()

        const findDate = state.findIndex(elem => elem.date === changeDate)

        if (findDate >= 0) {
            let newState = [...state]
            const newLength = Number(changeLength)
            newState[findDate].length = Number(newState[findDate].length) + newLength
            setState(newState)
        } else {
            setState((prevState) => {
                return [
                    ...prevState, {
                        date: changeDate,
                        length: changeLength
                    }
                ]
            }
            )
        }

    })
    return (
        <div className="form">
            <form onSubmit={evt => { handleSubmit(evt) }}>
                <input name="date" type='date' className="input" placeholder="Дата(ДД.ММ.ГГГГ)" onChange={(evt) => setChangeDate(evt.target.value)}></input>
                <input name="length" type='number' className="input" placeholder="Пройдено км" onChange={(evt) => setChangeLength(evt.target.value)}></input>
                <button className="button" >Добавить</button>
            </form>
            <Tables name={state} delete={handleDelete} changeDate={handleChangeDate} changeLength={handleChangeLength} />
        </div>
    )
}

export default Form;

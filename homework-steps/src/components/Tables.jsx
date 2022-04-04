import React, { useState } from 'react';
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types';

const Tables = (props) => {

    const [changeButton, setChangeButton] = useState(false)

    let edit;

    if (!changeButton) {
        edit =
            props.name.map((elem, i) => {
                return (
                    <tr key={i}>
                        <td>{elem.date}</td>
                        <td>{elem.length}</td>
                        <td>
                            <button onClick={() => setChangeButton(true)}>✎</button>
                            <button onClick={o => { props.delete(i) }}>✘</button>
                        </td>
                    </tr>
                )
            })
    } else {
        edit =
            props.name.map((elem, i) => {
                return (
                    <tr key={i}>
                        <td><input
                            type='date'
                            value={elem.date}
                            onChange={event => props.changeDate(event.target.value, i)}
                            onBlur={() => setChangeButton(false)} />
                        </td>
                        <td><input
                            type='number'
                            value={elem.length}
                            onChange={event => props.changeLength(event.target.value, i)}
                            onBlur={() => setChangeButton(false)} />
                        </td>
                        <td>
                            <button onClick={() => setChangeButton(true)}>✎</button>
                            <button onClick={o => { props.delete(i) }}>✘</button>
                        </td>
                    </tr>
                )
            }
            )
    }


    console.log(props.changeLength);

    props.name.sort((a, b) => {
        let start = new Date(a.date)
        let end = new Date(b.date)
        return start.getTime() - end.getTime()
    })
    return (
        <div className='table'>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Дата(ДД.ММ.ГГГГ)</th>
                        <th>Пройдено км</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {edit}
                </tbody>
            </Table>
        </div>
    )
}

Tables.propTypes = {
    name: PropTypes.array,
    delete: PropTypes.func,
    changeDate: PropTypes.func,
    changeLength: PropTypes.func
}
export default Tables;

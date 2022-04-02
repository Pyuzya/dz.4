import React, { useState } from 'react';
import { Table } from 'react-bootstrap'
import PropTypes from 'prop-types';

const Tables = (props) => {
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
                        <th>Дата(ГГГГ.ММ.ДД)</th>
                        <th>Пройдено км</th>
                        <th>Действия</th>
                    </tr>
                </thead>
                <tbody>
                    {props.name.map((elem, i) => {
                        return (
                            <tr key={i}>
                                <td>{elem.date}</td>
                                <td>{elem.length}</td>
                                <td><button onClick={o => { props.delete(i) }}>✘</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}

Tables.propTypes = {
    name: React.PropTypes.object,
    delete: React.PropTypes.func
}
export default Tables;

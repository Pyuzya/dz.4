import React, { useState } from 'react';

const Form = (props) => {
    const validHex = new RegExp(
        '#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})'
    )
    const [hex, setHex] = useState('')
    const [hexText, setHexText] = useState(false);

    const formHandler = evt => {
        console.log(validHex.test(evt.target.value));
        setHex(evt.target.value)
        if (validHex.test(evt.target.value) && evt.target.value.length === 7) {
            const r = parseInt(evt.target.value[1] + evt.target.value[2], 16);
            const g = parseInt(evt.target.value[3] + evt.target.value[4], 16);
            const b = parseInt(evt.target.value[5] + evt.target.value[6], 16);
            setHexText(`rgb (${r}, ${g}, ${b})`)
            props.color(evt.target.value)
        } else {
            setHexText('Ошибка');
        }
    }


    return (
        <div className='form'>
            <form>
                <input onChange={evt => { formHandler(evt) }} />
            </form>
            <div className='color'>{hexText}</div>
        </div>
    );
}
export default Form;

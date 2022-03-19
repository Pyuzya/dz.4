import React, { useState } from 'react';
import Form from './components/Form';
import './App.css';

function App(props) {
    const [background, setBackground] = useState('')

    const swap = (color) => {
        setBackground(color)
    }

    return (
        <div style={{
            backgroundColor: background,
            height: 1080
        }}>
            <Form color={swap} />
        </div>
    );
}

export default App

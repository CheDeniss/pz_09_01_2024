import React, { useState } from 'react';

function EX1() {
    const [color, setColor] = useState({ background: 'white', text: 'silver' });

    const changeColor = (background, text) => {
        setColor({ background, text });
    };

    return (
        <div style={{ backgroundColor: color.background,
            color: color.text,
            height: '300px',
            width: '600px'}}>
            <p>Some TEXT</p>
            <p>Some TEXT</p>
            <p>Some TEXT</p>
            <p>Some TEXT</p>
            <p>Some TEXT</p>
            <p>Some TEXT</p>
            <p>Some TEXT</p>
            <p>Some TEXT</p>
            <button onClick={() => changeColor('red', 'black')}>Червоний</button>
            <button onClick={() => changeColor('green', 'red')}>Зелений</button>
            <button onClick={() => changeColor('blue', 'orange')}>Синій</button>
        </div>
    );
}

export default EX1;

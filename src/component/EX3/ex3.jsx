import React from 'react';

class EX3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { background: 'white', text: 'silver' };

        this.changeColor = this.changeColor.bind(this);
    }

    changeColor(background, text) {
        this.setState({ background, text });
    }

    render() {
        return (
            <div style={{ backgroundColor: this.state.background,
                color: this.state.text,
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
                <button onClick={() => this.changeColor('red', 'black')}>Червоний</button>
                <button onClick={() => this.changeColor('green', 'red')}>Зелений</button>
                <button onClick={() => this.changeColor('blue', 'orange')}>Синій</button>
            </div>
        );
    }
}

export default EX3;

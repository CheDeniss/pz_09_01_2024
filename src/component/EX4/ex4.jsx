import React from 'react';

class Ex4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: 'quote',
            author: 'author'
        };
        this.getQuote = this.getQuote.bind(this);
    }

    getQuote() {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => this.setState({ quote: data.content, author: data.author }))
            .catch(error => console.error(error));
    }

    render() {
        return (
            <div>
                <button onClick={this.getQuote}>Цитата дня</button>

                <div style={{
                    width: "600px",
                    background: "silver",
                    border: "1px solid red",
                    borderRadius: "5px",
                    padding: "20px"
                }}>
                    <h3>{this.state.quote}</h3>
                    <hr/>
                    <h2>{this.state.author}</h2>
                </div>
            </div>
        );
    }
}

export default Ex4;

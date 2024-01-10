import React, {Component} from 'react';

class Ex2Brthd extends Component {
    render() {
        return (
            <div>
                <p>Дата народження: {this.props.birthdate}</p>
            </div>
        );
    }
}

export default Ex2Brthd;
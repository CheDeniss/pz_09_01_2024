import React, {Component} from 'react';

class Ex2Portr extends Component {
    render() {
        return (
            <div>
                <img style={{height: "200px"}} src={this.props.portraitUrl} alt="Портрет" />
            </div>
        );
    }
}

export default Ex2Portr;
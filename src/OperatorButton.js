import React from 'react'

class operatorButton extends React.Component {
    constructor(props) {
        super(props)
    }
    style = {
        display: 'inline-block',
        width: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        verticalAlign: 'middle',
        backgroundColor: 'gray',
        color: 'white',
        textDecoration: 'none',
        padding: '5px',
        margin: '2px',
    }
    render() {
        return (
            <div style={this.style}
                onClick={this.props.onClick}>
                {this.props.operator}
            </div>
        )
    }
}

export default operatorButton
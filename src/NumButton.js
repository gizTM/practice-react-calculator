import React from 'react'

class NumButton extends React.Component {
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
            <a style={this.style}
                href='#'
                onClick={this.props.onClick}>
                {this.props.num}
            </a>
        )
    }
}

export default NumButton
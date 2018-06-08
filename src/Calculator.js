import React from 'react'
import NumButton from './NumButton'
import OperatorButton from './OperatorButton'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            current: 0
        }
        this.handleOnNumClick = this.handleOnNumClick.bind(this)
        this.handleOnOperatorClick = this.handleOnOperatorClick.bind(this)
    }
    nums = [1,2,3,4,5,6,7,8,9,0]
    operators = ['+','-','x','%']

    handleOnNumClick = (num) => {
        console.log('num clicked!')
        this.setState({ 
            result: num,
            current: num
        })
    }
    
    handleOnOperatorClick = (num) => {
        console.log('operator clicked!')
        this.setState({ 
            result: num,
            current: num
        })
    }

    buttonPanel = this.nums.map((n) => <NumButton num={n} onClick={this.handleOnNumClick({n})} /> )
    operatorPanel = this.operators.map((n) => <OperatorButton operator={n} onClick={this.handleOnOperatorClick({n})} /> )

    render() {
        console.log('this.state.result'+this.state.result);
        return (
            <React.Fragment>
                <h1>{this.state.result}</h1>
                {this.buttonPanel} <br/>
                {this.operatorPanel}
            </React.Fragment>
        )
    }
}

export default Calculator
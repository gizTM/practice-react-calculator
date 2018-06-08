import React from 'react'
import NumButton from './NumButton'
import OperatorButton from './OperatorButton'

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            result: 0,
            statement: '',
            status: 0
        }
        this.handleOnFirstNumClick = this.handleOnFirstNumClick.bind(this)
        this.handleOnNumClick = this.handleOnNumClick.bind(this)
        this.handleOnOperatorClick = this.handleOnOperatorClick.bind(this)
    }
    nums = [7,8,9,4,5,6,1,2,3,0]
    operators = ['+','-','*','/','=']

    handleOnFirstNumClick = (event,num) => {
        console.log('num clicked!')
        this.setState({
            result: num
        })
    }

    handleOnNumClick = (event,num) => {
        this.setState( prevState => ({
                statement: prevState.statement + num,
                result: prevState.statement + num
            })
        )
    }
    
    handleOnOperatorClick = (event,op) => {
        console.log('operator clicked!')
        this.setState( prevState => {
            if (op === '=') return {
                statement: '',
                result: eval(prevState.statement)
            }
            else return { 
                statement: prevState.statement + op, 
                //result: prevState.statement + op
            }
        })
    }

    handleClear = (event) => {
        this.setState({ result: 0, statement: '' })
    }

    buttonPanel = this.nums.map((n,i) => {
        console.log('i%3: '+i%3)
        return (
            <div>
                <NumButton num={n} onClick={(event,num) => this.handleOnNumClick(event,n)} />
                {!i%3 && <br/>}
            </div>
        )
    })
    operatorPanel = this.operators.map((n) => <OperatorButton operator={n} onClick={(event,op) => this.handleOnOperatorClick(event,n)} /> )

    render() {
        console.log('this.state.result: '+this.state.result);
        return (
            <React.Fragment>
                <h1>{this.state.result}</h1>
                {this.buttonPanel} <br/>
                {this.operatorPanel} <br/>
                <button onClick={this.handleClear}>clear</button>
            </React.Fragment>
        )
    }
}

export default Calculator
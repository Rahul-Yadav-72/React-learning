import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      op1: "",
      op2: "",
      operator: "",
      result: "",
      v1: true,
    };
  }

  onButtonClick = (value) => {
    this.setState((prevState) => {
      if (prevState.v1) {
        return {
          op1: prevState.op1 + value,
          result: prevState.result + value,
        };
      } else {
        return {
          op2: prevState.op2 + value,
          result: prevState.result + value,
        };
      }
    });
  };

  onOperatorClick = (operator) => {
    this.setState({
      operator: operator,
      v1: false,
      result: this.state.result + operator,
    });
  };

  onEvaluteClick = () => {
    const { op1, op2, operator } = this.state;
    var t1 = parseInt(op1);
    var t2 = parseInt(op2);

    switch (operator) {
      case "+": this.setState({ result: t1 + t2 }); break;
      case "-": this.setState({ result: t1 - t2 }); break;
      case "*": this.setState({ result: t1 * t2 }); break;
      case "/": this.setState({ result: t1 / t2 }); break;
      case "%": this.setState({ result: t1 % t2 }); break;
      case "**": this.setState({ result: t1 ** t2 }); break;
    }
  };

  //  CLEAR BUTTON
  onClearClick = () => {
    this.setState({
      op1: "",
      op2: "",
      operator: "",
      result: "",
      v1: true,
    });
  };

  render() {
    const { result } = this.state;

    return (
      <>
        <style>{`
          body {
            background: #0f172a;
            font-family: Arial, sans-serif;
          }

          .calculator {
            width: 280px;
            margin: 60px auto;
            padding: 18px;
            background: #111827;
            border-radius: 16px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.6);
          }

          .display {
            width: 100%;
            height: 50px;
            margin-bottom: 15px;
            background: #020617;
            color: #22c55e;
            font-size: 22px;
            text-align: right;
            padding-right: 12px;
            border-radius: 10px;
            border: none;
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }

          .btn {
            height: 48px;
            font-size: 16px;
            border-radius: 12px;
            border: none;
            cursor: pointer;
            background: #1f2933;
            color: white;
          }

          .btn:hover {
            background: #374151;
          }

          .operator {
            background: #2563eb;
          }

          .equal {
            background: #22c55e;
            color: black;
          }

          .clear {
            background: #ef4444;
            grid-column: span 4;
          }
        `}</style>

        <div className="calculator">
          <input className="display" type="text" disabled value={result} />

          <div className="grid">
            <button className="btn" onClick={() => this.onButtonClick("1")}>1</button>
            <button className="btn" onClick={() => this.onButtonClick("2")}>2</button>
            <button className="btn" onClick={() => this.onButtonClick("3")}>3</button>
            <button className="btn operator" onClick={() => this.onOperatorClick("+")}>+</button>

            <button className="btn" onClick={() => this.onButtonClick("4")}>4</button>
            <button className="btn" onClick={() => this.onButtonClick("5")}>5</button>
            <button className="btn" onClick={() => this.onButtonClick("6")}>6</button>
            <button className="btn operator" onClick={() => this.onOperatorClick("-")}>-</button>

            <button className="btn" onClick={() => this.onButtonClick("7")}>7</button>
            <button className="btn" onClick={() => this.onButtonClick("8")}>8</button>
            <button className="btn" onClick={() => this.onButtonClick("9")}>9</button>
            <button className="btn operator" onClick={() => this.onOperatorClick("*")}>*</button>

            <button className="btn" onClick={() => this.onButtonClick("0")}>0</button>
            <button className="btn operator" onClick={() => this.onOperatorClick("/")}>/</button>
            <button className="btn operator" onClick={() => this.onOperatorClick("**")}>**</button>
            <button className="btn equal" onClick={() => this.onEvaluteClick()}>=</button>

            {/*  CLEAR BUTTON */}
            <button className="btn clear" onClick={this.onClearClick}>C</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;

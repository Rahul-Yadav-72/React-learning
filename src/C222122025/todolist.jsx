import React, { Component } from 'react';

class ToDOList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], inputValue: "" };
  }

  addToList = () => {
    if (this.state.inputValue.trim() === "") return;
    const newentry = {
      id: Date.now(),
      text: this.state.inputValue,
      completed: false
    };
    this.setState(prevState => ({
      todos: [newentry, ...prevState.todos],
      inputValue: ""
    }));
  };

  onInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };
  
    deleteChange = (id) => {
    this.setState(prevState => ({
        todos: prevState.todos.filter(y => y.id !== id)
    }));
    };

  render() {
    const { todos, inputValue } = this.state;
    return (
      <>
        <input type="text" value={inputValue} onChange={this.onInputChange} />
        <br />
        <button onClick={this.addToList}>Add</button>
        <br />
        <ul>
            {todos.map(x => (
            <li key={x.id}>
                <input
                type="checkbox"
                checked={x.completed}
                onChange={() => this.toggleComplete(x.id)}
                />
                {x.text}
                <button onClick={() => this.deleteChange(x.id)}>Delete</button>
            </li>
            ))}
        </ul>
      </>
    );
  }
}

export default ToDOList;
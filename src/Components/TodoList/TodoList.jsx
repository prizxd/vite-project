import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: "Do something strange" },
        { id: 2, text: "Brush your teeth" },
      ],
      newTodo: "",
    };
  }

  handleChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  add = () => {
    const { todos, newTodo } = this.state;
    if (newTodo) {
      const newId = todos.length + 1;
      this.setState({
        todos: [...todos, { id: newId, text: newTodo }],
        newTodo: "",
      });
    }
  };

  delete = (id) => {
    const newTodos = this.state.todos.filter((i) => i.id !== id);
    this.setState({ todos: newTodos });
  };

  render() {
    const { todos, newTodo } = this.state;

    return (
      <div>
        <h2>To-Do List</h2>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => this.delete(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <div>
          <input type="text" value={newTodo} onChange={this.handleChange} />
          <button onClick={this.add}>Add</button>
        </div>
      </div>
    );
  }
}

export default TodoList;

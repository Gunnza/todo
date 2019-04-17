import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Todos from './Components/Todos'
import AddTodo from './Components/AddTodo'
import NavBar from './Components/NavBar'

import Home from './Components/Home'
import About from './Components/About'

class App extends Component {

  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id => {
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      })
      this.setState({
        todos
      })
  })

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  render() {
    return (
      <Router>
          <div className="App">
              <h1 className="center blue-text">Todo's</h1>
              <Todos todos = {this.state.todos} deleteTodo={this.deleteTodo} />
              <AddTodo addTodo = {this.addTodo} />
              <NavBar/>
              <div>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
              </div>
          </div>
      </Router>
    );
  }
}

export default App;

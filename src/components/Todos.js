import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component{

    markComplete = () => { console.log('hello') }

    render(){  

        return this.props.todos.map((todo) => (

            <TodoItem key = { todo.id} Todo = {todo} markComplete = {this.props.markComplete} delItem = {this.props.delItem} />

        ));

       
    }

}

Todos.propTypes = {

    todos : PropTypes.array.isRequired
}


export default Todos;
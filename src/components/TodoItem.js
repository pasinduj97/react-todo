import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TodoItem extends Component {

    getStyle = () => {

        return{
            background : '#f4f4f4',
            padding : '10px',
            textDecoration : this.props.Todo.completed ? 'line-through' : 'none',
            borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        return (
            <div style = { this.getStyle()}>

                
                <input type = "checkbox" onChange = {this.props.markComplete.bind(this,this.props.Todo.id) } />
                {'   '}

                {this.props.Todo.title}
                
                <button style = {{float : "right"}} onClick = {this.props.delItem.bind(this,this.props.Todo.id)}>x</button>
                
            
                
            </div>
        )
    }
}

TodoItem.propTypes = {

    Todo : PropTypes.object.isRequired

}

export default TodoItem

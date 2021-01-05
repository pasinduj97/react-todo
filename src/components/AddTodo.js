import React, {Component} from 'react';

class AddTodo extends Component{

    state = {

        title : ''

    }

    change = (e) => {

        this.setState( { [e.target.name] : e.target.value });
    }

    onSubmit = (e) => {

        e.preventDefault();
        this.props.addtodo(this.state.title);
        this.setState({title : ''});

    }

    render(){

        return(

            <form onSubmit = {this.onSubmit}>

                <input type = "text" name = "title" onChange = {this.change} ></input>

                <input type = "submit" value = "submit"></input>

            </form>

        )

    }

} 

export default AddTodo;


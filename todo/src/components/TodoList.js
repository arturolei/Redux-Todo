import React from "react";
import { connect } from 'react-redux';
import {mark_completed} from '../actions'

class TodoList extends React.Component {
    toggleCompleted = (event,index) => {
        event.preventDefault();
        this.props.mark_completed(index);
    }
    render() {
        return (
        <ul>
            {this.props.listOfTodos.map((todoItem,index) => (
                <li key={index} onClick={event => this.toggleCompleted(event,index)}>
                    <p>{todoItem.value}</p> 
                    <p> Completed: {todoItem.completed ? "YES":"NO"}</p>
                </li>
                   
                ))}
        </ul>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{listOfTodos:state.todos}
}

export default connect(mapStateToProps, {mark_completed})(TodoList)
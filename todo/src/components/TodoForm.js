import React from "react";
import { connect } from 'react-redux';
import {add_todo} from '../actions'

class TodoForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value:'',
            completed:false
        }
    }

    addTodo= event =>{
        event.preventDefault();
        this.props.add_todo(this.state);
        this.setState({value:''});
    }

    changeHandler = event =>{
        this.setState({ [event.target.name]: event.target.value });
    }
    render(){
        return(
        <div>
        <form onSubmit={this.addTodo}>
          <input
            onChange={this.changeHandler}
            placeholder="task"
            value={this.state.value}
            name="value"
          />
          <button type="submit">Add task</button>
        </form>
      </div>)
    }
}

const mapStateToProps = (state) => {
    return {listOfTodos:state.todos}
}

export default connect(mapStateToProps, {add_todo})(TodoForm)
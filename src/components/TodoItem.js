import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: 'lightblue',
            padding: '10px',
            borderBottom: '10px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    // markComplete = (e) => {
    //     console.log(this.props)
    // }

    render() {
        const {id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {''}
                {title}
                </p>
                    </div >
                
        )}
}


TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem

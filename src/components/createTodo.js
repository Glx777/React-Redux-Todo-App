import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {addTask} from '../actions/'

class CreateTodo extends Component {
  render() {
    return (
      <div id="createTODO">
        <input type="text" ref="task" placeholder="Buy milk" />
        <button onClick={() => {
          if (this.refs.task.value !== '') {
            this.props.addTask(this.refs.task.value)
            this.refs.task.value = ''
          } else {
            alert('Field cannot be empty')
          }
        }}>Add</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({addTask}, dispatch)
}

export default connect(() => {}, mapDispatchToProps)(CreateTodo)

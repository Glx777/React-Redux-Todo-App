import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {deleteTask} from '../actions/'

class Task extends Component {
  render() {
    return (
      <li>
        <span>Task #{this.props.taskId + 1}:</span><span>{this.props.task}</span><button id="danger" onClick={() => {this.props.deleteTask(this.props.taskId)}}>Remove</button>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({deleteTask}, dispatch)

export default connect(() => {}, mapDispatchToProps)(Task)

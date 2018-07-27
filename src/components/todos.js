import React, {Component} from 'react'
import {connect} from 'react-redux'
import Task from './task'

class Todos extends Component {
  render() {
    return (
      <div id="todos">
        <ul>
          {this.props.tasks.map((task, i) =>
            <Task key={i} taskId={i} task={task} />
          )}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})
export default connect(mapStateToProps)(Todos)

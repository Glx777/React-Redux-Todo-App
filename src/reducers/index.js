import {combineReducers} from 'redux'
import {addTask, editTask, deleteTask} from '../actions/'

const tasksReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TASK':
      state = [action.payload, ...state]
      break
    case 'DELETE_TASK':
      state = state.slice()
      state.splice(action.payload, 1)
      break
    default:
      return state
  }
  return state
}

const reducers = combineReducers({
  tasks: tasksReducer
})

export default reducers

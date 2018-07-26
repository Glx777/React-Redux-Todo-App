import React, {Component} from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducers from './reducers/'
import Header from './components/header'
import CreateTodo from './components/CreateTodo'
import Todos from './components/todos'

let store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <CreateTodo />
        <Todos />
      </div>
    )
  }
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("react-container")
)

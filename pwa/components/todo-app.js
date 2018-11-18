import { h, Component } from 'preact';
import { toArray } from '../utils';

import * as Controller from '../services/todo-controller';

import VBox from '../ux/v-box';
import HBox from '../ux/h-box';
import Circle from '../ux/circle';
import Icon from '../ux/icon';

import TodoList from './todo-list';

export default class App extends Component {

  state = { todos: [], notifications: false }

  componentDidMount() {
    Controller.initialize();
    Controller.onChange(
      todos => this.setState({ todos: toArray(todos) })
    )
    this.setNotificationState(Controller.isNotificationsEnabled());
  }

  setNotificationState(notifications) {
    this.setState({ notifications });
  }

  removeTodo(uid) {
    Controller.removeTodo(uid);
  }

  checkTodo(uid) {
    Controller.checkTodo(uid);
  }

  clearTodos() {
    Controller.clearTodos();
  }

  toggleNotifications() {
    Controller.toggleNotifications().then(notifications =>
      this.setNotificationState(notifications));
  }

  createTodo() {
    const text = prompt('Introduce el título de la tarea');
    if(!text) return;

    Controller.addTodo(text);
  }

  render() {
    return (
      <VBox>
        <TodoList
          todos={this.state.todos}
          onTodoChecked={uid => this.checkTodo(uid)}
          onTodoRemoved={uid => this.removeTodo(uid)}/>
        <HBox.SpaceBetween>
          <Circle>
            <Icon onClick={() => this.clearTodos()} shape="delete" />
          </Circle>
          <Circle>
            {this.state.notifications ? (
              <Icon onClick={() => this.toggleNotifications()} shape="notifications_active" />
            ): (
              <Icon onClick={() => this.toggleNotifications()} shape="notifications_off" />
            )}
          </Circle>
          <Circle>
            <Icon onClick={() => this.createTodo()} shape="create" />
          </Circle>
        </HBox.SpaceBetween>
      </VBox>
    )
  }
}

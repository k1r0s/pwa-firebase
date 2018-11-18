import { h } from 'preact';

import ScrollView from '../ux/scroll-view';
import VBox from '../ux/v-box';

import TodoItem from './todo-item';

export default props => (
  <ScrollView>
    <VBox>
      {props.todos.map(todo => (
        <TodoItem
          todo={todo}
          onTodoRemoved={() => props.onTodoRemoved(todo.uid)}
          onTodoChecked={() => props.onTodoChecked(todo.uid)}/>
      ))}
    </VBox>
  </ScrollView>
)

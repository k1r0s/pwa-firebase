import { h } from 'preact';

import Box from '../ux/box';
import HBox from '../ux/h-box';
import Label from '../ux/label';
import Icon from '../ux/icon';

export default props => (
  <Box>
    <HBox.SpaceBetween>
      <a onClick={props.onTodoChecked}>
        <Label strike={props.todo.checked}>
          {props.todo.text}
        </Label>
      </a>
      <Icon onClick={props.onTodoRemoved} shape="clear" />
    </HBox.SpaceBetween>
  </Box>
)

import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      display: block;
    }

    input {
      border-style: groove;
      font-size: larger;
    }

  `,
  // component
  props => (
    <input type="text" { ...props } />
  )
)

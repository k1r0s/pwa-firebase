import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      -moz-box-shadow:    3px 3px 5px 6px #ccc;
      -webkit-box-shadow: 3px 3px 5px 6px #ccc;
      box-shadow:         3px 3px 5px 6px #ccc;
      margin: .2rem;

      background: white;
    }
  `,
  // component
  ({ children }) => children
)

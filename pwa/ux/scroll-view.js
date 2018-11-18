import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      overflow-y: scroll;
      height: 80vh;
    }
  `,
  // component
  ({ children, ...props }) => children
)

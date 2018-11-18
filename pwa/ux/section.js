import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      display: block;
      padding: 1rem 2rem;
    }
  `,
  // component
  ({ children }) => children
)

import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      display: flex;
      flex-direction: column;
    }

    :host > * {
      margin-bottom: 0.5rem;
    }
  `,
  // component
  ({ children }) => children
)

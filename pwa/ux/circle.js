import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      border-radius: 50%;
      width: 4rem;
      height: 4rem;
      background: lightblue;
      display: flex;
      justify-content: center;
      align-items: center;
    }

  `,
  // component
  ({ children, ...props }) => children
)

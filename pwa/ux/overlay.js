import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      position: relative;
      z-index: 99;
    }

    :host:first-child {
      position: absolute;
    }

  `,
  // component
  ({ children, ...props }) => children
)

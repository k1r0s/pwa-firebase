import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

const HBox = stylesheet(
  // style
  `
    :host {
      display: flex;
    }

    :host > * {
      margin-right: 0.5rem;
    }
  `,
  // component
  ({ children }) => children
)

HBox.SpaceBetween = stylesheet(
  // style
  `
  :host {
    display: flex;
    justify-content: space-between;
  }

  :host > * {
    margin-right: 0.5rem;
  }
  `,
  // component
  ({ children }) => children
)

export default HBox;

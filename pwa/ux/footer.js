import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      position: absolute;
      bottom: 0;
      z-index: 9;
    }

    div {
      margin: .5rem;
    }
  `,
  // component
  ({ children }) => (
    <div>{children}</div>
  )
)

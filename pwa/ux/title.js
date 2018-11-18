import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    :host {
      font-size: 2rem;
      font-weight: bold;
      text-align: center;
    }
  `,
  // component
  ({ children }) => (
    <div>
      <span>{children}</span>
      <hr/>
    </div>
  )
)

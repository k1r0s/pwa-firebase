import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  ``,
  // component
  ({ shape, ...props }) => (
    <a {...props}>
      <i class="material-icons">{shape}</i>
    </a>
  )
)

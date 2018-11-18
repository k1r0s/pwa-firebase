import { h } from "preact";
import { stylesheet } from "stylesheet-decorator";

export default stylesheet(
  // style
  `
    span {
      text-align: left;
      font-size: medium;
      line-height: 1.8;
      margin-left: 0.2rem;
    }

    .strike {
      text-decoration: line-through;
    }
  `,
  // component
  ({ children, strike }) => (
    <span class={strike && "strike"}>
      {children}
    </span>
  )
)

import { node, string } from "prop-types"

function Section({ title, children, ...props }) {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  )
}

Section.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  children: node
}

export default Section

import { string } from "prop-types"

import "./coreConcept.css"

function CoreConcept({ title, description, img }) {
  return (
    <li>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

//Core concept prop validation
CoreConcept.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  img: string
}

export default CoreConcept

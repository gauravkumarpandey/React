import { CORE_CONCEPTS } from "../data"
import CoreConcept from "./core-concept/CoreConcept"

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map(data => (
          <CoreConcept key={data.id} title={data.title} description={data.description} img={data.image} />
        ))}
      </ul>
    </section>
  )
}

export default CoreConcepts

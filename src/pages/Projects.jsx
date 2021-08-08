import React, { useEffect } from "react"
import Section from "../components/Section"
import Card from "../components/Card"
import { useState } from "react"
import { connect } from "react-redux"

const Projects = ({ projects }) => {
  const [count, setCount] = useState(8)
  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(projects.slice(0, count))
  }, [count, projects])

  return (
    <Section id="projects" title="Major Open Source Projects">
      <div className="cards">
        {items && items.map((card, index) => <Card card={card} key={index} />)}
      </div>

      <div className="d-flex justify-content-center">
        {count < projects.length && (
          <div
            className="btn btn-primary mt-5 btn-lg"
            onClick={() => setCount(count + 4)}
          >
            See more
          </div>
        )}
      </div>
    </Section>
  )
}

const mapStateToProps = (store) => {
  const { projects } = store.project
  return { projects }
}

export default connect(mapStateToProps)(Projects)

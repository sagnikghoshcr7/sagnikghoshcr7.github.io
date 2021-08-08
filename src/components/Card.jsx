import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"
import { motion, AnimatePresence } from "framer-motion"
import loadingGif from "../assets/spinner.svg"

export default function ProjectCard({
  card: { img, title, desc, demo, source },
}) {
  const [isLoading, setIsLoading] = useState(true)

  const thumbnail = {
    backgroundImage: `url(${img})`,
  }

  const LoadingAnimation = () => {
    return (
      <AnimatePresence>
        {isLoading && (
          <motion.div className="overlay">
            <img
              src={img}
              onLoad={() => setTimeout(() => setIsLoading(false), 1000)}
              onError={() => setIsLoading(false)}
              style={{ display: "none" }}
              alt={title}
            />
            <img src={loadingGif} alt="Loading card..." />
          </motion.div>
        )}
      </AnimatePresence>
    )
  }

  return (
    <Card data-aos="flip-left">
      <div className="card-thumbnail" style={thumbnail}>
        <LoadingAnimation />
      </div>

      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <div className="btn-grp">
          <Button href={demo} target="_blank">
            Live Demo
          </Button>
          <Button href={source} target="_blank" variant="secondary">
            Source Code
          </Button>
        </div>
      </Card.Body>
    </Card>
  )
}

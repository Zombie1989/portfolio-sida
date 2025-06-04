// src/components/Projects.tsx
import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projekt</h2>
      <div className="project-list">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noopener noreferrer">Se projekt</a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
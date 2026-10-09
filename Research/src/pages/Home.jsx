import { Link } from 'react-router-dom'
import { project, stats, components, methodology } from '../data/projectData'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="badge">Research Project {project.year} · SLIIT</span>
          <h1>{project.title}</h1>
          <p className="hero-tag">{project.tagline}</p>
          <div className="hero-actions">
            <Link className="btn btn-gold" to="/domain">Explore the Research</Link>
            <Link className="btn btn-outline" to="/documents">View Documents</Link>
          </div>
        </div>
      </section>

      <section className="container block">
        <h2 className="section-title">Abstract</h2>
        <p className="lead">{project.abstract}</p>
      </section>

      <section className="stats-wrap">
        <div className="container stats">
          {stats.map((s) => (
            <div className="stat" key={s.value}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="container block">
        <h2 className="section-title">Four Research Components</h2>
        <div className="grid">
          {components.map((c) => (
            <div className="card" key={c.no}>
              <div className="card-no">{c.no}</div>
              <h3>{c.name}</h3>
              <p>{c.summary}</p>
              <p className="card-result"><strong>Result:</strong> {c.result}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container block">
        <h2 className="section-title">System Data Flow</h2>
        <div className="flow">
          {methodology.flow.map((f, i) => (
            <div className="flow-item" key={f}>
              <div className="flow-box">{f}</div>
              {i < methodology.flow.length - 1 && <span className="flow-arrow">➜</span>}
            </div>
          ))}
        </div>
      </section>

      <section className="container block">
        <h2 className="section-title">Explore</h2>
        <div className="grid grid-3">
          <Link to="/domain" className="card link-card"><h3>Domain</h3><p>Literature survey, research gap, problem, objectives, methodology and technologies.</p></Link>
          <Link to="/milestones" className="card link-card"><h3>Milestones</h3><p>All project assessments with dates and marks.</p></Link>
          <Link to="/documents" className="card link-card"><h3>Documents</h3><p>Charter, proposal, checklists and final reports.</p></Link>
        </div>
      </section>
    </>
  )
}
import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import { milestones } from '../data/projectData'

export default function Milestones() {
  const [selected, setSelected] = useState(milestones[0].id)
  const item = milestones.find((m) => m.id === selected)

  return (
    <>
      <PageHeader title="Milestones" subtitle="Select an assessment to see its details, date and marks" />
      <div className="container block">
        <label htmlFor="milestone" className="select-label">Choose an assessment:</label>
        <select id="milestone" className="select" value={selected} onChange={(e) => setSelected(e.target.value)}>
          {milestones.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>

        <div className="panel milestone-card">
          <h3>{item.name}</h3>
          <p>{item.details}</p>
          <div className="meta">
            <div><span>Date</span><strong>{item.date}</strong></div>
            <div><span>Marks allocated</span><strong>{item.marks}</strong></div>
          </div>
        </div>

        <h2 className="section-title">All Assessments</h2>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Assessment</th><th>Date</th><th>Marks</th></tr></thead>
            <tbody>
              {milestones.map((m) => (
                <tr key={m.id}><td>{m.name}</td><td>{m.date}</td><td>{m.marks}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
import PageHeader from '../components/PageHeader'
import { documents } from '../data/projectData'

export default function Documents() {
  return (
    <>
      <PageHeader title="Documents" subtitle="Documents produced throughout the research project" />
      <div className="container block">
        {documents.map((g) => (
          <div className="panel" key={g.group}>
            <h3>{g.group}</h3>
            <ul className="link-list">
              {g.items.map((d) => (
                <li key={d.name}>
                  {d.url ? (
                    <a href={d.url} target="_blank" rel="noreferrer">📄 {d.name}</a>
                  ) : (
                    <span className="pending">📄 {d.name} <em>(Pending)</em></span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
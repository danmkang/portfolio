import React from "react"
import "./layout.css"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
          <h3 style={{ display: `inline` }}>Daniel Kang <span role="img" aria-label="rocket">🚀</span></h3>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/reading">Reading</ListLink>
        </ul>
      </header>
      {children}
    </div>
    
  )
}
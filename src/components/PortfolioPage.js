import React from 'react'
import { NavLink } from 'react-router-dom'

const PortfolioPage = (props) => {
  return (
    <div>
      <h3>My Work</h3>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <NavLink to="/portfolio/1" activeClassName="is-active">
          Portfolio Item One
        </NavLink>
        <NavLink to="/portfolio/2" activeClassName="is-active">
          Portfolio Item Two
        </NavLink>
      </div>
    </div>
  )
}

export default PortfolioPage

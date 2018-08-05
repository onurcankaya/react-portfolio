import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <div>
    <header>
      <h1>Portfolio</h1>
      <div>
        <NavLink to="/" activeClassName="is-active" exact>
          Home
        </NavLink>
        <NavLink to="/portfolio" activeClassName="is-active" exact>
          Portfolio
        </NavLink>
        <NavLink to="/contact" activeClassName="is-active">
          Contact
        </NavLink>
      </div>
    </header>
  </div>
)

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'

const PortfolioItemPage = (props) => (
  <div>
    <p>{`This is from Portfolio Item ${props.match.params.id}`}</p>
    <NavLink to="/portfolio">Go back</NavLink>
  </div>
)

export default PortfolioItemPage

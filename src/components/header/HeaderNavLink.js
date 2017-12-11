import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { spacing } from './../../styles/_Theme.json'
import { DefaultLink } from './../../styles'
import { fonts } from './../../styles/_Theme.json'

const NavItem = styled.li`
  margin-right: ${spacing.single_pad};
  &:last-child {
    margin-right: 0;
  }
`

export default (props) =>
  <NavItem>
    <NavLink to={props.Path} activeClassName="active">
      <span>{props.Page}</span>
    </NavLink>
  </NavItem>

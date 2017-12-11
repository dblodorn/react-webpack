import styled from 'styled-components'
import HeaderNavLink from './HeaderNavLink'
import { routes } from './../../_routes.json'
import { flexRowCenteredVert } from './../../styles'

const Nav = styled.nav`
  height: 100%;
`

const NavList = styled.ul`
  ${flexRowCenteredVert}
  height: 100%;
`

const HeaderNavigation = () => {
  const NavItems = routes.map((item, i) =>
    <HeaderNavLink Page={item.page} Path={item.path} key={item.page + '-nav-' + i}/>
  )
  return (
    <Nav>
      <NavList>
        {NavItems}
      </NavList>
    </Nav>
  )
}

export default HeaderNavigation

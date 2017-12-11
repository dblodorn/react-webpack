import styled from 'styled-components'
import HeaderNavigation from './HeaderNavigation'
import { flexRowSpaceBetween, MaxWidth } from './../../styles'
import { widths, heights, spacing } from './../../styles/_Theme.json'

const HeaderWrapper = styled.header`
  width: 100vw;
  height: ${heights.header};
  border-bottom: 1px solid black;
`

const InnerHeader = styled.div`
  ${MaxWidth}
  ${flexRowSpaceBetween}
  height: 100%;
  margin: auto;
  align-items: center;
`

export default () =>
  <HeaderWrapper>
    <InnerHeader>
      <HeaderNavigation/>
    </InnerHeader>
  </HeaderWrapper>

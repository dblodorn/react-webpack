// CSS UTILITIES
import styled, { css } from 'styled-components'
import { widths, heights, spacing, fonts, colors } from './_Theme.json'

// FLEX LAYOUT
const flexColumn = css`
  display: flex;
  flex-direction: column;
`
const flexColumnCentered = css`
  ${flexColumn};
  align-items: center;
`

const flexRow = css`
  display: flex;
  flex-direction: row;
`

const flexRowWrap = css`
  ${flexRow};
  flex-wrap: wrap;
`

const flexRowCenteredVert = css`
  ${flexRow};
  align-items: center;
`

const flexRowSpaceBetween = css`
  ${flexRow};
  justify-content: space-between;
`

// LAYOUT UTILS
const maxWidth = css`
  width: 100%;
  max-width: ${widths.max_width};
  padding-left: ${spacing.single_pad};
  padding-right: ${spacing.single_pad};
`

const Section = styled.section`
  ${maxWidth};
  display: flex;
  padding-top: ${spacing.single_pad};
  padding-bottom: ${spacing.single_pad};
`

// STYLE UTILS
const greyBorder = css`
  border: 1px solid ${colors.lt_grey};
`

// How Can I pass props into this css (like a mixin)
const transitionAll = (time) => {
  return css`
    transition-property: all;
    transition-duration: ${time}ms;
    transition-timing-function: ease;
  `
}

// TYPOGRAPHY
const buttonStyle = css`
  ${greyBorder};
  ${transitionAll(250)};
  cursor: pointer;
  font-size: ${fonts.micro};
  padding: .5rem 1rem;
  display: flex;
  background-color: ${colors.med_grey};
  color: ${colors.white};
  &:hover {
    background-color: ${colors.off_white};
    color: ${colors.black};
  }
`

const H1 = styled.h1`
  color: ${fonts.header_color};
  font-size: ${fonts.lg};
  font-weight: 700;
`

const H2 = styled.h2`
  color: ${fonts.header_color};
  font-size: ${fonts.lg};
  font-weight: ${props => props.Weight};
  margin-bottom: ${props => props.MarginBottom ? spacing.single_pad : null};
`

const H3 = styled.h3`
  color: ${fonts.header_color};
  font-size: ${fonts.med};
  font-weight: ${props => props.Weight};
`

const H4 = styled.h4`
  color: ${fonts.header_color};
  font-size: ${fonts.sm};
  font-weight: ${props => props.Weight};
`

const P = styled.p`
  color: ${fonts.header_color};
  font-size: ${fonts.sm};
`

const DefaultLink = styled.a`
  text-decoration: none;
  color: ${fonts.link_color};
  font-size: ${props => props.Size};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
const ButtonLink = styled.a`
  ${buttonStyle};
`

const ClearButtonLink = styled.a`
  cursor: pointer;
  font-size: ${fonts.micro};
  padding: .75rem .5rem 0;
  display: flex;
`

// Form / Interactive
const buttonNormalize = css`
  border-radius: 0;
  cursor: pointer;
  -webkit-appearance: none;
  background: none;
  border: 0;
`

const Button = styled.button`
  ${buttonNormalize};
  ${buttonStyle};
`

const InputWrapper = styled.div`
  ${flexColumn};
  width: 100%;
  max-width: ${props => props.MaxWidth};
  margin-right: ${props => props.MarginRight};
  label {
    display: flex;
    margin-bottom: 1rem;
    font-size: ${fonts.micro};
    font-weight: 700;
  }
  input {
    padding: .25rem ${spacing.micro_pad};
  }
`

module.exports = {
  flexColumn,
  flexColumnCentered,
  flexRow,
  flexRowWrap,
  flexRowCenteredVert,
  flexRowSpaceBetween,
  greyBorder,
  buttonStyle,
  maxWidth,
  Section,
  DefaultLink,
  ButtonLink,
  ClearButtonLink,
  Button,
  H1,
  H2,
  H3,
  H4,
  P,
  InputWrapper
}

import { connect } from 'react-redux'
import { H1 } from './../../styles'

const Page = (props) => (
  <H1>Page:: {props.router.location.pathname} :: {props.reduxCounter}</H1>
)

const mapStateToProps = (state) => {
  return {
    router: state.router,
    reduxCounter: state.basicCounter
  }
}

export default connect(mapStateToProps)(Page)

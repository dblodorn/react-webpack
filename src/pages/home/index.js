import { connect } from 'react-redux'
import { basicIncrementTrigger } from './../../state/actions'
import { H1, Section } from './../../styles'
import { Header } from './../../components'

const Home = (props) => (
    <Section>
      <img src={'static/imgs/computer.gif'}/>
      <button onClick={() => props.basicIncrement(5)}>
        {props.reduxCounter}
      </button>
    </Section>
  )

const mapStateToProps = (state) => {
  return {
    reduxCounter: state.basicCounter
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    basicIncrement: (increment) => dispatch(basicIncrementTrigger(increment))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

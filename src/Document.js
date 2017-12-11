import { Fragment } from 'react'
import { connect } from 'react-redux'
import { injectGlobal } from 'styled-components'
import { H1 } from './styles'
import { Header } from './components'

// NORMALIZE CSS
injectGlobal`
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
  ol, ul {
    list-style: none;
  }
  html {
    font-size: 58%;
    -webkit-font-smoothing: antialiased;
  }
  @media screen and (min-width: 960px) {
    html {
      font-size: 62.5%;
    }
  }
  body {
    font-size: 16px;
    overflow-x: hidden;
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    font-family: arial;
  }
  * {
    box-sizing: border-box;
    outline: 0;
  }
`

const Document = (props) => (
  <Fragment>
    <Header/>
    <main id={props.router.location.pathname}>
      {props.children}
    </main>
  </Fragment>
)

const mapStateToProps = (state) => {
  return {
    router: state.router
  }
}

export default connect(mapStateToProps)(Document)
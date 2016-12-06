import React from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { userLogin } from './AuthActions'

export class LoginForm extends React.Component {
  constructor (props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = { error: false }
  }

  handleSubmit (e) {
    e.preventDefault()
    const email = this.refs.email.value
    const pass = this.refs.pass.value

    this.props.userLogin(email, pass)
  }

  render () {
    return (
      <form onSubmit={(e) => {this.handleSubmit(e)}}>
        <input type='text' ref='email' placeholder='email' defaultValue='asd@asd' />
        <br/>
        <input type='password' ref='pass' placeholder='password' /><br />
        <button type='submit'>login</button>
        {this.state.error && (
          <p>Bad login information</p>
        )}
      </form>
    )
  }
}

function mapStateToProps (state, props) {
  return {}
}

export default connect(
  mapStateToProps,
  {
    userLogin
  }
)(LoginForm)


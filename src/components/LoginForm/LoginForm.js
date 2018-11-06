import React, { Component, Fragment } from 'react'
import { reduxForm, Field } from 'redux-form'
import { connect } from 'react-redux'
import Input from '../Input/Input'
import Submit from '../Submit/Submit'
import colors from '../../styles/colors'
class LoginForm extends Component {
  render () {
    const { handleSubmit, submitting, login, valid } = this.props

    return (
      <Fragment>
        <Field
          name='username'
          component={Input}
          config={{
            placeholder: 'Usuario',
            placeholderTextColor: colors.primary,
            keyboardType: 'number-pad'
          }}
        />
        <Field
          name='password'
          component={Input}
          config={{
            placeholder: 'Contraseña',
            placeholderTextColor: colors.primary,
            secureTextEntry: true,
            maxLength: 4,
            keyboardType: 'number-pad'
          }}
        />
        <Submit
          text='Ingresar'
          onPress={() => handleSubmit(login.values)}
          disabled={valid === false || submitting}
        />
      </Fragment>
    )
  }
}

const loginForm = reduxForm({
  form: 'login',
  validate: values => {
    const errors = {}

    errors.username = !values.username
      ? 'Este campo es requerido'
      : isNaN(Number(values.username)) ? 'Debe ser un número' : undefined

    errors.password = !values.password
      ? 'Este campo es requerido'
      : isNaN(Number(values.password))
          ? 'Debe ser un número'
          : values.password.length < 4
              ? 'Debe tener al menos 4 caracteres'
              : undefined

    return errors
  }
})(LoginForm)

const mapStateToProps = state => ({
  login: state.form.login
})

export default connect(mapStateToProps, null)(loginForm)
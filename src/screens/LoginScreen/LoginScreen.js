import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Bubbles } from 'react-native-loader'
import { connect } from 'react-redux'
import LoginForm from '../../components/LoginForm/LoginForm'
import { onLogin } from '../../state/actionCreators'
import colors from '../../styles/colors'
import assets from '../../assets'

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login'
  }

  handleSubmit = values => {
    const { handleOnLogin } = this.props
    let json = JSON.parse(JSON.stringify(values))
    handleOnLogin(json)
  }

  render () {
    const { authentication } = this.props

    return (
      <View style={styles.container}>
        <Image source={assets.logoCtrl} style={styles.logo} />
        <LoginForm handleSubmit={this.handleSubmit} />
        <View style={styles.loader}>
          {authentication.loading &&
            <Bubbles size={10} color={colors.primary} />}
        </View>
        <View style={styles.loader}>
          {authentication.message &&
            <Text>Ocurrió un error al iniciar sesión</Text>}
        </View>
        <Image source={assets.bgLogin} style={styles.bgLogin} />
        <Image source={assets.logoGranada} style={styles.logoGranada} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 25
  },
  loader: {
    marginTop: 25
  },
  container: {
    flex: 1,
    backgroundColor: colors.backgroundMain,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  bgLogin: {
    position: 'absolute',
    bottom: -100,
    zIndex: -1
  },
  logoGranada: {
    position: 'absolute',
    bottom: 20
  }
})

const mapStateToProps = ({ authentication }) => ({ authentication })

const mapDispatchToProps = dispatch => ({
  handleOnLogin (values) {
    dispatch(onLogin(values))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
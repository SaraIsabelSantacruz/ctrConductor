import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View } from 'react-native'
import colors from '../../styles/colors'
import { Bubbles } from 'react-native-loader'

class LoadingScreen extends Component {
  componentDidMount () {
    const { navigation, authentication } = this.props
    console.log('hudheuhue')
    if (authentication.loggedIn) {
      console.log('logged')
      navigation.navigate('Travel')
    } else {
      console.log('logged')
      navigation.navigate('Login')
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <Bubbles size={20} color={colors.primary} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = ({ authentication }) => ({ authentication })

export default connect(mapStateToProps, null)(LoadingScreen)

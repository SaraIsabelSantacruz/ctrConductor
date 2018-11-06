import React, { Component } from 'react'
import { View, Button } from 'react-native'

class Header extends Component {
  componentDidMount () {}

  render () {
    return (
      <View>
        <Button
          title='Go to Travel'
          onPress={() => this.props.navigation.navigate('Travel')}
        />
        <Button
          title='Go to Login'
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    )
  }
}

export default Header

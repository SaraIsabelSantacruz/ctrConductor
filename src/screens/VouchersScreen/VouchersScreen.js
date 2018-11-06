import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

class VouchersScreen extends Component {
  static navigationOptions = {
    title: 'Vales'.toUpperCase()
  }

  render () {
    return (
      <Text>Hi</Text>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center'
  }
})


export default VouchersScreen

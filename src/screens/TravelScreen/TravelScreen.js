import React, { Component } from 'react'
import ModalReporte from '../../components/Travel/reporteModal'
import { ScrollView, View, Text } from 'react-native'
import ModalLLamada from '../../components/Travel/llamar'
import Reporte from '../../components/Travel/reporte'
import { withNetworkConnectivity } from 'react-native-offline'


class TravelScreen extends Component {

  static navigationOptions = {
    title: 'Viaje'.toUpperCase()
  }

  render () {
    const { isConnected } = this.props
    return (
      <ScrollView>
        <View style={{flexDirection:'row', justifyContent:'space-around', marginTop: 20}}>
          <ModalReporte/>
          <ModalLLamada/>
        </View>
        <View>
          <Reporte/>
        </View>
        <Text> {isConnected ? 'Look ma, connected' : 'Offline :(' } </Text>
      </ScrollView>
    )
  }
}

export default  withNetworkConnectivity()(TravelScreen)

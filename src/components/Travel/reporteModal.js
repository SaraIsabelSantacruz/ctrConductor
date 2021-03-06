import React, { Component } from 'react'
import ModalLayout from '../Modal/modal'
import ReporteModal from '../Modal/reporteModal'
import Button from '../Submit/button'

import {
  View,
  Text,
  Image
} from 'react-native'

class Reporte extends Component {
  
  state = {
    modalVisible: false
  }

  onPress = (visible) => {
    this.setState({
      modalVisible: visible
    })
  }

  render(){
    return(
      <View>
        <Button
          onPress = {this.onPress}
        >
          <Image
            style={{width: 20, height: 20, margin: 5}}
            source={require('./../../assets/iconos/documento.png')}
          />
          <Text style={{color:'white', fontSize:20, width: 90}}> Reporte </Text>
        </Button>
        <ModalLayout 
          modalVisible = {this.state.modalVisible}
          handleOnPress = {this.onPress}
        > 
          <ReporteModal 
            modalVisible = {this.state.modalVisible}
            handleOnPress = {this.onPress}
          />
        </ModalLayout>
      </View>
    )
  }
}



export default Reporte

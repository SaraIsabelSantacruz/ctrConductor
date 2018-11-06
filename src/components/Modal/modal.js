import React from 'react'
import {Modal, Image, View, StyleSheet, TouchableHighlight, TouchableWithoutFeedback} from 'react-native'

function ModalLayout(props){
  const shadowStyle = {
    shadowColor: '#00000061',
    shadowOpacity: 1,
    shadowRadius: 12
  }

  return(
    <View 
      pointerEvents = 'auto'
    >
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose ={()=>{props.handleOnPress(!props.modalVisible)}}
      >
        <TouchableWithoutFeedback
          onPress={()=>{props.handleOnPress(!props.modalVisible)}}
          style={styles.modal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.contentModalContainer}>
              <TouchableHighlight 
                onPress={()=>{props.handleOnPress(!props.modalVisible)}}
                style={[styles.buttonClose, shadowStyle]}
              >
                <View style={{width:'100%'}}>
                  <Image
                  style={{width:'100%', height:'100%', overflow:'visible'}}
                  source={require('./../../assets/iconos/cancel-circle.png')}
                  />
                </View>
              </TouchableHighlight>
              {props.children}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalContainer:{
    height: '100%',
    backgroundColor: '#00000085'
  },
  modal:{
    position: 'relative',
    top: 0,
    width: '100%',
    height: '100%',
  },
  contentModalContainer:{
    width: '90%',
    height: 380,
    top: '20%',
    backgroundColor: 'white',
    borderRadius: 5,
    alignSelf: 'center'
  },
  buttonClose:{
    position:'absolute',
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 20,
    right: -10,
    top: -10,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  }
})

export default ModalLayout

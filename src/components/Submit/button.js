import React from 'react'
import {
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

function Button (props){
  return(
    <View style={styles.buttonModalContainer}>
      <TouchableHighlight
        onPress={() => { props.onPress(true) }}
        style={styles.buttonModal}
      >
        <View style={styles.buttonContainer}>
          {props.children}
        </View>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonModalContainer:{
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonModal:{
    paddingVertical: 9,
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: 'darkorange',
    elevation: 10,
    position: 'relative'
  },
  buttonText:{
    color: 'white',
    fontSize: 20
  },
  buttonContainer:{
    flexDirection: 'row',
    justifyContent:'space-between',
    flexWrap: 'wrap',
    alignItems: 'center'
  }
})

export default Button
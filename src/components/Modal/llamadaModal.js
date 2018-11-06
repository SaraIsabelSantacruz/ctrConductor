import React, { Component } from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'

class LlamadaModal extends Component {

  render(){
    return(
      <View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>LLAMAR</Text>
          <Image></Image>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    margin: 10
  },
  title:{
    fontWeight: 'bold',
    color: 'darkorange',
    fontSize: 20
  }
})
export default LlamadaModal
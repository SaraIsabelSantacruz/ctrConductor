import React, { Component } from 'react'
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  Image
} from 'react-native'
import CardLayout from '../Cards/card-layout'
import metrics from '../../styles/metrics'
import colors from '../../styles/colors'

class PlanViaje extends Component {
  state = {
    download: false
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.containerItem}>
        <Text style={styles.titleList}>{item.nombre}</Text>
        <Text style={styles.titleList}>{item.tiempo}</Text>
      </View>
    )
  }

  render () {
    const list = [
      {
        nombre: 'El Hatillo',
        tiempo: 40,
        key: '1'
      },
      {
        nombre: 'Yarumal',
        tiempo: 180,
        key: '2'
      },
      {
        nombre: 'Planeta Rica',
        tiempo: 180,
        key: '3'
      },
      {
        nombre: 'Monteria',
        tiempo: 120,
        key: '4'
      }
    ]
    return (
      <CardLayout>
        <Text style={styles.title}>Plan de Viaje</Text>
        <View style={styles.subtitleContainer}>
          <Text style={styles.subtitle}>Puesto de Control</Text>
          <Text>min</Text>
        </View>
        <FlatList data={list} renderItem={this.renderItem} />
        <TouchableHighlight
          style={styles.buttonContainer}
          onPress={this.onPress}
          underlayColor='orangered'
        >
          {this.state.download
            ? <Text style={styles.button}> Descargando ... </Text>
            : <Text style={styles.button}> Descarga el Plan de Viaje </Text>}
        </TouchableHighlight>
      </CardLayout>
    )
  }
}

const styles = StyleSheet.create({
  containerItem: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    color: 'orange',
    width: metrics.totalWidth,
    paddingBottom: 5,
    fontFamily: 'FilsonSoft-Bold'
  },
  subtitle: {
    fontFamily: 'FilsonSoftMedium'
  },
  subtitleContainer: {
    borderTopWidth: 2,
    borderTopColor: colors.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10
  },
  titleList: {
    fontSize: 20,
    color: colors.fontHigh,
    fontFamily: 'FilsonSoft-Bold'
  },
  buttonContainer: {
    backgroundColor: 'orange',
    padding: 10,
    marginTop: 15,
    borderRadius: 5,
    alignSelf: 'center'
  },
  button: {
    color: 'white',
    fontFamily: 'FilsonSoft-Bold'
  }
})

export default PlanViaje

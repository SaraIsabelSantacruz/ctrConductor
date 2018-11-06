import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import CardLayout from '../Cards/card-layout'
import colors from '../../styles/colors'
import metrics from '../../styles/metrics'
import assets from '../../assets/index'

function InfoViaje () {
  return (
    <CardLayout>
      <Image source={assets.sample} style={styles.code} />
      <View style={styles.infoContainer}>
        <View style={{ width: '30%' }}>
          <Text style={styles.titleInfo}>Nº Manifiesto</Text>
          <Text style={styles.contentText}>8956536623</Text>
        </View>
        <View style={{ width: '60%' }}>
          <Text style={styles.titleInfo}>Siguiente Puesto de Control</Text>
          <Text style={styles.contentText}>EL Hatillo</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text style={styles.titleInfo}>Ruta</Text>
          <Text style={styles.contentText}>Med-Car Vía al mar</Text>
        </View>
      </View>
    </CardLayout>
  )
}

const styles = StyleSheet.create({
  code: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.lightGray
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: metrics.baseMargin
  },
  titleInfo: {
    fontSize: 11,
    fontFamily: 'FilsonSoft-Bold',
    color: colors.fontSmall
  },
  contentText: {
    fontSize: 20,
    color: colors.fontHigh,
    fontFamily: 'FilsonSoftRegular'
  }
})

export default InfoViaje

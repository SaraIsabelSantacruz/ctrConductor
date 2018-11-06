import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import CardLayout from '../Cards/card-layout'
import colors from '../../styles/colors'
import metrics from '../../styles/metrics'
import assets from '../../assets/index'

function InfoVehiculo () {
  return (
    <CardLayout>
      <Image source={assets.camionPrueba} style={styles.imgCamion} />
      <View style={styles.infoContainer}>
        <View style={styles.infoText}>
          <Text style={styles.titleInfo}>Placa</Text>
          <Text style={styles.contentText}>RTS154</Text>
        </View>
        <View style={styles.infoText}>
          <Text style={styles.titleInfo}>Tipo de Vehículo</Text>
          <Text style={styles.contentText}>Tracto Camion</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoText}>
          <Text style={styles.titleInfo}>Color</Text>
          <Text style={styles.contentText}>Rojo</Text>
        </View>
        <View style={styles.infoText}>
          <Text style={styles.titleInfo}>Marca</Text>
          <Text style={styles.contentText}>Herdrickson</Text>
        </View>
      </View>
      <View>
        <Text style={styles.propietario}>Propietario</Text>
        <View style={styles.infoPropietario}>
          <Text style={styles.contentText}>Jose Obdulio Alzate Cuhéyo</Text>
          <Text style={styles.contentText}>C.C 000 000 0000</Text>
        </View>
      </View>
    </CardLayout>
  )
}

const styles = StyleSheet.create({
  imgCamion: {
    resizeMode: 'cover',
    width: 300,
    height: 200,
    alignSelf: 'center',
    borderRadius: 5
  },
  infoContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: metrics.baseMargin
  },
  infoText: {
    width: '50%'
  },
  titleInfo: {
    fontSize: 11,
    color: colors.fontSmall,
    fontFamily: 'FilsonSoft-Bold'
  },
  contentText: {
    fontSize: 20,
    color: colors.fontHigh,
    fontFamily: 'FilsonSoftRegular'
  },
  propietario: {
    fontSize: 18,
    fontFamily: 'FilsonSoft-Bold',
    color: 'orange',
    paddingTop: metrics.basePadding,
    width: metrics.totalWidth,
    paddingBottom: 5
  },
  infoPropietario: {
    borderTopWidth: 2,
    borderTopColor: colors.border,
    paddingVertical: 10,
    alignItems: 'center'
  }
})

export default InfoVehiculo

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import CardLayout from '../Cards/card-layout'
import colors from '../../styles/colors'
import assets from '../../assets/index'

function InfoConductor () {
  return (
    <View style={styles.userContainer}>
      <Image source={assets.conductorPrueba} style={styles.userImage} />
      <View style={styles.cardUser}>
        <CardLayout>
          <View style={styles.containerInfo}>
            <Text style={styles.userName}>Jose Obdulio Alzate Cuhéyo</Text>
            <Text style={styles.userDocument}>C.C 000 000 0000</Text>
          </View>
        </CardLayout>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  userContainer: {
    position: 'relative',
    height: 300
  },
  userImage: {
    alignSelf: 'center',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 10,
    borderColor: colors.white,
    zIndex: 1
  },
  cardUser: {
    position: 'absolute',
    top: '30%',
    width: '100%'
  },
  containerInfo: {
    paddingTop: 50
  },
  userName: {
    fontSize: 20,
    width: '100%',
    textAlign: 'center',
    paddingTop: 40,
    fontWeight: '400',
    color: colors.fontHigh,
    fontFamily: 'FilsonSoftRegular'
  },
  userDocument: {
    textAlign: 'center',
    fontWeight: '400',
    color: colors.fontHigh,
    fontSize: 18,
    fontFamily: 'FilsonSoftRegular'
  }
})

export default InfoConductor

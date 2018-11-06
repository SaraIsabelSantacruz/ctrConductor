import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from '../../styles/colors'
import metrics from '../../styles/metrics'

function CardLayout (props) {
  return (
    <View style={styles.cards}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
  cards: {
    margin: metrics.baseMargin,
    padding: metrics.basePadding,
    borderRadius: 5,
    backgroundColor: colors.white
  }
})

export default CardLayout

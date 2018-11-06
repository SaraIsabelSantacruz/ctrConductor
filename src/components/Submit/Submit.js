import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colors from '../../styles/colors'

const Submit = ({ onPress, text, disabled }) => {
  return (
    <TouchableOpacity
      style={styles.actionButton}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={styles.actionButtonText}> {text} </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: colors.secondary,
    borderRadius: 50,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 75
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: 'FilsonSoftBlack'
  }
})

export default Submit

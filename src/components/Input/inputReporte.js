import React from 'react'
import { StyleSheet, View, TextInput } from 'react-native'
import colors from '../../styles/colors'

const InputReporte = ({ input: { value, onChange }, meta }) => (
  <View style={styles.inputContainer}>
    <TextInput
      multiline = {true}
      onChangeText = {value => onChange(value)}
      value={value}
      style={styles.input}
    />
  </View> 
)

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 12,
    paddingVertical: 2,
    margin: 0
  },
  input: {
    fontSize: 16,
    width: '100%',
    height: 55,
    paddingVertical: 0,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderColor: 'darkgray',
    borderRadius: 5,
    fontFamily: 'FilsonSoftMedium'
  }
})

export default InputReporte
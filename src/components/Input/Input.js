import React from 'react'
import { StyleSheet, View, TextInput, Text } from 'react-native'
import colors from '../../styles/colors'

const Input = ({
  input: { value, onChange, onBlur, onFocus },
  config,
  meta
}) => (
  <View style={styles.inputContainer}>
    <TextInput
      {...config}
      onChangeText={value => onChange(value)}
      value={value}
      onBlur={onBlur}
      onFocus={onFocus}
      underlineColorAndroid='transparent'
      style={styles.input}
    />
    {meta.active && meta.dirty && meta.error && <Text> {meta.error} </Text>}
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
    fontSize: 17,
    marginTop: 20,
    marginBottom: 5,
    width: 230,
    height: 35,
    paddingVertical: 0,
    paddingHorizontal: 5,
    color: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    fontFamily: 'FilsonSoftRegular'
  }
})

export default Input
import React, { Component } from 'react'
import { View, Text, Image, StyleSheet, TouchableHighlight} from 'react-native'
import ReporteForm from '../reporteForm/modalReporteForm'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class ReporteModal extends Component {

  handleOnPress = () => {
    const { dispatch } = this.props
    console.log(dispatch)
    dispatch(NavigationActions.navigate({routeName: 'Camera'}))
    this.props.handleOnPress(!this.props.modalVisible)
  }

  render(){
    return(
      <View>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>REPORTE DE EVENTOS</Text>
            <TouchableHighlight
              onPress={this.handleOnPress}

            >
              <Image
                style={{width: 45, height: 45, }}
                source={require('./../../assets/iconos/camera-icon.png')} 
              />
            </TouchableHighlight>
        </View>
        <View style={styles.formContainer}>
          <ReporteForm/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  titleContainer: {
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderBottomColor: 'gray',
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title:{
    fontWeight: 'bold',
    color: 'darkorange',
    fontSize: 20
  },
  formContainer:{
    padding: 20
  }
})

const mapStateToProps = ({dispatch}) => ({dispatch})

export default connect(mapStateToProps, null)(ReporteModal)
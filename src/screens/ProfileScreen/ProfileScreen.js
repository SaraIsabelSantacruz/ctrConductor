import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import colors from '../../styles/colors'
import InfoViaje from '../../components/Profile/info-viaje'
import InfoVehiculo from '../../components/Profile/info-vehiculo'
import InfoConductor from '../../components/Profile/info-conductor'
import PlanViaje from '../../components/Profile/plan-viaje'
import Submit from '../../components/Submit/Submit'
import { logout } from '../../state/actionCreators'
import { connect } from 'react-redux'

class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Perfil'.toUpperCase()
  }

  handleOnLogout = () => {
    const { handleLogout } = this.props
    handleLogout()
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <InfoViaje />
        <InfoVehiculo />
        <InfoConductor />
        <PlanViaje />
        <Submit text='Cerrar sesión' onPress={this.handleOnLogout} />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightGray
  }
})

const mapDispatchToProps = dispatch => ({
  handleLogout () {
    dispatch(logout())
  }
})

export default connect(null, mapDispatchToProps)(ProfileScreen)

import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Button from '../Submit/button'
import DatePicker from '../DatePicker/datePicker'
import { Text, View, StyleSheet } from 'react-native'
import Input from '../Input/inputReporte'

class ReporteForm extends Component {

  handleSubmit = (values) => {
    const { handleReport } = this.props
    let json = JSON.parse(JSON.stringify(values))
    handleReport(json)
  }

  render(){
    const { report } = this.props
    return(
      <Fragment>
        <DatePicker date={"2016-05-15"}/>
        <Text style={{marginTop:20}}>Evento</Text>
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <View style={{width:'37%'}}>
            <Text style={{fontSize:17}}>Ultimo Evento</Text>
          </View>
          <Button>
            <Text style={styles.textButton}>Agregar Eventos</Text>
          </Button>
        </View>
        <View style={{marginTop: 20}}>
          <Text>Observaciones</Text>
          <Field
            name='report'
            component={Input}
          />
          <Button 
            onPress = {() => handleSubmit(report.values)}
          >
            <Text style={styles.textButton}>Reportar</Text>
          </Button>
        </View>
      </Fragment>
    )
  }
}

const styles = StyleSheet.create({
  textButton:{
    fontSize:15, 
    color:'white', 
    fontWeight:'600',
  }
})

const reporteForm = reduxForm({ form: 'report' })(ReporteForm)

mapStateToProps = state => ({
  registration: state.registration,
  report: state.form.report
})

mapDispatchToProps = dispatch => ({
  handleReport(value){
    dispatch(report(value))
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(reporteForm)
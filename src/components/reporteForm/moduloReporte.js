import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import Button from '../Submit/button'
import { Text, View, StyleSheet } from 'react-native'
import DatePicker from 'react-native-datepicker'

class ModuloReporte extends Component {
  
  state = {
    date:'',
    formDate:{}
  }

  handleSubmit = (values) => {
    const { handleReport } = this.props
    // let json = JSON.parse(JSON.stringify(values))
    handleReport(this.state.form)
  }

  render(){
    const { report } = this.props
    console.log(this.state.form)
    return(
      <Fragment>
        <View style={{marginTop: 20}}>
        <View>
          <DatePicker
            style={{width: 180}}
            date={this.state.date}
            mode="date"
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            iconSource = {require('../../assets/iconos/calendar.png')}
            onDateChange={ev => {
              this.setState({
                date: ev,
                form: { ...this.state.formDate, date: ev }
              })
            }}
            customStyles={{
              dateIcon: {
                width:15,
                height:15,
                position: 'absolute',
                right: 0,
                marginRight: 15
                },
                dateInput: {
                  height: 35,
                  borderRadius: 5
                },
                dateText:{
                  position: 'absolute',
                  left:0,
                  marginLeft: 15,
                  fontSize: 18,
                  color: 'gray'
                }
            }}
          />
          <DatePicker
              style={{width: 100}}
              date={this.state.time}
              mode="time"
              format="HH:mm"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              minuteInterval={10}
              iconSource = {require('../../assets/iconos/clock.png')}
              onDateChange={(time) => {this.setState({time: time});}}
              customStyles={{
                dateIcon: {
                width:15,
                height:15,
                position: 'absolute',
                right: 0,
                marginRight: 15
                },
                dateInput: {
                  height: 35,
                  borderRadius: 5
                },
                dateText:{
                  position: 'absolute',
                  left:0,
                  marginLeft: 15,
                  fontSize: 18,
                  color: 'gray'
                }
              }}
            />
        </View>
          <Button onPress = {() => handleSubmit(report.values)}>
            <Text>Reportar</Text>
          </Button>
        </View>
      </Fragment>
    )
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ModuloReporte)
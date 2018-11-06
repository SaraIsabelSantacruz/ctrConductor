import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
import { View, StyleSheet} from 'react-native'
import colors from '../../styles/colors'

export default class MyDatePicker extends Component {
  
  state = {date:''}

  render(){
    return (
      <View style={styles.datePickerContainer}>
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
          onDateChange={(date) => {this.setState({date: date})}}
          customStyles={{
            dateIcon: {
              width:23,
              height:23,
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
            width: 23,
            height: 23,
            position: 'absolute',
            right: 0,
            marginRight: 7
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
    )
  }
}

const styles = StyleSheet.create({
  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})
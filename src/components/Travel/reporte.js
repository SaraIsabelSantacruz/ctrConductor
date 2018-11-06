import React, { Component } from 'react'
import {
  View,
  Text,
  ScrollView,
  FlatList,
  TouchableWithoutFeedback
} from 'react-native'
import CardLayout from '../Cards/card-layout'
import ModuloReporte from '../reporteForm/moduloReporte'

class Reporte extends Component {

  state = {
    cont: 0,
    disable: false,
  }

  onPress = () => {
    
  }

  renderItem = ({item}) => {
    console.log(item)
    return(
      <View>
        <TouchableWithoutFeedback
        disable = {this.state.disable}
        onPress = {this.onPress()}
        >
          <CardLayout>
            <View>
              <Text style = {{marginHorizontal: 10}}>{item.title}</Text>
              <Text style = {{marginHorizontal: 10}}>fecha y hora cita</Text>
              <View style = {{flexDirection:'row'}}>
                <Text style = {{marginHorizontal: 10}}>{item.fechaCita}</Text>
                <Text style = {{marginHorizontal: 10}}>{item.horaCita}</Text>
              </View>
            </View>
          </CardLayout>
        </TouchableWithoutFeedback>
      </View>
    )
  }

  render(){
    const list = [
      {
        title: 'Nombre Empresa 1',
        fechaCita: '10/09/2018',
        horaCita: '10:00',
        reportes: [
          {
            id: '1',
            title: 'Llegada Cargue',
            fechaLlegada: '',
            horaLlegada: '',
          },
          {
            id: '2',
            title: 'Cargue Terminado',
            fechaFinalizacion: '',
            horaFinalizacion: '',
          },
          {
            id: '3',
            title: 'Reporte Peso',
            fechaFinalizacion: '',
            horaFinalizacion: '',
          },
          {
            id: '4',
            title: 'Salida Cargue',
            fechaFinalizacion: '',
            horaFinalizacion: '',
          },
        ],
        key: '1'
      },
      {
        title: 'Nombre Empresa 2',
        fechaCita: '21/09/2018',
        horaCita: '11:00',
        key: '2'
      },
      {
        title: 'Nombre Empresa 3',
        fechaCita: '01/10/2018',
        horaCita: '13:00',
        key: '3'
      },
      {
        title: 'Nombre Empresa 4',
        fechaCita: '01/10/2018',
        horaCita: '13:00',
        key: '3'
      }
    ]
      
    
    return(
      <ScrollView>
        <View style = {{bottom: 0}}>
          <FlatList
            data = {list}
            renderItem = {this.renderItem}
          />
        </View>
      </ScrollView>
    )
  }
}

export default Reporte
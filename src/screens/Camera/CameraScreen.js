import React, { Component } from 'react'
import {
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  CameraRoll,
  Button
} from 'react-native'
// import { RNCamera } from 'react-native-camera'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class Camera extends Component {

  // takePicture = async function() {
  //   if (this.camera) {
  //     const options = { quality: 0.5, base64: true };
  //     const data = await this.camera.takePictureAsync(options)
  //     CameraRoll.saveToCameraRoll(data.uri)
  //   }
  // }

  render() {
    const { dispatch } = this.props
    return (
      <View style={styles.container}>
        {/* <RNCamera
          ref={ref => { this.camera = ref }}
          style = { styles.preview }
          type = { RNCamera.Constants.Type.back }
          flashMode = { RNCamera.Constants.FlashMode.off }
          permissionDialogTitle = { 'Permission to use camera' }
          permissionDialogMessage = { 'We need your permission to use your camera phone' }
        /> */}
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
          <TouchableOpacity
              onPress={this.takePicture.bind(this)}
              style = {styles.capture}
          >
              <Text style={{fontSize: 14}}> SNAP </Text>
          </TouchableOpacity>
          <Button
            onPress={() => dispatch(NavigationActions.navigate({routeName: 'Travel'}))}
            title="Dismiss"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
})

const mapStateToProps = ({dispatch}) => ({dispatch})

export default connect(mapStateToProps, null)(Camera)
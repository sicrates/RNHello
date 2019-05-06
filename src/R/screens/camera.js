import React, { Component } from 'react'
import { ImgBtn } from 'components';
import R from 'R'
import { RNCamera } from 'react-native-camera'
import { View, PermissionsAndroid} from 'react-native'
import CameraRoll from "@react-native-community/cameraroll"

export default class camera extends Component{

    constructor(props) {
        super(props);
        this.requestPermission = this.requestPermission.bind(this)
    }

    componentWillMount = () => {
        this.requestPermission().then(
            () => {
                console.log('request permission')
            }
        )
    }

    requestPermission = async () => {
        try {
          const granted = await PermissionsAndroid.requestMultiple(
            [ PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE, ],
          )
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log('You can use the camera');
          } else {
            console.log('Camera permission denied');
          }
        } catch (err) {
          console.warn(err);
        }
    }

    takePhoto = async () => {
        if (this.camera) {
            const options = { quality: 1 }
            const data = await this.camera.takePictureAsync(options)
            CameraRoll.saveToCameraRoll( data.uri, 'photo' )
        }
    }

    render() {

        return (

            <View style={R.styles.views.camera}>
                <RNCamera
                    ref = {ref => { this.camera = ref }}
                    style = {R.styles.views.preview}
                    type = { RNCamera.Constants.Type.back }
                    flashMode = { RNCamera.Constants.FlashMode.auto }
                />
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <ImgBtn height={80} width={80} source={R.images.takePhoto} onPress={this.takePhoto.bind(this)} style={{ margin: 20 }} />
                </View>
            </View>
            
        )

    }
    
}
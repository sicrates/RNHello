import React from 'react'
import { ImageBackground, TextInput, } from 'react-native'
import R from 'R'

export class BlueInput extends React.Component {

    constructor(props) {
        super(props);
    }

    focus() {
      this.refs.input.focus()
    }

    render() {
        return (
          <ImageBackground {...this.props} source={R.images.blueInput} resizeMode= 'stretch' style={[ R.styles.images.center, { height: this.props.height, width: this.props.width, }]}>
            <TextInput {...this.props} ref='input' style={[ R.styles.texts.input, { height: this.props.height, width: this.props.width, }]}/>
          </ImageBackground>
        );
    }

}
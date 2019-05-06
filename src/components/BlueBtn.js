import React from 'react'
import { TouchableOpacity, ImageBackground, Text } from 'react-native'
import R from 'R'

export class BlueBtn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity {...this.props} activeOpacity={0.5} style={[ R.styles.buttons.center, { height: this.props.height, width: this.props.width, }]}>
                <ImageBackground {...this.props} source={R.images.blueBtn} style={[ R.styles.images.center, { height: this.props.height, width: this.props.width, }]}>
                    <Text {...this.props} style={R.styles.texts.default}>{this.props.text}</Text>
                </ImageBackground>
            </TouchableOpacity>
        );
    }

}
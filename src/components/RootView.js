import React from 'react'
import { View, ImageBackground } from 'react-native'
import R from 'R'

export class RootView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View {...this.props} style={R.styles.views.root}>
                <ImageBackground {...this.props} source={this.props.source} style={R.styles.images.root} resizeMode= 'stretch'>
                    {this.props.children}
                </ImageBackground>
            </View>
        );
    }

}
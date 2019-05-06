import React from 'react'
import { TouchableOpacity, Image,  } from 'react-native'
import R from 'R'

export class ImgBtn extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity {...this.props} activeOpacity={0.5} style={[ this.props.style, R.styles.buttons.center, { height: this.props.height, width: this.props.width, }]}>
                <Image {...this.props} resizeMode= 'stretch' style={[{ height: this.props.height, width: this.props.width,  }]}></Image>
            </TouchableOpacity>
        )
    }

}
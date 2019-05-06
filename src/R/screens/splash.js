import React, { Component } from 'react'
import { RootView } from 'components';
import R from 'R'

export default class splash extends Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setTimeout( () => this.props.navigation.navigate('login'), 5000 )
    }

    render() {

        return (

            <RootView source={R.strings.t('appStart')} />
            
        )

    }
}
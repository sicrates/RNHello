import React, { Component } from 'react'
import { View, Switch } from 'react-native'
import R from 'R'
import { BlueInput, BlueBtn, RootView } from 'components'
import network from 'api/network'
import i18n from 'i18n-js'

export default class login extends Component{

    state = {
        username: '',
        password: '',
        isEn: true,
    }

    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.changeLang = this.changeLang.bind(this)
        this.camera = this.camera.bind(this)
    }

    login = () => {

        network._mlogin(this.state.username, this.state.password).then(
            json => {
                if (json.status == 'Success') {
                    this.props.navigation.navigate('list')
                }
            }
        )

    }

    changeLang = (isEn) => {

        this.setState({ isEn: isEn })
        isEn?i18n.locale = 'en':i18n.locale = 'zh'

    }

    camera = () => {

        this.props.navigation.navigate('camera')

    }

    render() {

        return (
            <RootView source={R.images.startIntro}>
                <View style={[R.styles.views.center]}>
                    <BlueInput height= {40} width= {220} placeholder={R.strings.t('name')} returnKeyType = { 'next' } onSubmitEditing={() => { this.refs.password.focus() }} blurOnSubmit={false} onChangeText={(username) => this.setState({username})} />
                    <View style={R.styles.views.margin} />
                    <BlueInput ref='password' height= {40} width= {220} placeholder={R.strings.t('password')} secureTextEntry={true} onChangeText={(password) => this.setState({password})} />
                    <View style={R.styles.views.margin} />
                    <BlueBtn height={40} width={220} text={R.strings.t('login')} onPress={this.login} />
                    <View style={R.styles.views.margin} />
                    <Switch value={this.state.isEn} onValueChange={this.changeLang} />
                    <View style={R.styles.views.margin} />
                    <View style={R.styles.views.margin} />
                    <BlueBtn height={40} width={220} text={R.strings.t('camera')} onPress={this.camera} />
                </View>
            </RootView>
        )

    }
}
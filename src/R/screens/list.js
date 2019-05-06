import React, { Component } from 'react'
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native'
import R from 'R'
import { RootView } from 'components'
import network from 'api/network'

export default class list extends Component{

    state = {
        data: [],
        isRefreshing: false,
    }

    constructor(props) {
        super(props)
    }

    componentWillMount() {
        network.cload().then(
            json => {
                if (json.status == 'Success') {
                    this.setState({ data: json.content })
                }
            }
        )
    }

    _refresh = () => {
        this.setState({ isFetching: true }, () => {
            network.cload().then(
                json => {
                    if (json.status == 'Success') {
                        this.setState({ data: json.content })
                    }
                }
            )
        });
     }

    _renderItem = ({ item }) => {

        return (
            <TouchableOpacity style={ R.styles.views.itemRoot }>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <Image style={{ flex: 1 }} source={{ uri: item.imagelist[1] }} />
                    <View style={{ flex: 3, marginTop: 10, marginBottom: 10, marginLeft: 10, marginRight: 10, }}>
                        <Text style={ R.styles.texts.default }>{item.title}</Text>
                        <Text style={ R.styles.texts.default }>{item.subtitle}</Text>
                        <Text style={ R.styles.texts.default }>{item.area}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )

    }

    render() {

        return (
            <RootView>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start', marginTop: 50, marginBottom: 50, marginLeft: 20, marginRight: 20 }}>
                    <FlatList style={{ width: '100%'}}
                        data={this.state.data}
                        renderItem={this._renderItem}
                        onRefresh={() => this._refresh()}
                        ItemSeparatorComponent={ () => (<View style={ R.styles.views.listMargin } />)}
                        automaticallyAdjustContentInsets={false}
                        refreshing={this.state.isRefreshing}
                    />
                </View>
            </RootView>
        )

    }
}
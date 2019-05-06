import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const images = StyleSheet.create({
    root: { flex: 1, width: width, height: height, },
    center: { alignItems: 'center',justifyContent: 'center', },
})

export default images
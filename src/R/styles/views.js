import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const views = StyleSheet.create({
    root: { flex: 1, backgroundColor: '#fff' },
    center: { flex: 1, alignItems: 'center', justifyContent: 'center', },
    //margin: { backgroundColor: '#00000000', height: 5, borderWidth: 1, borderColor: '#000' },
    margin: { backgroundColor: '#00000000', height: 5, borderWidth: 1, borderColor: '#000' },
    listMargin: { height: 10, },
    itemRoot: { flex: 1, backgroundColor: '#ddd', },
    camera: { flex: 1, flexDirection: 'column', backgroundColor: 'black', },
    preview: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', },
});

export default views;
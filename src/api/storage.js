import AsyncStorage from '@react-native-community/async-storage'

class storage {

    _storeData = async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value))
        } catch (e) {
            console.error(e)
        }
    }

    _getData = async (key) => {
        try {
            const value = await AsyncStorage.getItem(key)

            if (value !== null) {
                return JSON.parse(value)
            }
            else return {}
            
        } catch(e) {
            console.error(e)
        }
    }

}

export default new storage()
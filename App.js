import R from 'R'
import i18n from 'i18n-js'
import memoize from 'lodash.memoize'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import en from 'R/strings/en'
import zh from 'R/strings/zh'

const lang = { 
    en: en,
    zh: zh,
}

import splash from 'R/screens/splash'
import login from 'R/screens/login'
import list from 'R/screens/list'
import camera from 'R/screens/camera'

const screens = {
    splash: {screen: splash},
    login: {screen: login},
    list: { screen: list },
    camera: { screen: camera },
}

const translate = memoize(
    (key, config) => i18n.t(key, config),
    (key, config) => (config ? key + JSON.stringify(config) : key),
)

const setI18nConfig = () => {

    translate.cache.clear()
  
    i18n.translations = lang
    i18n.locale = i18n.currentLocale()

}

setI18nConfig()

const AppNavigator = createStackNavigator(
    screens,
    { headerMode: 'none' },
)
  
export default createAppContainer(AppNavigator)
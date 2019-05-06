import request from 'api/request'
import storage from 'api/storage'

class network {

    _mlogin = async (username, password) => {
        try {
            
            let formdata = new FormData()
            formdata.append('actionflag', 'mlogin')
            formdata.append('username', username)
            formdata.append('password', password)

            console.log(formdata)

            let json = await request.post(formdata);

            console.log(json)

            if ( json.status == 'Success' ) {
                await storage._storeData( '_mlogin', json )
            }

            return json

        } catch (e) { console.error(e) }
    }

    cload = async () => {
        try {
            
            let formdata = new FormData()
            formdata.append('actionflag', 'cload')

            let mlogin = await storage._getData( '_mlogin' )
            
            formdata.append( 'session', mlogin.session )

            console.log(formdata)

            let json = await request.get(formdata);

            console.log(json)

            return json

        } catch (e) { console.error(e) }
    }

}

export default new network()
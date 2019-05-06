const url = 'https://www.oneclickcarehk.com/api/action.php'

class request {

    post = async (formdata) => {
        
        let response = await fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formdata
        })

        let j = await response.json();

        return j
    }

    get = async (formdata) => {

        let query = ''

        for(let v of formdata.getParts()) {
            query += v.fieldName + '=' + v.string + '&'
        }

        console.log( url + '?' + query )
        
        let response = await fetch(url + '?' + query, {
            method: 'get',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })

        let j = await response.json();

        return j
    }

}

export default new request()
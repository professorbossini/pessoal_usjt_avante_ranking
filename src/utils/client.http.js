import axios from 'axios'

export default {
    get: (url, endpoint, {ra}, callback) => {
        console.log ('made this far')
        axios.get(`${url}/${endpoint}?ra=${ra}`)
        .then(res => {
            console.log(res)
            callback(res)
        })
        .catch(e => console.log (e))
    }
}
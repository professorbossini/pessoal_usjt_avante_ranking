import axios from 'axios'

export default {
    get: (url, endpoint, {ra}, callback) => {
        axios.get(`${url}/${endpoint}?ra=${ra}`)
        .then(res => {
            console.log(res)
            callback(res)
        })
        .catch(e => console.log (e))
    },
    getTopOnes (url, endpoint, {n}, callback){
        axios.get(`${url}/${endpoint}?n=${n}`)
        .then(res => {
            console.log(res)
            callback(res)
        })
    }
}
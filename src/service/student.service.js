import clientHttp from "../utils/client.http"
    const baseURL = "https://ancient-cove-06766.herokuapp.com"
    //const baseURL = "http://localhost:3000"
export default {
    getMySelfAmongOthers: (ra, callback) => {
        const endPoint = "myself_among_others"
        clientHttp.get(baseURL, endPoint, {ra}, callback)
    },
    getTopOnes(callback, n){
        const endPoint = "top_ones"
        clientHttp.getTopOnes (baseURL, endPoint, {n}, callback)
    }
}
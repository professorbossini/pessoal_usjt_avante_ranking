import clientHttp from "../utils/client.http"
const baseURL = "https://ancient-cove-06766.herokuapp.com"
export default {
    getMySelfAmongOthers: (ra, callback) => {
        const endPoint = "myself_among_others"
        clientHttp.get(baseURL, endPoint, {ra}, callback)
    }
}
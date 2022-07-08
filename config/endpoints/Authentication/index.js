import { BASE_URL } from "../../baseURL/index"
const rootRoute = '/petgove/api/auth'


export default {
    registerUser: `${BASE_URL}${rootRoute}/register`,
    loginUser: `${BASE_URL}${rootRoute}/login`,
    getCurrentUser: `${BASE_URL}${rootRoute}/currentUser`,
    logoutUser: `${BASE_URL}${rootRoute}/logout`
}

import axios from 'axios'
const request=axios.create({
    baseURL:"https://blog-vl26.onrender.com/api"
})
export default request
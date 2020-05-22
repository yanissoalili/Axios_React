import axios from 'axios'
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})
//new axios instance 
// instance don't use configuration in index
export default instance

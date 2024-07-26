import axios from "axios";
const baseUrl = 'https://restcountries.com/v3.1'

const getAll = () => {
     const request = axios.get(`${baseUrl}/all`)
     return request.then(response => response.data)
}

const getByCode = (countryCode) => {
     const request = axios.get(`${baseUrl}/alpha/${countryCode}`)
     return request.then(response => response.data)
}

const getByCodes = (codes) => {
     const request = axios.get(`${baseUrl}/alpha?codes=${codes.join(',')}`)
     return request.then(response => response.data)
}

export default {
     getAll,
     getByCode,
     getByCodes
}
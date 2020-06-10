import axios from 'axios'

async function keyewather() {
    const { data } = await axios.get('/config')
    const { logo, weather } = data

    sessionStorage.setItem('logo',logo)
    sessionStorage.setItem('appid',weather.appid)
    sessionStorage.setItem('clientid',weather.clientid)
    sessionStorage.setItem('clientsecret',weather.clientsecret)
}

export default keyewather
import axios from 'axios'

async function keyewather() {
    const { data } = await axios.get('/config')
    const { logo, weather } = data

    localStorage.setItem('logo',logo)
    localStorage.setItem('appid',weather.appid)
    localStorage.setItem('clientid',weather.clientid)
    localStorage.setItem('clientsecret',weather.clientsecret)
}

export default keyewather
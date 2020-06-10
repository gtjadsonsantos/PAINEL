import keyweather from './services/keyweather'

keyweather()

export default { 
        backend: {  url: `` },
        logo: `${sessionStorage.getItem('logo')}`,
        weather: { 
        appID: `${sessionStorage.getItem('appid')}`,
        clientID: `${sessionStorage.getItem('clientid')}`, 
        clientSecret: `${sessionStorage.getItem('clientsecret')}`  
    }
}
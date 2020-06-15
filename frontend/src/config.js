import keyweather from './services/keyweather'

keyweather()


export default { 
        backend: {  url: `` },
        logo: `${localStorage.getItem('logo')}`,
        weather: { 
        appID: `${localStorage.getItem('appid')}`,
        clientID: `${localStorage.getItem('clientid')}`, 
        clientSecret: `${localStorage.getItem('clientsecret')}`  
    }
}
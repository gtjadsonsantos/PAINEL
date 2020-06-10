module.exports = {
    secretToken: `${ process.env.KEY_JWT || "3435434213245432343545331343543454-0294jt2inojrqg34gb34wt3qrwfivbji3vq2noqnngerbjwn4newroaenvjte23435"}`,
    config: {
        logo: `${ process.env.LOGO ||'https://jadson179.github.io/SITE-PAINEL/logo192.png'}`,
        weather: {
            appid: `${process.env.APP_ID || 'hFc5Rx4a' }` ,
            clientid: `${process.env.CLIENT_ID || 'dj0yJmk9aDFYd3YxaGtBZHNXJmQ9WVdrOWFFWmpOVko0TkdFbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTEy' }`,
            clientsecret: `${process.env.CLIENT_SECRET || '4ab18573d6fdd4368f6deaa6bded2d36603a9864'}` 
        }
    }
} 
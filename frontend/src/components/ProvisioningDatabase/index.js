import api from '../../services/api'

async function handleProvisioningDatabase(){
    api.post('/tables')
}

export default handleProvisioningDatabase
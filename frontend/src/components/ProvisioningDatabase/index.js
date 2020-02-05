import api from '../../services/api'

async function handleProvisioningDatabase(){
    api.post('/provisioning')
}

export default handleProvisioningDatabase
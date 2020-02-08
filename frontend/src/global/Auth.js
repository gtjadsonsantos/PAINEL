
function isAuthenticated () {
    const status = sessionStorage.getItem('status')
    return status
}

export default isAuthenticated
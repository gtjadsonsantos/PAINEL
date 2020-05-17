
function isAuthenticated () {
    const token = sessionStorage.getItem('token')
    return token
}

export default isAuthenticated
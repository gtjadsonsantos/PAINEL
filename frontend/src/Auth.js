
function isAuthenticated () {
    const status = localStorage.getItem('status')
    return status
}

export default isAuthenticated
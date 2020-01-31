
function isAuthenticated ( ) {
    let status = ( (localStorage.getItem('AuthUsername') == localStorage.getItem('username')) && (localStorage.getItem('AuthPassword') == localStorage.getItem('password')))? true:false
    console.log(status)

    return status
}

export default isAuthenticated
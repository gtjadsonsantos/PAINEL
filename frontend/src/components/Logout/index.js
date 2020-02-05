function LogoutSystem(){
    sessionStorage.clear()
    window.location.assign('/')
}

export default LogoutSystem
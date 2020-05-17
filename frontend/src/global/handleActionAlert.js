function handleAlert(msg,status,color) {
    document.documentElement.style.setProperty('--actionalert-background-color',color);
    document.getElementById('MsgActionAlert').innerText = msg
    document.getElementById('ActionAlert').style.display = status
    setTimeout(()=>{
        document.getElementById('ActionAlert').style.display = 'none'
    },2500)
  }


export default handleAlert
import React,{useEffect} from 'react';
import Routes from './routes'
import { Provider } from 'react-redux'
import store from './store/'
import './global.css'

const App = () => {

    useEffect(()=>{
       const theme =   localStorage.getItem('theme')
       if (theme) {
        document.documentElement.style.setProperty("--primary-background-color",theme)
       }
    })

    return (
    <Provider store={store}>
        <Routes />
    </Provider>
    )
}

export default App;

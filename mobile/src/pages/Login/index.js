import React, { useState,useEffect } from 'react';
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity, AsyncStorage } from 'react-native'
import axios from 'axios'


export default function Login({navigation}) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [server,setServer] = useState('')
    
    useEffect(()=>{
        AsyncStorage.getItem('server',(err,result)=> {
            if(!err){
                setServer(result)
            }
        })  
    },[password,username,server])

    async function handleLogin() {
        const { data } = await axios.post(`http://${server}/user/auth`, { username, password })
        if (data.token) {
            AsyncStorage.setItem('token',data.token)
            navigation.navigate('UpdateRoom')   
        }

    }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: "https://github.com/jadson179/PAINEL/raw/master/mobile/assets/icon.png" }} />
            <TextInput placeholder="Login" style={styles.inputs} autoCapitalize='none' onChangeText={text => setUsername(text)} />
            <TextInput placeholder="Senha" style={styles.inputs} autoCapitalize='none' onChangeText={text => setPassword(text)} />
            <TouchableOpacity style={styles.button} onPress={handleLogin} >
                <Text>Entrar</Text>
            </TouchableOpacity>
            <Text style={styles.text} onPress={()=> navigation.navigate('Configuration')} >Configurar Servidor</Text>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000720',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputs: {
        width: 300,
        height: 40,
        borderColor: "#000720",
        borderBottomColor: "#fff",
        borderWidth: 1,
        marginTop: 10,
        paddingLeft: 10,
        color: "#ffff"
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 100,
        borderRadius: 10
    },
    button: {
        width: 120,
        height: 40,
        marginTop: 20,
        backgroundColor: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2
    },
    text: {
        color: "#fff",
        marginTop: 20
    }
})
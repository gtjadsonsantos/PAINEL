import React, { useState, useEffect } from 'react';
import { Image, Text, View, StyleSheet, TextInput, TouchableOpacity, AsyncStorage,Alert } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import io from 'socket.io-client'


import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import axios from 'axios'

export default function UpdateRoom() {
    const [token, setToken]= useState('')
    const [image, setImage] = useState({})
    const [room, setRoom] = useState('')
    const [server,setServer] = useState('')
    const socket = io(`${server}`,{ jsonp: false, agent: '-', pfx: '-', cert: '-', ca: '-', ciphers: '-', rejectUnauthorized: '-', perMessageDeflate: '-' })

    useEffect(()=>{
        AsyncStorage.getItem('server',(err,result)=> {
            if(!err){
                setServer(result)
            }
        })  
    },[])


    useEffect(()=>{
        AsyncStorage.getItem('token',(err,result)=> {
            if(!err){
                setToken(result)
            }

        })
    },[image,room,token])

    async function handleUpdateRoom() {
        const form = new FormData()
        form.append('room', room)
        form.append("file", image)


        await axios.put(`${server}/room`,form,{
        headers: {
            authorization: `Bearer ${token}`,
        }
       })

        socket.emit("send-image",{data: "send-image"})


    }
 

    useEffect(() => {
        Permissions.getAsync()
    }, [])


    async function pickImage() {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [35, 16],
                quality: 1,
            });
            if (!result.cancelled) {
                setImage({ 
                    uri: result.uri,
                    type: `${result.type}/${result.uri.substr(result.uri.length - 3,result.uri.length)}`,
                    name: result.uri
                });

            
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={{ uri: image.uri }} />
            <View style={styles.contianerUpload}>
                <Text style={styles.textupload} onPress={pickImage} >Escolher Imagem</Text>
                <FontAwesome name="upload" size={25} style={{ color: '#fff' }} onPress={pickImage} />
            </View>
            <TextInput placeholder="Numero da sala" style={styles.inputs} onChangeText={text => setRoom(text)} />
            <TouchableOpacity style={styles.button} onPress={handleUpdateRoom}>
                <Text>Atualizar</Text>
            </TouchableOpacity>
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
        width: 250,
        height: 200,
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
    textupload: {
        color: "#fff",
        height: 30,
    },
    contianerUpload: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 200
    }
})
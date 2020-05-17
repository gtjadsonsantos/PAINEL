import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, AsyncStorage } from 'react-native'


export default function Configuration() {
    const [server, setServer] = useState('')
    const [currentServer, setCurrentServer] = useState('')

    useEffect(() => {
        AsyncStorage.getItem("server", (err, result) => {
            if (!err) {
                setCurrentServer(result)
            }
        })
    }, [server])

    async function handleConfiguration() {
        await AsyncStorage.setItem("server", server)
    }

    return (
        <View style={style.container}>
            <View style={style.containerServer}>
                <Text style={style.titleServer}>Configuração do App</Text>
                <Text style={style.titleServer}>Servidor atual: {currentServer}</Text>
                <TextInput style={style.inputs} placeholder={`Endereço do Servidor`} onChangeText={text => setServer(text)} />
                <TouchableOpacity style={style.button} onPress={handleConfiguration} >
                    <Text style={style.text}>Salvar</Text>
                </TouchableOpacity>
            </View>
            <View>

            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    titleServer: {
        fontSize: 14,
        color: "#000720",
        width: 250,
        fontWeight: "800",
        marginTop: 10,
        backgroundColor: "#0000",

    },
    inputs: {
        borderWidth: 1,
        marginTop: 10,
        color: "#000",
        borderColor: "#fff",
        borderBottomColor: "#000720",
        height: 20,
        width: 250
    },
    button: {
        marginTop: 10,
        backgroundColor: "#000720",
        width: 100,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 2
    },
    text: {
        color: "#fff"
    }
})
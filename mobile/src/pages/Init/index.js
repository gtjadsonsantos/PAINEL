import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Init({navigation}) {
    const [address, setAddress] = useState('')
  return (
    <View style={styles.container}>
      <TextInput placeholder="Painel URL"  autoCapitalize="none" style={styles.input}  onChangeText={text => setAddress(text)} />
      <Text style={styles.text}>http://example.painel.com:8080</Text>
      <View style={styles.containerButton}>
        <Button style={styles.button}title="Entrar" onPress={()=> navigation.navigate('Login',{url_aplication: address})} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: 300,
    height: 30,
    borderColor: '#000',
    borderBottomWidth: 1,
  },
  text: {
    width: 300,
    fontSize: 14,
    color: '#9c9c9c',
    textAlign: 'left'
  },
  containerButton: {
    display: 'flex',
    height: 100,
    width: 100,
    paddingTop: 40,
  },
  button:{
    flex: 1,
  }
});


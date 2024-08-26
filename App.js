import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'; 
import {SafeAreaView, StyleSheet, TextInput, Button, View,Alert,Text} from 'react-native'; 

export default function App() {
  const [tulos, setTulos] = useState('Guess a number between 1-100');
  const [syote, setSyote] = useState('');
  const [arvaus, setArvaus] = useState(0);
  const [vastaus, setVastaus] = useState(Math.floor(Math.random() * 100) + 1)
 

  const peli = () => { 
    let arvaus1 = parseInt(syote)
    if (arvaus1 < vastaus){
      arvaus1 = 'Your guess ' + syote + ' is too low'
      setArvaus(arvaus+1);
      setTulos(arvaus1.toString());
    }else if (arvaus1 > vastaus){
       arvaus1 = 'Your guess ' + syote + ' is too high';
       setArvaus(arvaus+1);
      setTulos(arvaus1.toString());
    }else{
      Alert.alert('You guessed the number in ' + arvaus + ' guesses') //tällä saadaan erillinen ponnahduskenttä
      setArvaus(0);
      setVastaus((Math.floor(Math.random() * 100) + 1))
    }
  };


  return ( 
    <SafeAreaView style={styles.container}>   
      <Text> 
        {tulos}
      </Text>
      <TextInput style={styles.input}
        value={syote}
        onChangeText={text => setSyote(text)}
        placeholder="   "
        keyboardType="numeric"
      />
      <View>
        <View> 
          <Button
            title="MAKE GUESS"
            onPress={peli} 
          />
        </View>
      </View>
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: { // määrittelee tekstikentän ulkoasun
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    textAlign: "center",
  }
});

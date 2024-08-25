import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [attempts, setAttempts] = useState(0);

  const makeGuess = () => {
    setAttempts(attempts + 1);
    if(guess === '') {
      alert('Please enter a number');
      return;
    } else if(isNaN(guess)) {
      alert('Please enter a valid number');
      return;
    } else if(guess < 1 || guess > 100) {
      alert('Please enter a number between 1 and 100');
      return;
    } else {
      if(guess < number) {
        alert('Your guess is too low');
      } else if(guess > number) {
        alert('Your guess is too high');
      } else {
        alert('Congratulations! You guessed the number in ' + attempts + ' guesses');
        setNumber(Math.floor(Math.random() * 100) + 1);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text>Guess a number between 1 and 100</Text>
      <TextInput onChangeText={setGuess} style={{margin: 5}} placeholder="Enter your guess" inputMode={"numeric"} maxLength={3}/>
      <Pressable style={({ pressed }) => [{backgroundColor: pressed ? 'white' : 'dodgerblue', margin: 5}]} onPress={makeGuess} >
        <Text style={{color: 'white', padding: 5}}>MAKE GUESS</Text>
      </Pressable>
      <StatusBar style="auto" />
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
});

import React from 'react';
import {SafeAreaView, TextInput, Text, View} from 'react-native';
import styles from './Input.styles';

const Input = ({value, onChangeText, placeholder}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>{value}</Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder={placeholder} onChangeText={onChangeText} />
      </View>
    </SafeAreaView>
  );
};

export default Input;

import React from 'react';
import {SafeAreaView, StyleSheet, Text, Image, View} from 'react-native';
import Button from '../components/Button/Button';

const Welcome = ({navigation}) => {
  const handleSubmit = () => {
    navigation.navigate('MemberSignScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image source={require('../assets/fitnessIcon.png')} />
      </View>
      <Text style={styles.title}>Fit Body GYM</Text>
      <Button text="Üye Kaydı Oluştur" onPress={handleSubmit} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 10,
  },

});
export default Welcome;

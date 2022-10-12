import React from 'react';
import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, Image, TextInput } from 'react-native';

export default function Login( { navigation } ) {

  const load = () => {
    navigation.navigate('Reset')
  }

  const loadProfile = () => {
    navigation.navigate('Profile')
  }

  const loadScene = () => {
    navigation.navigate('Registrate')
  }

  return (
      <SafeAreaView style={styles.wrapper}>
        <Image 
        style={styles.Shape}
          source={
            require('../assets/images/shape.png')
          }
        />
        <View style={styles.Main}>
          <View style={styles.Info}>
            <Text style={styles.Title}>
              Welcome Back
            </Text>
              <Image
                  source={
                      require('../assets/images/login.png')
                  }
              />
          </View>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholder='Enter your email'
            />
            <TextInput
              style={styles.input}
              placeholder='Enter your password'
            />
          </View>
          <Text onPress={load} style={styles.passwordReset}>
            forget password ?
          </Text>
          <TouchableOpacity
              style={styles.BtnBG}
              onPress={loadProfile}
              >
              <Text style={styles.BtnText}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.account}>Don't have an account? <Text style={styles.accountReset} onPress={loadScene}>Sign up</Text></Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  account: {
    top: 30
  },
  accountReset: {
    color: '#1DB2AD',
    fontWeight: 'bold'
  },
  passwordReset: {
    color: '#1DB2AD',
    top: 10
  },
  form: {
    width: '100%',
    marginTop: 20
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 250,
    height: 50,
    marginTop: 10,
    paddingLeft: 20,
    color: '#000'
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E5E5'
  },
  Main: {
    flex: 1,
    alignItems: 'center',
    top: 170,
    alignSelf: 'center',
  },
  Shape: {
    position: 'absolute',
    top: 0,
    left: 0
  },
  Info: {
    width: '70%',
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 30,
    bottom: 10
  },
  SubTitle: {
    fontSize: 13
  },
  BtnText: {
      fontSize: 27,
      fontWeight: '600',
      color: "#fff",
  },
  BtnBG: {
  backgroundColor: "#1DB2AD",
  width: 250,
  top: 20,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 5,
  borderRadius: 5
  }
});

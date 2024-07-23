import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const index = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => router.navigate('/auth/login')} >
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.navigate('/auth/signup')} >
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  button: {
    backgroundColor: '#673ab7',
    paddingVertical: 15,
    borderRadius: 5,
    width: '60%',
    marginHorizontal: 70,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
})
import React from 'react';
    import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
    import { Entypo } from '@expo/vector-icons';
    import { FontAwesome } from '@expo/vector-icons';
    import { MaterialIcons } from '@expo/vector-icons';
    import { Fontisto } from '@expo/vector-icons';

const setting = () => {
      return (
        <View style={styles.container}>
          <View style={styles.settingsContainer}>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.iconContainer}>
                <Entypo name="user" size={20} color="green" />
              </View>
              <Text style={styles.settingText}>Account</Text>
              <Entypo name="chevron-right" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.iconContainer}>
                <FontAwesome name="bell" size={20} color="orange" />
              </View>
              <Text style={styles.settingText}>Notifications</Text>
              <Entypo name="chevron-right" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.iconContainer}>
                <MaterialIcons name="lock" size={20} color="red" />
              </View>
              <Text style={styles.settingText}>Privacy</Text>
              <Entypo name="chevron-right" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.iconContainer}>
                <Fontisto name="info" size={20} color="blue" />
              </View>
              <Text style={styles.settingText}>About</Text>
              <Entypo name="chevron-right" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
              <View style={styles.iconContainer}>
                <Entypo name="log-out" size={20} color="red" />
              </View>
              <Text style={styles.settingText}>Logout</Text>
              <Entypo name="chevron-right" size={20} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      );
    }
    
    
  


export default setting

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#f0f0f0',
        },
        header: {
          flexDirection: 'row',
          alignItems: 'center',
          padding: 16,
          backgroundColor: 'white',
        },
        backButton: {
          marginRight: 16,
        },
        headerText: {
          fontSize: 18,
          fontWeight: 'bold',
        },
        settingsContainer: {
          marginTop: 16,
          padding: 16,
          backgroundColor: 'white',
          borderRadius: 8,
        },
        settingItem: {
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent:'space-between',
          backgroundColor:'yellow',
          padding: 16,
          marginBottom: 8,
          borderRadius: 8,
        },
        iconContainer: {
          marginRight: 16,
        },
        settingText: {
          fontSize: 16,
          textAlign:'right'
        },
      })
      

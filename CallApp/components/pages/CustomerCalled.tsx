import React from 'react'
import { Button, Text, View } from 'react-native';
import styles from '../stylesheets/CustomerCalledCSS';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Entypo from 'react-native-vector-icons/Entypo';

function CustomerCalled({ navigation }): JSX.Element {
  return (
    <View style={styles.textContainer}>
      <Text style={{color:'whitesmoke', fontSize:32, marginTop:100}}>Calling...</Text>
      <View style={styles.backButton}>
      <TouchableOpacity style={{marginTop:400}} onPress={() => navigation.navigate('Customer_List')}>
          <Entypo name="circle-with-cross" size={84} color='#ec1e30'></Entypo>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerCalled;

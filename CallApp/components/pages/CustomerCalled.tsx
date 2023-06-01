import React from 'react'
import { Button, Text, View } from 'react-native';
import styles from '../stylesheets/CustomerCalledCSS';
import { TouchableOpacity } from 'react-native-gesture-handler';

function CustomerCalled({ navigation }): JSX.Element {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>Connection Established</Text>
      <View style={styles.backButton}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Customer_List')}>
          <Text style={styles.buttonText}>Back to List</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomerCalled;

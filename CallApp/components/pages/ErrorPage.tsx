import React from 'react'
import { Button, Text, View } from 'react-native';
import styles from '../stylesheets/ErrorPageCSS';
import { TouchableOpacity } from 'react-native-gesture-handler';

function ErrorPage({ navigation }): JSX.Element {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>Error Occurred!</Text>
      <View style={styles.backButton}>
      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('Customer_List')}>
          <Text style={styles.buttonText}>Back to List</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default ErrorPage;

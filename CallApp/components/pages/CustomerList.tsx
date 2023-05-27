import React, { useEffect, useState } from "react";
import RadioButtonList from "../pages/RadioButtonList";
import { Colors } from "react-native/Libraries/NewAppScreen";
// import * as Animatable from 'react-native-animatable';
import {
  Alert,
  Button,
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCustomerRequest } from "../redux/action/customerAction";
import style from "../stylesheets/CustomerListCSS";
import {
  getErrorSelector,
  getPendingSelector,
  getTodosSelector,
} from "../redux/selector";

//display list of customers with their details and functionality to call a customer
function CustomerList(): JSX.Element {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // dispatch action to redux store
  let dispatch = useDispatch();

  //select the pending state, customers data, and error state from the Redux store
  const pending = useSelector(getPendingSelector);
  const customers = useSelector(getTodosSelector);
  const error = useSelector(getErrorSelector);


  const [refreshing, setRefreshing] = useState(false);
  const [callScreenVisible, setCallScreenVisible] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      dispatch(getCustomerRequest())
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    dispatch(getCustomerRequest())
  }, []);

  const onPressHandler = (contacts: string[], customerId: Number) => {
    if(contacts.length == 1)
      Alert.alert('Calling to customer !')
    else{  
    setCallScreenVisible(true) 
    setCustomerId(customerId.toString()) 
    }
  }

  const onPressHandler2 = (contact: string | null, customerId: Number) => {
    Alert.alert('Calling to customer !')
  }


  const unsetCallScreenVisibility = ()=> {
    setCallScreenVisible(!callScreenVisible)
    setCustomerId('')
  }

  // jsx markup
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={style.text}>Customer Details</Text>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={[backgroundStyle]}
        contentContainerStyle={style.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
      >
          <View style={style.container}>
            {pending ? (
              <Text style={style.loader}>Loading...</Text>
            ) : error ? (
              <Text>Error</Text>
            ) : (
              <View>{ 
              customers.map((customer, index) => (
                <View style={style.entry} key={index}>
                <Text style={style.block} >
                  {customer.customerName}
                </Text>
                <TouchableOpacity style={style.button} onPress={() => onPressHandler(customer.customerContact, customer.customerId)}>
                  <Text style={style.buttonText}>Call</Text>
                </TouchableOpacity> 
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={callScreenVisible && customer.customerId.toString() == customerId}
                  onRequestClose={unsetCallScreenVisibility}>
                      <Pressable style={style.centeredView} onPress={unsetCallScreenVisibility}>
                        <Pressable style={style.modalView}>
                      <Text style = {style.name}>Contact list of <Text style = {style.name}>{customer.customerName}</Text> </Text>
                      {
                        <RadioButtonList
                          options={customer.customerContact}
                          selectedOption={selectedNumber}
                          onOptionSelect={(option: string | null) => setSelectedNumber(option)}
                        />  
                      }
                      <TouchableOpacity style={style.button} onPress={() => onPressHandler2(selectedNumber, customer.customerId)}>
                      <Text style={style.buttonText}>Call</Text>
                      </TouchableOpacity> 
                      </Pressable>
                      </Pressable>
                </Modal> 
                </View>
              // </Animatable.View>
              ))
              }
              </View>
            )} 
          </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomerList;

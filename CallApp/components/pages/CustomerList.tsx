import React, { useEffect, useState } from "react";
import RadioButtonList from "./RadioButtonList";
import { Colors } from "react-native/Libraries/NewAppScreen";
// import * as Animatable from 'react-native-animatable';
import {
  ActivityIndicator,
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
} from "../redux/selector/customerSelector";
import { callErrorSelector, callPendingSelector, callSelector } from "../redux/selector/callSelector";
import { doCallRequest } from "../redux/action/callAction";

//display list of customers with their details and functionality to call a customer
function CustomerList({navigation}): JSX.Element {
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

  //select the pending state, call data, and error state from the Redux store
  let callPending = useSelector(callPendingSelector);
  let call = useSelector(callSelector);
  let callError = useSelector(callErrorSelector);

  const [refreshing, setRefreshing] = useState(false);
  const [callScreenVisible, setCallScreenVisible] = useState(false);
  const [customerId, setCustomerId] = useState('');
  const [selectedNumber, setSelectedNumber] = useState<string | null>(null);
  const [calling, setCalling] = useState(false);
  const [tempCall, setTempCall] = useState(false);

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

  useEffect(() => {
    
      if(calling){
        if(!callPending){
          setCalling(false)
          setTempCall(false)
          if(call != null) {
            navigation.navigate('Customer_Called')
          }
          else if(callError != null){
            navigation.navigate('Error_Page')
          }       
    }
  }
  }, [calling, call, callError]);
  
  const onPressHandler = (contacts: string[], customerId: Number) => {
    if(contacts.length == 1)
    onPressHandler2(contacts[0], customerId)
    else{  
    setCallScreenVisible(true) 
    setCustomerId(customerId.toString()) 
    }
  }

  const onPressHandler2 = (contact: string | null, customerId: Number) => {
    dispatch(doCallRequest(contact, customerId))
    unsetCallScreenVisibility()
    setCalling(true)
    setTempCall(true)
  }

  const unsetCallScreenVisibility = ()=> {
    setCallScreenVisible(!callScreenVisible)
    setCustomerId('')
  }

  const unsetCallLoading = ()=> {
    call = null
    callError = null
    callPending = false
    setCalling(false)
    setTempCall(false)
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
             <Modal
                  animationType="none"
                  presentationStyle= 'pageSheet'
                  transparent={true}
                  visible={tempCall}
                  onRequestClose={unsetCallLoading}>
                    <View style={style.callLoader}>
                    <View style={style.loaderContainer}>  
                    <Text style={style.loaderText}>Connecting...</Text>
                    <ActivityIndicator size='large' color='red'/></View>
                    </View> 
              </Modal>      
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomerList;

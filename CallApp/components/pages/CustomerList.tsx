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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { LogBox } from "react-native";
LogBox.ignoreAllLogs()


//display list of customers with their details and functionality to call a customer
function CustomerList({}): JSX.Element {
  
  const navigation = useNavigation();
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
    <SafeAreaView>
      {/* <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      {/* <Text style={style.text}>Customer Details</Text> */}
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent={true}
      />

      <View style={{flexDirection:'row', padding:10, backgroundColor:'#07447d'}}>
        {/* <View >
          <FontAwesome name="sort" size={18} style={{padding:10, borderWidth:1, borderColor:'white', borderRadius:50, marginRight:5, color:'white'}}/>
        </View> */}
        <View style={{flexDirection:'row', flex:1}}>
          <TextInput placeholder="Search" style={{flex:1, borderWidth:1, borderColor:'white', borderRadius:30, paddingVertical:0, paddingHorizontal:10, color:'white'}} placeholderTextColor={'#fff'}/>
          <MaterialIcons name="search" size={18} style={{padding:10, borderWidth:1, borderColor:'white', borderRadius:50, marginLeft:5, color:'white'}}/>
        </View>
      </View>

  
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
                {/* <Text style={style.block} >
                  {customer.customerName}
                </Text> */}
                <TouchableOpacity onPress={() => navigation.navigate("CustomerDetails", customer=customer)}>
                  <View>
                    <View>
                      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={{color:"#333", fontSize:20, fontWeight:'300'}}>
                          {customer.customerName}
                        </Text>
                        
                        <Text style={{color:"#07447d", fontWeight:'300', marginTop:5}}>
                          ADSF3456237
                        </Text>
                        
                      </View>
                      <View>
                        <View>
                          <Text>
                            Business Loan
                          </Text>
                          <Text>
                            4/22, Sector 22, Rohini, Delhi, India
                          </Text>
                        </View>
                        <View>
                          <Text>
                            PIN - 247849
                          </Text>
                          <Text>
                            Last contacted 21 days ago...
                          </Text>
                        </View>
                        
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                
                <View style={{paddingTop:10, flex:1, borderBottomWidth:1, borderBottomColor:"#ccc"}}></View>

                <View style={{paddingVertical:10, flexDirection:'row', justifyContent:'space-between'}}>
                  <TouchableOpacity onPress={() => onPressHandler(customer.customerContact, customer.customerId)}>
                    <View style={{padding:8, borderWidth:0.5, borderColor:'#ccc', borderRadius:40, marginHorizontal:5}}>
                      <MaterialIcons name="call" size={24}/>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate("Message")}>
                    <View style={{padding:8, borderWidth:0.5, borderColor:'#ccc', borderRadius:40, marginHorizontal:5}}>
                      <MaterialIcons name="message" size={24}/>
                    </View>
                  </TouchableOpacity>
                  <View style={{padding:8, borderWidth:0.5, borderColor:'#ccc', borderRadius:40, marginHorizontal:5}}>
                    <MaterialIcons name="email" size={24}/>
                  </View>
                  <View style={{padding:8, borderWidth:0.5, borderColor:'#ccc', borderRadius:40, marginHorizontal:5}}>
                    <MaterialIcons name="location-pin" size={24}/>
                  </View>
                  <View style={{padding:8, borderWidth:0.5, borderColor:'#ccc', borderRadius:40, marginHorizontal:5}}>
                    <Ionicons name="ios-checkmark" size={24}/>
                  </View>
                  <View style={{padding:8, borderWidth:0.5, borderColor:'#ccc', borderRadius:40, marginHorizontal:5}}>
                    <Entypo name="dots-three-horizontal" size={24}/>
                  </View>
                </View>

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={callScreenVisible && customer.customerId.toString() == customerId}
                  onRequestClose={unsetCallScreenVisibility}>
                      <Pressable style={style.centeredView} onPress={unsetCallScreenVisibility}>
                        <Pressable style={style.modalView}>

                          <Text style = {style.name}>Choose number to call:</Text>
                          
                            <RadioButtonList
                              options={customer.customerContact}
                              selectedOption={selectedNumber}
                              onOptionSelect={(option: string | null) => setSelectedNumber(option)}
                            />  
                            {/* {
                              customer.customerContact.map((contact, index) => (
                                <View key={index}>
                                  <Text>
                                    {contact}
                                  </Text> 
                                  <MaterialIcons name="call"/>            
                                </View>
                              ))
                            } */}
                          
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

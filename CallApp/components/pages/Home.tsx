import React from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Header from "./Header";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Home = ({}) => {

    const hieghtStatusBar = StatusBar.currentHeight;
    const navigation = useNavigation();

    return(

        <SafeAreaView style={{flex:1}}>

            {/* <Header/> */}

            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent={true}
            />

            <View style={{paddingTop:hieghtStatusBar, backgroundColor:"#07447d"}}>
                <View style={{flexDirection:'row', padding:10}}>
                    <View style={{paddingLeft:5, marginTop:5}}>
                        <TouchableOpacity onPress={ () => {} }>
                            <MaterialIcons name="menu" size={28} color="white"/>
                        </TouchableOpacity>
                    </View>
                    
                        <Text style={{flex:1, textAlign:'center', fontWeight:'200', fontSize:26, color:'white'}}>Collection</Text>
                        <View style={{marginTop:5}}>
                        <TouchableOpacity onPress={ () => {} }>
                            <FontAwesome name='user-circle-o' size={28} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={{paddingHorizontal:10, paddingTop:10}}>
                {/* <View style={{paddingBottom:10}}>
                    <Text style={{fontSize:24, paddingHorizontal:10, textAlign:'center', color:'#333', fontWeight:'300'}}>Collection</Text>
                </View> */}
                
                <View style={{height:145, borderWidth:1, borderRadius:10, borderColor:"#ccc", marginVertical:10}}>
                    <Text style={{fontSize:18, paddingHorizontal:10, paddingTop:10, color:'#333', fontWeight:'500'}}>Customer Details</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-around', paddingTop:10}}>
                        <View>
                            <TouchableOpacity onPress={ () => navigation.navigate('Customer_List')}>
                                <View style={{padding:10, borderWidth:0.5, borderColor:'#ccc', borderRadius:40}}>
                                    <MaterialIcons name="contacts" size={30} color='#333' style={{alignSelf:'center'}}/> 
                                </View> 
                                <View>
                                    <Text style={{fontSize:10, color:'#333', fontWeight:'600', textAlign:'center'}}>Loan</Text>
                                    <Text style={{fontSize:10, color:'#333', fontWeight:'600', textAlign:'center'}}>Account List</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={ () => navigation.navigate('Customer_List')}>
                                <View style={{padding:10, borderWidth:0.5, borderColor:'#ccc', borderRadius:40}}>
                                    <MaterialIcons name="call" size={30} color='#333' style={{alignSelf:'center'}}/> 
                                </View> 
                                <View>
                                    <Text style={{fontSize:10, color:'#333', fontWeight:'600', textAlign:'center'}}>Phone</Text>
                                    <Text style={{fontSize:10, color:'#333', fontWeight:'600', textAlign:'center'}}>Calls</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={ () => navigation.navigate('Customer_List')}>
                                <View style={{padding:10, borderWidth:0.5, borderColor:'#ccc', borderRadius:40}}>
                                    <MaterialIcons name="assignment" size={30} color='#333' style={{alignSelf:'center'}}/> 
                                </View> 
                                <View>
                                    <Text style={{fontSize:10, color:'#333', fontWeight:'600', textAlign:'center'}}>Assignment</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={ () => navigation.navigate('Customer_List')}>
                                <View style={{padding:10, borderWidth:0.5, borderColor:'#ccc', borderRadius:40}}>
                                    <MaterialIcons name="account-box" size={30} color='#333' style={{alignSelf:'center'}}/> 
                                </View> 
                                <View>
                                    <Text style={{fontSize:10, color:'#333', fontWeight:'600', textAlign:'center'}}>Profile</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={{height:145, borderWidth:1, borderRadius:10, borderColor:"#ccc", marginVertical:10}}>
                    <Text style={{fontSize:16, paddingHorizontal:10, paddingTop:10, color:'#333', fontWeight:'500'}}>Credit Card Details</Text>
                    <View style={{flexDirection:'row', paddingTop:10}}>
                        <View style={{marginLeft:15}}>
                            <TouchableOpacity onPress={ () => navigation.navigate('Customer_List')}>
                                <View style={{padding:10, borderWidth:0.5, borderColor:'#ccc', borderRadius:40}}>
                                    <MaterialIcons name="contacts" size={30} color='#333' style={{alignSelf:'center'}}/> 
                                </View> 
                                <View>
                                    <Text style={{fontSize:10, color:'#333', fontWeight:'600', textAlign:'center'}}>Credit</Text>
                                    <Text style={{fontSize:10, color:'#333', fontWeight:'600', textAlign:'center'}}>Account List</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home;
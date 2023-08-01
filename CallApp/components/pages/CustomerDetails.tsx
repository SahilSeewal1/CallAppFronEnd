import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";


const CustomerDetails = (props) => {

    const navigation = useNavigation();


    const customer = props.route.params;
    return (
        <SafeAreaView>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <View>
                <View style={{backgroundColor:"#07447d", paddingHorizontal:10}}>
                    <View style={{alignItems:'center', marginTop:-5}}>
                        <View style={{paddingBottom:10}}>
                            <View>
                                <MaterialIcons name="account-circle" size={52} color="#fff" />
                            </View>
                            
                        </View>
                        <View style={{}}>
                            <Text style={{color:"#fff", fontSize:28, fontWeight:'300'}}>
                            {customer.customerName}
                            </Text>
                        </View>
                        <View>
                            <Text style={{color:"#fff", fontSize:16, fontWeight:'300'}}>
                            Business Loan - ADFS2774783 
                            </Text>
                        </View>
                    </View>

                    

                    <View style={{paddingHorizontal:10, paddingVertical:15, flexDirection:'row', justifyContent:'space-between', borderTopWidth:1, borderTopColor:"#fff", marginTop:20}}>
                        <TouchableOpacity onPress={() => {}}>
                            <View style={{padding:8, borderWidth:1, borderColor:'#fff', borderRadius:40, marginHorizontal:5}}>
                            <MaterialIcons name="call" size={24} color='#fff'/>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Message")}>
                            <View style={{padding:8, borderWidth:1, borderColor:'#fff', borderRadius:40, marginHorizontal:5}}>
                            <MaterialIcons name="message" size={24} color='#fff'/>
                            </View>
                        </TouchableOpacity>
                        <View style={{padding:8, borderWidth:1, borderColor:'#fff', borderRadius:40, marginHorizontal:5}}>
                            <MaterialIcons name="email" size={24} color='#fff'/>
                        </View>
                        <View style={{padding:8, borderWidth:1, borderColor:'#fff', borderRadius:40, marginHorizontal:5}}>
                            <MaterialIcons name="location-pin" size={24} color='#fff'/>
                        </View>
                        <View style={{padding:8, borderWidth:1, borderColor:'#fff', borderRadius:40, marginHorizontal:5}}>
                            <Ionicons name="ios-checkmark" size={24} color='#fff'/>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Receipt")}>
                            <View style={{padding:8, borderWidth:1, borderColor:'#fff', borderRadius:40, marginHorizontal:5}}>
                                <MaterialIcons name="receipt-long" size={24} color='#fff'/>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                    
                
                    <View style={{margin:5, marginTop:10, borderColor:'#ccc', borderWidth:1, borderRadius:10, backgroundColor:'#fff'}}>
                    
                        <View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Account No.</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>HDFC584930294</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Customer No.</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>75483930</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>First Name</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>Ram</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Last Name</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>Kumar</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Gender</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>Male</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Marital Status</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>Single</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Occupation</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>Professional</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Location</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>DELHI</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Email ID</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>ram.kumar@gmail.com</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Primary Contact No.</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>9740974033</Text>
                                </View>
                            </View>
                            <View style={{padding:10, borderBottomWidth:1,borderColor:'#ccc', flexDirection:"row"}}>
                                <View style={{width:"50%"}}>
                                    <Text>Other Contact No.</Text>
                                </View>
                                
                                <View style={{width:"50%"}}>
                                    <Text>Optional</Text>
                                </View>
                            </View>
                        </View>

                    </View>
            </View>
        </SafeAreaView>
    )
}

export default CustomerDetails;
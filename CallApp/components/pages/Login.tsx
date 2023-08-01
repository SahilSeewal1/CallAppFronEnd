import React from "react";
import { Image, StatusBar, Text, TouchableOpacity, View, useColorScheme } from "react-native";
import styles from "../stylesheets/CustomerCalledCSS";
import { SvgUri } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TextInput } from "react-native-gesture-handler";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Header from "./Header";



const Login = ({ navigation }) => {
 
    const isDarkMode = useColorScheme() === "dark";
    
    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };


    return (
        <SafeAreaView style={{flex:1}}>
            <StatusBar
                barStyle={isDarkMode ? "light-content" : "dark-content"}
                backgroundColor={backgroundStyle.backgroundColor}
            />

            <Header />

            <View style={{flex:1, justifyContent:'center', paddingHorizontal:25}}>
                <Text 
                    style={{fontFamily: 'Roboto-Medium', fontSize:28, fontWeight:'600', color:'#333', marginBottom:25}}
                >
                    Agent Login
                </Text>

                <View style={{
                    flexDirection:'row',
                    borderBottomColor:"#ccc",
                    borderBottomWidth:2,
                    paddingBottom:8,
                    marginBottom:25

                }}>
                    <MaterialIcons name="perm-identity" size={20} color='#666' style={{marginRight:5, marginTop:5}}/> 
                    <TextInput placeholder="User ID" style={{flex:1, paddingVertical:0}}/>


                </View>
                <View style={{
                    flexDirection:'row',
                    borderBottomColor:"#ccc",
                    borderBottomWidth:2,
                    paddingBottom:8,
                    marginBottom:30
                }}>
                    <MaterialIcons name="lock" size={20} color='#666' style={{marginRight:5, marginTop:5}}/> 
                    <TextInput placeholder="Password" style={{flex:1, paddingVertical:0}} secureTextEntry={true}/>
                </View>

                <TouchableOpacity 
                        onPress={ () => navigation.navigate('Profile_Selector')}
                        style={{backgroundColor:'#07447d', padding:20, borderRadius:10, marginBottom:30}}
                    >
                        <Text style={{fontSize:20, fontWeight:'700', textAlign:'center', fontFamily: 'Roboto-Medium', color:'#fff'}}>Login</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'row', justifyContent:'center', marginBottom:30}}>
                    <View style={{flex:1, borderBottomWidth:1, borderBottomColor:"#ccc"}}></View>
                    <Text style={{fontSize:18, paddingHorizontal:10,marginBottom:-10, color:'#666'}}>Other options</Text>
                    <View style={{flex:1, borderBottomWidth:1, borderBottomColor:"#ccc"}}></View>
                </View>

                <TouchableOpacity 
                        onPress={ () => navigation.navigate('Home_page')}
                        style={{padding:20, borderRadius:10, marginBottom:30, borderColor:'#ccc', borderWidth:2}}
                    >
                        <Text style={{fontSize:20, fontWeight:'600', textAlign:'center', fontFamily: 'Roboto-Medium', color:'#333'}}>Login with SSO</Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

export default Login;
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";


const CommonHeader = ({name, backTo}) => {
    const hieghtStatusBar = StatusBar.currentHeight;
    const navigation = useNavigation();

    return (
        <View style={{paddingTop:hieghtStatusBar, backgroundColor:"#07447d"}}>
            <View style={{flexDirection:'row',paddingHorizontal:10, paddingBottom:10}}>
                <View style={{paddingLeft:5}}>
                    <TouchableOpacity onPress={ () => navigation.navigate(backTo) }>
                        <MaterialIcons name="arrow-back-ios" size={25} color="white"/>
                    </TouchableOpacity>
                </View>
                
                    <Text style={{flex:1, textAlign:'center', fontWeight:'400', fontSize:22, color:'white'}}>{name}</Text>
                    <View style={{}}>
                    <TouchableOpacity onPress={ () => {} }>
                        <Entypo name='dots-three-vertical' size={25} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CommonHeader;
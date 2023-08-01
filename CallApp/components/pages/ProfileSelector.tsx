import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialIconsCommunity from "react-native-vector-icons/MaterialCommunityIcons";


const ProfileSelector = () => {
    const navigation = useNavigation();

    return(
        <SafeAreaView style={{flex:1, backgroundColor:"#07447d"}}>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <View style={{height:'100%', width:'100%', justifyContent:'space-evenly', alignItems:'center', flexDirection:'row'}}>
                <View style={{alignItems:'center', padding:20, borderRadius:20, borderWidth:0, borderColor:'#ccc'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home_page')}>
                        {/* <Entypo name="user" size={56} color="#fff" /> */}
                        <MaterialIconsCommunity name="account" size={80} color="#fff" />
                        <Text style={{color:'#fff', fontSize:20}}>
                            Collection
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={{alignItems:'center', padding:20, borderRadius:20, borderWidth:0, borderColor:'#ccc'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Home_page')}>
                    <MaterialIconsCommunity name="account-cog" size={80} color="#fff"/>
                        <Text style={{color:'#fff', fontSize:20}}>
                            Supervisor
                        </Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ProfileSelector;
import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Dimensions } from "react-native";



const Message = () => {
    const windowHeight = Dimensions.get('window').height;
    return (
        <SafeAreaView>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <View style={{height:windowHeight-110}}>
                <View style={{margin:10, padding:10, minHeight:100, width:300, borderWidth:2, borderRadius:15, borderColor:"#ccc"}}>
                    <Text >
                        Dear Tarun,
                        We hope this message finds you well. We are writing to remind you about the outstanding balance on your bank loan. As per our records, the payment for your loan has not been received for the past 10 months.
                    </Text>
                </View>
            </View>
            <View style={{flexDirection:'row', paddingHorizontal:10, paddingVertical:15, backgroundColor:'#07447d'}}>
                {/* <View >
                    <FontAwesome name="sort" size={18} style={{padding:10, borderWidth:1, borderColor:'white', borderRadius:50, marginRight:5, color:'white'}}/>
                </View> */}
                <View style={{flexDirection:'row', flex:1}}>
                    <TextInput placeholder="Write you message here..." style={{flex:1, borderWidth:1, borderColor:'white', borderRadius:30, paddingVertical:0, paddingHorizontal:10, color:'white'}} placeholderTextColor={'#fff'}/>
                    <MaterialIcons name="send" size={22} style={{padding:10, borderWidth:1, borderColor:'white', borderRadius:50, marginLeft:5, color:'white'}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Message;
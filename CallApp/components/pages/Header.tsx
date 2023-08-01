import React from "react";
import { View , Text, Image} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Header = () => {
    return (
        <View style={{paddingHorizontal:15, flexDirection:'row', paddingBottom:20}}>
            <View>
                <Image source={require('../../assests/images/klogo.png')} style={{width:175, height:45}}/>
            </View>
            <View style={{flex:1, marginRight:10, alignItems:"flex-end"}}>
                {/* <Text style={{fontSize:10, fontWeight:'700', textAlign:'right', color:'#333'}}>Kotak</Text>
                <Text style={{fontSize:10, fontWeight:'700', textAlign:'right', color:'#333'}}>Collection</Text>
                <Text style={{fontSize:10, fontWeight:'700', textAlign:'right', color:'#333'}}>System</Text> */}

                <MaterialIcons name="live-help" size={34} color="#333" style={{marginTop:8}}/>
            </View>
        </View>
    )
}

export default Header;
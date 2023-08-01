import React from "react";
import { SafeAreaView, StatusBar, Text, View } from "react-native";

const Receipt = () => {
    return(
        <SafeAreaView>
            <StatusBar
                barStyle='light-content'
                backgroundColor='transparent'
                translucent={true}
            />
            <Text>
                Receipt
            </Text>
        </SafeAreaView>
    )
}

export default Receipt;
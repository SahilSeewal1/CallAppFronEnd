import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      paddingTop: 30      
    },

    text: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 10      
    },

    entry: { 
      backgroundColor: '#fff8dc', 
      borderStyle: 'solid', 
      marginBottom: 10,
      width: 350,
      height: 100,
      paddingLeft: 15 
    },

    block: {
      marginBottom: 2,
      fontSize: 20
    },
    button: {
      elevation: 8,
    backgroundColor: '#ffe4c4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 20
    },
    
    loader: {
      alignSelf: 'center',
      justifyContent:"flex-start",
      alignItems: 'center',
      marginVertical: 280,
      fontSize: 40,
      color: '#8b008b',
      fontStyle: 'italic'
    },

    scrollView: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22, 
      backgroundColor: '#00000030'
    },

    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },

    name: {
      fontSize: 15,
      fontWeight: 'bold'
    }
  })

  export default style
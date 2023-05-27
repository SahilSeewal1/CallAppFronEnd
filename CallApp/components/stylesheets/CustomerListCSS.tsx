import { Platform, StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
      paddingTop: 30      
    },

    text: {
      textAlign: 'center',
      fontSize: 30,
      fontWeight: 'bold',
      fontFamily: Platform.select({
        ios: 'Cochin',
        android: 'Lato',
      }),
      color: '#333',
      marginTop: 10
    },

    container2: {
      backgroundColor: '#F5F5F5', 
      marginVertical: 10,
      padding: 10, 
      borderRadius: 8, 
    },

    radioButtonLabel: {
      marginLeft: 10,
      fontSize: 16,
      fontFamily: 'Cochin',
      color: '#000',
    },

    radioButtonInner: {
      height: 12,
      width: 12,
      borderRadius: 6,
      backgroundColor: '#007AFF',
    },

    radioButtonSelected: {
      borderColor: '#007AFF',
    },

    radioButton: {
      height: 24,
      width: 24,
      borderRadius: 12,
      borderWidth: 2,
      borderColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },

    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
    },

    entry: { 
      backgroundColor: '#fff',
      marginBottom: 10,
      width: 350,
      height: 100,
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 8,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },

    block: {
      marginBottom: 2,
      color: '#333',
      fontFamily: 'Cochin',
      fontSize: 20
    },
    button: {
      backgroundColor: '#ffcc80',
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 80,
      justifyContent: 'center',
      alignSelf: 'center',
      marginBottom: 10,
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 3,
      textAlign: 'center',
    },

    buttonText: {
      textAlign: 'center',
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
    },
    
    loader: {
      alignSelf: 'center',
      justifyContent:"flex-start",
      alignItems: 'center',
      marginVertical: 280,
      fontSize: 40,
      fontFamily: 'Cochin',
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
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
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

    contactListText: {
      fontSize: 18,
      fontFamily: 'Cochin',
      marginBottom: 10,
      textAlign: "center",
      color: '#333',
    },

    name: {
      fontSize: 15,
      fontFamily: 'Cochin',
      color: '#333',
      fontWeight: 'bold'
    },

    selectedItemText: {
      marginTop: 10,
      fontSize: 16,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
      color: '#000',
    },
  })

  export default style
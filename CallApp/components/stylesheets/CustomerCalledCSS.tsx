import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textContainer: {
      backgroundColor: '#f2f2f2',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      fontSize: 25,
      fontWeight: 'bold',
    },
    backButton: {
      marginTop: 20
    },
    buttonContainer: {
      backgroundColor: '#00ffff',
      borderRadius: 30,
      paddingVertical: 10,
      paddingHorizontal: 12,
      width: 200,
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
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Cochin',
    },
    
  });

  export default styles 
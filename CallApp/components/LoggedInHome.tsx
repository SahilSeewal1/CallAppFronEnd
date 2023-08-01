import { Button, View, Text } from "react-native";

const LoggedInHome = () => {

  const logoutHandler = async () => {
    const logoutUrl =  "https://collections-login-portal.auth.us-east-1.amazoncognito.com/logout";
    const clientId = "?client_id=ad398u21ijw3s9w3939";
    const redirectUrl = "&logout_uri=http://localhost:8080/api/redirect/logout";

   try {
    const response = await fetch(logoutUrl+clientId+redirectUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(response)
  } catch(error) {console.log(error)}
}
  return(
    <View>
    <Text>Welcome</Text> 
    <Button title="Logout" onPress={logoutHandler}></Button>
    </View>
    )

}

export default LoggedInHome;

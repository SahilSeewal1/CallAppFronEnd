import React, { useEffect, useState } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  Amplify, { AsyncStorage, Hub } from '@aws-amplify/core';
import pkceChallenge from 'react-native-pkce-challenge';

const HomeScreen = () => {
  
    const navigation = useNavigation();

    useEffect(() => {
      const handleDeepLink = async (event) => {

        if (event.url && event.url.includes('?code=')) {
          const code = event.url.match(/code=([^&]*)/)[1];
          const state = event.url.match(/state=([^&]*)/)[1];
          
          console.log("Authorization code ==>", code)
          console.log("Authorization state ==>", state)


          const tokenUrl = `http://localhost:8080/api/tokenExchange?code=${code}`;
  
          const codeV = await AsyncStorage.getItem('code_verifier')
          const originalState = await AsyncStorage.getItem('state')

          console.log("code V: ", codeV)
          console.log("original state: ", originalState)
          try {

            if(originalState != state)
              throw new Error();

            const response = await fetch(tokenUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                'codeVerifier': codeV
              })
            });
  
            console.log("FE response ",response)
            if (response.ok) {
              const data = await response.json();
              
              const { accessToken } = data; // will get username as well
              
              saveTokensToStorage('access_token', accessToken);
              const accessT = await AsyncStorage.getItem('access_token') // store username as well
              console.log("Access T: ", accessT)
              
            } else {
              // Handle the error response from the backend
              console.log('Token exchange failed');
            }
          } catch (error) {
            // Handle any network or other errors
            console.error('Error during token exchange:', error);
          }
        }
      };
  
      const linkUrl = Linking.addEventListener('url', handleDeepLink);
  
      // Clean up the event listener when the component unmounts
      return () => {
        linkUrl.remove();
      };
    }, []);

   const saveTokensToStorage = async (type, item) => {
      try {
      
        if(type == 'code_verifier')
          await AsyncStorage.setItem(type, item);
        else if(type == 'access_token')
          await AsyncStorage.setItem(type, item);
        else if(type == 'state')
          await AsyncStorage.setItem(type, item);  
    } catch (error) {
       console.log('Error saving items:', error);
     }

   };

  const generateState = (length: number) => {
		let result = '';
		let i = length;
		const chars =
			'0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		for (; i > 0; --i)
			result += chars[Math.round(Math.random() * (chars.length - 1))];
		return result;
	}

  const handleSignIn = () => {
    const redirectURI = 'http://localhost:8080/api/redirect/login';

    const challenge = pkceChallenge();
    
    const state = generateState(32);
    const codeVerifier = challenge.codeVerifier
    const codeChallenge = challenge.codeChallenge

    

        saveTokensToStorage("code_verifier", codeVerifier);
        saveTokensToStorage("state", state);

    console.log("code verifier is ", codeVerifier)
    console.log("code challenge  ", codeChallenge)
    console.log("state ", state)

      Linking.openURL(`https://collections-portal.auth.us-east-1.amazoncognito.com/login?redirect_uri=${redirectURI}&response_type=code&client_id=19kungvqs1dmi2q335nfjgta7l&identity_provider=COGNITO&scope=profile%20openid&state=${state}&code_challenge=${codeChallenge}&code_challenge_method=S256`);
    
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default HomeScreen;
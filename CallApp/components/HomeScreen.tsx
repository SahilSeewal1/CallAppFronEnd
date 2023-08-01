import React, { useEffect, useState } from 'react';
import { View, Text, Button, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import  { AsyncStorage, Hub } from '@aws-amplify/core';
import pkceChallenge from 'react-native-pkce-challenge';
// import { CognitoJwtVerifier } from "aws-jwt-verify";


const HomeScreen = () => {
  
    const navigation = useNavigation();
    // const verifier = CognitoJwtVerifier.create({
    //   userPoolId: "us-east-1_e4zL40p6N",
    //   tokenUse: "access",
    //   clientId: "19kungvqs1dmi2q335nfjgta7l",
    // });


    useEffect(() => {
      const handleDeepLink = async (event) => {

        if (event.url && event.url.includes('?code=')) {
          const code = event.url.match(/code=([^&]*)/)[1];
          
          console.log("Authorization code ==>", code)
          const tokenUrl = `http://localhost:8080/api/tokenExchange?code=${code}`;
  
          const codeV = await AsyncStorage.getItem('code_verifier')
          console.log("code V: ", codeV)
          try {
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
              const { accessToken, idToken, refreshToken } = data;
              console.log("accessToken", accessToken);
              console.log("idToken", idToken);
              console.log("refreshToken", refreshToken);

              saveTokensToStorage('access_token', accessToken);
              const accessT = await AsyncStorage.getItem('access_token')
              console.log("Access T: ", accessT)
              // const jwksResponse = await fetch('https://cognito-idp.us-east-1.amazonaws.com/us-east-1_e4zL40p6N/.well-known/jwks.json')
              //  console.log("jwks response ", jwksResponse) 
              // try {
              //     verifier.cacheJwks(jwksResponse.data)
              //     const payload = await verifier.verify(
              //     accessT // the JWT as string
              //   );
              //   console.log("Token is valid. Payload:", payload);
              // } catch(e) {
              //   console.log("Token not valid!", e);
              // }
              
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
    }, [])

    useEffect(() => {
      // Add a listener to handle deep links when the app is opened/resumed from the background
      const handleDeepLink = async (event) => {
      // Extract the deep link URL and parse the query parameters
      const { url } = event;
         
      if (url && url.includes('success')) {
              console.log(url);
              navigation.navigate('LoggedInHome'); // Replace 'LoggedInHome' with the screen you want to navigate to after successful login
              } else {
                // Handle the error response from the backend
                console.log('Token exchange failed');
              }
      }

    const linkState = Linking.addEventListener('url', handleDeepLink);
    // Clean up the event listener when the component unmounts
    return () => {
      linkState.remove(); 
    };
  }, []);


   const saveTokensToStorage = async (type, item) => {
      try {
      
        if(type == 'code_verifier')
          await AsyncStorage.setItem(type, item);
        else if(type == 'access_token')
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
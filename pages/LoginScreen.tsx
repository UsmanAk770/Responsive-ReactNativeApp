import React, { useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface LoginScreenProps {
  navigation: any;
}

const MobileLoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleEmailChange = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(text));
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    if (isValidEmail === false) {
      alert("Email isn't Correct, please enter your Correct Email");
    } else if (email.toLowerCase() === '' && password.length > 0) {
      alert("Email isn't entered, please enter your Email");
    } else if (email.toLowerCase().length > 0 && password === '') {
      alert("Password isn't entered, please enter your Password");
    } else if (email.toLowerCase() === 'usman@gmail.com' && password === 'usman12345') {
      // navigation.navigate('');
      alert('Sign in Successfully!!!');
    } else {
      alert('Entered email/password is incorrect, please try Again!!!');
    }
    // You can handle form submission here, e.g., validate and send data to the server.
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: 'white' }} />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#4EC6A3B2' }}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
              <Text style={styles.welcomeText}>Welcome</Text>
              <Text style={styles.subText}>Start your journey with us.</Text>

              <Image source={require('../assets/logo2.png')} style={styles.logoImage} />

              <TextInput
                placeholder="Username or email"
                keyboardType="email-address"
                clearButtonMode={'always'}
                onChangeText={handleEmailChange}
                style={styles.input}
              />
              <TextInput
                placeholder="Password"
                keyboardType="default"
                clearTextOnFocus
                clearButtonMode={'always'}
                onChangeText={handlePasswordChange}
                secureTextEntry
                style={styles.input}
              />

              <Pressable
                style={({ pressed }) => [
                  styles.signInButton,
                  pressed && { opacity: 1.8, backgroundColor: '#00796B' },
                ]}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </Pressable>

              <Text style={styles.orText}>OR</Text>

              <TouchableOpacity style={styles.registerButton}>
                <Text style={styles.buttonText}>Register Now</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('ForgotPassword')}
                style={styles.forgotPasswordButton}
              >
                <Text style={styles.buttonText}>Forget Password</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default MobileLoginScreen;

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
topBar: {
  flexDirection: 'column',
  backgroundColor: 'white',
  width: '100%',
  height: '3%',
},
scrollContainer: {
  flexGrow: 1,
  justifyContent: 'center',
  alignItems: 'center',
  
  // height:deviceHeight
},
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  alignContent: 'center',
  
},
welcomeText: {
  color: 'white',
  fontSize: deviceWidth < 410 ? 40 : 50,
  fontWeight: 'bold',
  marginTop: '5%'
},
subText: {
  color: 'white',
  fontSize: deviceWidth < 410 ? 18 : 22,
  fontWeight: 'bold',
  marginTop: deviceWidth < 410 ? '3%' : '3%',
},
logoImage: {
  marginTop: deviceWidth < 410 ? '6%' : '6%',
  marginBottom:deviceWidth < 410 ? '5%' : '5%',
  width: deviceWidth < 410 ? 195 : 269,
  height: deviceWidth < 410 ? 120 : 158,
  borderRadius: deviceWidth < 410 ? 120 : 234.5,
},
input: {
  minWidth: deviceWidth < 410 ? '80%' : '80%',
  height: deviceWidth < 410 ? 50 : 60,
  borderColor: '#00D094',
  backgroundColor: 'white',
  borderWidth: 3,
  borderRadius: 12,
  paddingHorizontal: 15,
  fontSize: deviceWidth < 410 ? 16 : 18,
  marginTop: deviceWidth < 410 ? '3%' : '3%',
},
signInButton: {
  backgroundColor: '#4FD1C5',
  padding: deviceWidth < 410 ? 15 : 17,
  borderRadius: 10,
  opacity: 25,
  marginTop: deviceWidth < 410 ? '6%' : '6%',
  justifyContent: 'center',
  alignItems: 'center',
  width: deviceWidth < 410 ? 220 : 250,
},
buttonText: {
  color: 'white',
  fontSize: deviceWidth < 410 ? 16 : 18,
  fontWeight: 'bold',
},
orText: {
  color: 'white',
  fontSize: deviceWidth < 410 ? 16 : 18,
  fontWeight: 'bold',
  marginTop: deviceWidth < 410 ? '3%' : '3%',
},
registerButton: {
  marginTop: deviceWidth < 410 ? '4%' : '5%',
},
forgotPasswordButton: {
  marginTop: deviceWidth < 410 ? '2%' : '2%',
  marginBottom: '5%'
},
});
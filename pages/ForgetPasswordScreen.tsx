import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface ForgetScreenProps {
  navigation: any;
}

const ForgetPasswordScreen: React.FC<ForgetScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleEmailChange = (text: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(text));
    setEmail(text);
  };

  const handleSubmit = () => {
    if (isValidEmail === false) {
      alert("Email isn't Correct, please enter your Correct Email");
    } else if (email.toLowerCase() === '') {
      alert("Email isn't entered, please enter your Email");
    } else {
      alert('We have sent an email to you for Reset your password');
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
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
              }}
            >
              <Text style={styles.titleText}>Forget Password</Text>
              <Text style={styles.subText}>Reset your password to resume</Text>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  source={require('../assets/logo2.png')}
                  style={styles.logoImage}
                />
              </View>
              <View style={{ alignItems: 'center' }}>
                <TextInput
                  placeholder="Username or email"
                  keyboardType="email-address"
                  clearButtonMode={'always'}
                  onChangeText={handleEmailChange}
                  style={styles.input}
                />

                <Pressable
                  style={({ pressed }) => [
                    styles.resetButton,
                    pressed && { opacity: 1.8, backgroundColor: '#00796B' },
                  ]}
                  onPress={handleSubmit}
                >
                  <Text style={styles.buttonText}>Reset</Text>
                </Pressable>

                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{ marginTop: 1 }}
                >
                  <Text style={styles.buttonText2}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

export default ForgetPasswordScreen;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
    fontSize: deviceWidth < 410 ? 30 : 40,
    fontWeight: 'bold',
    marginTop: '5%',
  },
  subText: {
    color: 'white',
    fontSize: deviceWidth < 410 ? 18 : 22,
    fontWeight: 'bold',
    marginTop: deviceWidth < 410 ? '6%' : '6%',
  },
  logoImage: {
    marginTop: deviceWidth < 410 ? '7%' : '7%',
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
    marginTop: deviceWidth < 410 ? '8%' : '8%',
  },
  resetButton: {
    backgroundColor: '#4FD1C5',
    padding: deviceWidth < 410 ? 15 : 17,
    borderRadius: 10,
    opacity: 25,
    marginTop: deviceWidth < 410 ? '8%' : '8%',
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth < 410 ? 220 : 250,
  },
  buttonText: {
    color: 'white',
    fontSize: deviceWidth < 410 ? 16 : 18,
    fontWeight: 'bold',
  },
  buttonText2: {
    color: 'white',
    fontSize: deviceWidth < 410 ? 16 : 18,
    fontWeight: 'bold',
    marginTop: deviceWidth < 410 ? '10%' : '10%',
    marginBottom: '5%',
  },
});
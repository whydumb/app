import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, Platform, Pressable, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useContext, useState } from 'react';
import { signup_data, signup_data2 } from '../../Data/Data';
import Input from '../../components/Input/Input';
import Password from '../../components/Password/Password';
import Button from "../../components/Button/Button";
import { Link, router } from "expo-router";
import ThemeContext from '../../theme/ThemeContext';

const Signup = () => {
  const { theme } = useContext(ThemeContext);
  const [passwordVisibleArray, setPasswordVisibleArray] = useState(
    signup_data2.map(() => false)
  );

  const togglePasswordVisible = (index) => {
    setPasswordVisibleArray(prevState =>
      prevState.map((visible, i) => (i === index ? !visible : visible))
    );
  };

  const verify = () => {
    router.push('verification');
  };

  return (
    <KeyboardAvoidingView
      style={[styles.mainContainer, { backgroundColor: theme.background }]}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={[styles.container, { backgroundColor: theme.background }]}>
          <Text style={[styles.heading, { color: theme.color }]}>Create New Account!</Text>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrolls}>
            <View style={styles.column}>
              <View>
                <View style={styles.input_container}>
                  {signup_data.map((d) => (
                    <Input label={d.label} placeholder={d.placeholder} key={d.id} keyboardType={d.keyboardType} />
                  ))}
                </View>
                <View style={styles.input_container2}>
                  {signup_data2.map((d, index) => (
                    <Password
                      key={d.id}
                      label={d.label}
                      passwordVisible={passwordVisibleArray[index]}
                      setPasswordVisible={() => togglePasswordVisible(index)}
                      placeholder={d.placeholder}
                      keyboardType={d.keyboardType}
                    />
                  ))}
                </View>
              </View>
              <View style={styles.bottom}>
                <Button buttonText="Sign In" onPress={verify} />
              </View>
              <Text style={[styles.account, { color: theme.color }]}>
                Already Have an Account?
                <Link href="/login" style={styles.link}> Login</Link>
              </Text>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexGrow: 1,
  },
  container: {
    paddingTop: Platform.OS === 'web' ? 0 : 50,
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: 'space-between',
  },
  scrolls: {
    flexGrow: 1,
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    lineHeight: 34,
    fontFamily: 'Montserrat_700Bold',
    color: '#000000',
    marginVertical: 20,
    textAlign: 'center',
  },
  input_container: {
    gap: 16,
  },
  input_container2: {
    gap: 16,
    marginTop: 16,
  },
  bottom: {
    marginBottom: Platform.OS === 'web' ? '2%' : '15%',
  },
  account: {
    fontFamily: 'Lato_400Regular',
    width: '100%',
    textAlign: 'center',
    color: '#000000',
    fontSize: 14,
    lineHeight: 19,
    marginBottom: '8%',
  },
  link: {
    color: '#FF007E',
  },
});

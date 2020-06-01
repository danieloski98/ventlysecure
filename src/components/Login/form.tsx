/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import {Formik} from 'formik';
import Icon from 'react-native-vector-icons/Feather';

export default function form(props: any) {
  const [email, setEmailInput] = useState(false);
  const [event, setEventInput] = useState(false);
  return (
    <View style={style.parent}>
      <Formik
        initialValues={{Email: '', EventID: ''}}
        onSubmit={() => console.log('submitted')}>
        {({
          values,
          errors,
          isValid,
          touched,
          handleChange,
          setFieldTouched,
        }) => (
          <View style={style.second}>
            <View style={style.formContainer}>
              <View>
                <Text>Email</Text>
                <View>
                  <Icon name="mail" color="grey" size={26} style={style.icon} />
                  <TextInput
                    value={values.Email}
                    onChangeText={handleChange('Email')}
                    // keyboardType="email-address"
                    style={[
                      style.input,
                      email ? style.inputActive : style.inputInactive,
                    ]}
                    onFocus={() => setEmailInput(!email)}
                    onBlur={() => {
                      setFieldTouched('Email', true);
                      setEmailInput(false);
                    }}
                  />
                </View>
              </View>
              <View style={style.eventTextbox}>
                <Text>EventID</Text>
                <View>
                  <Icon
                    name="log-in"
                    color="grey"
                    size={26}
                    style={style.icon}
                  />
                  <TextInput
                    value={values.EventID}
                    onChangeText={handleChange('EventID')}
                    // keyboardType="web-search"
                    style={[
                      style.input,
                      event ? style.inputActive : style.inputInactive,
                    ]}
                    onFocus={() => setEventInput(!event)}
                    onBlur={() => {
                      setFieldTouched('EventID', true);
                      setEventInput(false);
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={style.buttonHolder}>
              <TouchableHighlight
                style={style.button}
                onPress={() => props.navigation.navigate('dashboard')}>
                <Text style={style.buttonText}>Login</Text>
              </TouchableHighlight>
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
}

const style = StyleSheet.create({
  parent: {
    flex: 1,
  },
  second: {
    display: 'flex',
    flex: 1,
  },
  buttonHolder: {
    height: '20%',
    width: '100%',
  },
  button: {
    flex: 1,
    backgroundColor: '#FF2B3C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  formContainer: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
  },
  input: {
    paddingLeft: 40,
    paddingRight: 5,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
  },
  icon: {
    zIndex: 2,
    marginTop: 18,
    marginLeft: 10,
  },
  inputInactive: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#B8B8B88F',
  },
  inputActive: {
    backgroundColor: '#B8B8B88F',
    borderRadius: 5,
  },
  eventTextbox: {
    marginTop: 40,
  },
});

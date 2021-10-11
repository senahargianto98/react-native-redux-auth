import * as React from 'react';
import {View, Button, TextInput, StyleSheet, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from '../redux/action';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const [email, setemail] = React.useState('');
  const [password, setpassword] = React.useState('');

  const dispatch = useDispatch();
  const userToken = useSelector(data => data.userToken);

  const login = async () => {
    try {
      const postdata = {email: email, password: password};
      const axiosConfig = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };
      const response = await axios.post(
        'http://192.168.1.12:8000/api/login',
        postdata,
        axiosConfig,
      );
      if (response.status === 200) {
        dispatch(setLogin({userToken: 0}))
        AsyncStorage.setItem('userToken', response.data.token);
      }
    } catch (error) {}
  };

  return (
    <View style={style.viewForm}>
      <TextInput
        style={style.textInput}
        placeholder="Username"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        style={style.textInput}
        placeholder="Password"
        value={password}
        onChangeText={setpassword}
        secureTextEntry
      />
      <Button
        title="Set Login"
        onPress={() => login()}
      />
    </View>
  );
};

export default Login;

export const style = StyleSheet.create({
  viewForm: {
    flex: 2,
    padding: 10,
    justifyContent: 'center',
  },
  text: {
    color: 'black',
  },
  textInput: {
    padding: 10,
    fontSize: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    marginBottom: 10,
    backgroundColor: '#dedede',
  },
  button: {
    paddingRight: 60,
    paddingLeft: 60,
  },
});

import * as React from 'react';
import {View, Text, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from '../redux/action';

const Home = () => {
  const dispatch = useDispatch();
  const userToken = useSelector(data => data.userToken);
  const logout = () => {
    AsyncStorage.removeItem('userToken');
    dispatch(setLogin({userToken: null}))
  };
  return (
    <View>
      <Text style={{color: 'black'}}>Test</Text>
      <Button title="Logout" onPress={() => logout()}></Button>
    </View>
  );
};

export default Home;

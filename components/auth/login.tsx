import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';

const Login = ({setActiveScreen}: {setActiveScreen: React.Dispatch<React.SetStateAction<string>>}) => {

  const handleSubmit = () => {
    setActiveScreen("forget");
  };

  return (
    <ScrollView className='' showsVerticalScrollIndicator={false}>
      <Input label='Email Address' placeholder='' />
      <Input label='Password' placeholder='' />
       <Button 
          text='Continue'
       />
    </ScrollView>
  )
}

export default Login;

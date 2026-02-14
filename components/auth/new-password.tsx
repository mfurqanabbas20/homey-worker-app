import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';

const NewPassword = ({setActiveScreen}: {setActiveScreen: React.Dispatch<React.SetStateAction<string>>}) => {
  const handleSubmit = () => {
    setActiveScreen("register");
  };
  return (
    <ScrollView className='' showsVerticalScrollIndicator={false}>
      <Input label='Password' placeholder='' />
      <Input label='Password' placeholder='' />
       <Button 
          text='Save Password'
       />
    </ScrollView>
  )
}

export default NewPassword;


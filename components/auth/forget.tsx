import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../common/Input';
import Button from '../common/Button';

const Forget = ({setActiveScreen}: {setActiveScreen: React.Dispatch<React.SetStateAction<string>>}) => {
  const handleSubmit = () => {
    setActiveScreen("new-password");
  };
  return (
    <ScrollView className='' showsVerticalScrollIndicator={false}>
      <Input label='Email Address' placeholder='' />
       <Button 
          text='Reset Password'
       />
    </ScrollView>
  )
}

export default Forget;


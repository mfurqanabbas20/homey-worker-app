import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Input from '../common/Input';

const Signup = ({setActiveScreen}: {setActiveScreen: React.Dispatch<React.SetStateAction<string>>}) => {

  const handleSubmit = () => {
    setActiveScreen("login");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Input label='Full Name' placeholder='' />
      <Input label='Email Address' placeholder='' />
      <Input label='Current Address' placeholder='' />
      <Input label='Zip Code' placeholder='' />
      {/* convert this into select field */}
      <Input label='State' placeholder='' /> 
      <Input label='State' placeholder='' /> 
      <Input label='State' placeholder='' /> 
      <Input label='State' placeholder='' /> 

      <Input label='Password' placeholder='' />
      <Input label='Confirm Password' placeholder='' />
    </ScrollView>
  )
}

export default Signup;
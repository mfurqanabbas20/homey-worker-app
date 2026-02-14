import React from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import saudiFlag from '@/assets/images/saudiFlag.png';
import { View, Text, ScrollView, Image } from 'react-native';

const Welcome = ({setActiveScreen}: {setActiveScreen: React.Dispatch<React.SetStateAction<string>>}) => {

  const handleSubmit = () => {
    setActiveScreen("otp");
  };

  return (
    <ScrollView className='' showsVerticalScrollIndicator={false}>
       <View className='my-4 bg-white rounded-lg border border-gray-200'>
          <View className='w-[325px] rounded-t-lg flex flex-row items-center'>
            <Image source={saudiFlag} />
            <Text>Saudi Arabia (+966)</Text>
          </View>
          <Input label='Phone number' placeholder='' />
        </View>
       <Button 
          text='Continue'
          onPress={handleSubmit}
       />
    </ScrollView>
  )
}

export default Welcome;

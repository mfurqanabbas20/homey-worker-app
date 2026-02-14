import React from 'react';
import { Pressable, View, Text } from 'react-native';
import { useRouter } from 'expo-router';

const Header = () => {
  const router = useRouter();
  return (
    <View className='flex flex-row items-center justify-start w-full mb-6 mt-2'>
        <Pressable className='w-[40%]' onPress={() => router.back()}>
            <Text>🔙</Text>
        </Pressable>
        <Text className='text-[18px] font-bold'>Text</Text>
    </View>
  )
}

export default Header
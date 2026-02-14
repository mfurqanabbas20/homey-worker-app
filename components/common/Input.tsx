import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
const Input = ({label, placeholder}: {label: string; placeholder: string}) => {
  const [value, setValue] = useState("");
  const isFocused = value.length > 0;
  return (
    <View className='relative rounded-b-lg border border-gray-100'>
      <Text
      className={`${isFocused ? "top-1 text-xs text-gray-500" : "top-3.5 text-base text-gray-400"} absolute left-4`}
      >
        {label}
      </Text>
      <TextInput
        className='w-[323px] h-[56px] px-4'
        placeholder={placeholder}
        onChangeText={setValue}
      />
    </View>
  )
}

export default Input;

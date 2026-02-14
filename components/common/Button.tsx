import React from "react";
import { Pressable, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  text: string;
}

const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity {...props} className="w-[325px] h-[50px] bg-secondary py-[15px] flex items-center justify-center rounded-[16px] my-4">
      <Text className="text-white font-[600] text-sm">{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

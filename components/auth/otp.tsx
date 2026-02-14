import { useRef } from "react";
import { Text, View } from "react-native";
import OTPTextInput from "react-native-otp-textinput";
import Button from "../common/Button";

const Otp = ({setActiveScreen}: {setActiveScreen: React.Dispatch<React.SetStateAction<string>>}) => {
  const optValue = useRef<OTPTextInput>(null);

  const handleSubmit = () => {
    const value = optValue.current;
    console.log("VAlue", value);
    setActiveScreen("register");
  };

  return (
    <View>
      <OTPTextInput
        className="my-8"
        ref={optValue}
        inputCount={4}
        tintColor="#D9D9D9"
        offTintColor="#D9D9D9"
        textInputStyle={{
          width: 50,
          height: 50,
          borderWidth: 2,
          borderColor: "black",
          outlineColor: "black",
          borderRadius: 8,
          elevation: 0,
        }}
      />
      <Button 
        text='Submit'
        onPress={handleSubmit}
      />
      <Text className="font-[400] text-[12px] text-center">
        Code Sent. Resend Code in <Text className="text-secondary">00:50</Text>
      </Text>
    </View>
  );
};

export default Otp;

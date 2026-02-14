import React, { act, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import authLogo from '@/assets/images/authLogo.png';
import { LinearGradient } from 'expo-linear-gradient';
import Otp from '@/components/auth/otp';
import Signup from '@/components/auth/sign-up';
import Login from '@/components/auth/login';
import NewPassword from '@/components/auth/new-password';
import Forget from '@/components/auth/forget';
import Welcome from '@/components/auth/welcome';
import Header from '@/components/common/Header';

const AuthScreen = () => {
  const [activeScreen, setActiveScreen] = useState<string>("welcome");
  return (
    <LinearGradient className='flex-1' locations={[0, 0.3]} colors={["#F9F3E8", "#FFFFFF"]}>
    <SafeAreaView className='flex flex-1 items-center px-8'>
      <Header />
      <View className='bg-[#F2E7D2] size-[120px] rounded-full flex items-center justify-center mt-2'>
        <Image
         source={authLogo}
         className='object-contain w-[55px] h-[40px]'
         />
      </View>
      <View className='flex items-center justify-center'>
        <Text className='font-[700] text-[35px] text-[#1A1A1A]'>
          {
          activeScreen === "welcome"
          ?
          "Welcome"
          :
          activeScreen === "otp"
          ?
          ""
          :
          activeScreen === "register"
          ?
          "Getting Started"
          :
          activeScreen === "login"
          ?
          "Let’s Sign You In"
          :
          ""
          }
        </Text>
        <Text className='text-[#6B7280] text-lg text-center'>
          {
          activeScreen === "welcome"
          ?
          "Enter your phone number to get started."
          :
          activeScreen === "otp"
          ?
          "An Authentecation code has been sent to \n 0311-7879393"
          :
          activeScreen === "register"
          ?
          "Seems you are new here, Let’s set up your profile."
          :
          activeScreen === "login"
          ?
          "Welcome back, you’ve been missed!"
          :
          ""
          }
        </Text>
        
      </View>
      {/* Condition based rendering */}
      {
        activeScreen === "welcome"
        ?
        <Welcome setActiveScreen={setActiveScreen} />
        :
        activeScreen === "otp"
        ?
        <Otp setActiveScreen={setActiveScreen} />
        :
        activeScreen === "register"
        ?
        <Signup setActiveScreen={setActiveScreen} />
        :
        activeScreen === "login"
        ?
        <Login setActiveScreen={setActiveScreen} />
        :
        activeScreen === "forget"
        ?
        <Forget setActiveScreen={setActiveScreen} />
        :
        activeScreen === "new-password"
        ?
        <NewPassword setActiveScreen={setActiveScreen} />
        :
        <View>

        </View>
      }
    </SafeAreaView>
    </LinearGradient>
  )
}

export default AuthScreen;

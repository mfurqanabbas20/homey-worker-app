import { userProfile } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Camera, Check, ChevronLeft } from "lucide-react-native";
import React, { useState } from "react";
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MyProfile = () => {
  const router = useRouter();
  const [firstName, setFirstName] = useState(userProfile.firstName);
  const [lastName, setLastName] = useState(userProfile.lastName);
  const [email, setEmail] = useState(userProfile.email);
  const [phone, setPhone] = useState(userProfile.phone);
  const [title, setTitle] = useState<"mr" | "mrs">("mr");

  return (
    <LinearGradient
      className="flex-1"
      locations={[0, 1]}
      colors={["#FFFFFF", "#F9F3E8"]}
    >
      <SafeAreaView className="flex-1" edges={["top"]}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          {/* Header */}
          <View className="px-5 flex-row items-center py-4">
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-10 h-10 items-center justify-center"
            >
              <ChevronLeft size={24} color="#000" />
            </TouchableOpacity>
            <Text className="flex-1 text-center text-lg font-bold text-gray-900 mr-10">
              My Profile
            </Text>
          </View>

          <ScrollView
            className="flex-1 px-5"
            showsVerticalScrollIndicator={false}
          >
            {/* Profile Picture */}
            <View className="items-center mb-6">
              <View className="relative">
                <Image
                  source={userProfile.avatar}
                  className="w-28 h-28 rounded-full"
                  resizeMode="cover"
                />
                <TouchableOpacity
                  className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-white border-2 border-gray-200 items-center justify-center shadow-sm"
                  style={{
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 2,
                  }}
                >
                  <Camera size={20} color="#C59315" />
                </TouchableOpacity>
              </View>
            </View>

            {/* First Name & Last Name */}
            <View className="flex-row gap-3 mb-4">
              <View className="flex-1">
                <Text className="text-xs text-gray-500 mb-1.5">First Name</Text>
                <TextInput
                  value={firstName}
                  onChangeText={setFirstName}
                  className="bg-white rounded-xl px-4 py-3.5 border border-gray-200 text-base text-gray-900"
                  placeholder="First Name"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
              <View className="flex-1">
                <Text className="text-xs text-gray-500 mb-1.5">Last Name</Text>
                <TextInput
                  value={lastName}
                  onChangeText={setLastName}
                  className="bg-white rounded-xl px-4 py-3.5 border border-gray-200 text-base text-gray-900"
                  placeholder="Last Name"
                  placeholderTextColor="#9CA3AF"
                />
              </View>
            </View>

            {/* Title Selection */}
            <View className="mb-4">
              <Text className="text-sm font-bold text-gray-900 mb-2">
                Title
              </Text>
              <View className="flex-row gap-3">
                <TouchableOpacity
                  onPress={() => setTitle("mr")}
                  className={`flex-1 flex-row items-center bg-white rounded-xl px-4 py-3.5 border-2 ${
                    title === "mr" ? "border-secondary" : "border-gray-200"
                  }`}
                >
                  <View
                    className={`w-5 h-5 rounded-full border-2 items-center justify-center mr-3 ${
                      title === "mr" ? "border-secondary" : "border-gray-300"
                    }`}
                  >
                    {title === "mr" && (
                      <View className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    )}
                  </View>
                  <Text className="text-base font-medium text-gray-900">
                    Mr.
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setTitle("mrs")}
                  className={`flex-1 flex-row items-center bg-white rounded-xl px-4 py-3.5 border-2 ${
                    title === "mrs" ? "border-secondary" : "border-gray-200"
                  }`}
                >
                  <View
                    className={`w-5 h-5 rounded-full border-2 items-center justify-center mr-3 ${
                      title === "mrs" ? "border-secondary" : "border-gray-300"
                    }`}
                  >
                    {title === "mrs" && (
                      <View className="w-2.5 h-2.5 rounded-full bg-secondary" />
                    )}
                  </View>
                  <Text className="text-base font-medium text-gray-900">
                    Mrs.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Email Address */}
            <View className="mb-4">
              <Text className="text-xs text-gray-500 mb-1.5">
                Email Address
              </Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                className="bg-white rounded-xl px-4 py-3.5 border border-gray-200 text-base text-gray-900"
                placeholder="Email Address"
                placeholderTextColor="#9CA3AF"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Phone Number */}
            <View className="mb-8">
              <Text className="text-xs text-gray-500 mb-1.5">Phone Number</Text>
              <View className="flex-row items-center bg-white rounded-xl px-4 py-3.5 border border-gray-200">
                <Image
                  source={require("@/assets/images/saudiFlag.png")}
                  className="w-6 h-6 rounded-full mr-2"
                  resizeMode="cover"
                />
                <Text className="text-base text-gray-900 mr-1">
                  {userProfile.countryCode}
                </Text>
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  className="flex-1 text-base text-gray-900 py-0"
                  placeholder="Phone Number"
                  placeholderTextColor="#9CA3AF"
                  keyboardType="phone-pad"
                />
                <View className="w-6 h-6 rounded-full bg-green-100 items-center justify-center">
                  <Check size={14} color="#22C55E" />
                </View>
              </View>
            </View>

            {/* Edit Button */}
            <TouchableOpacity
              onPress={() => router.back()}
              className="bg-secondary rounded-xl py-4 items-center mb-8"
            >
              <Text className="text-white font-bold text-base">Edit</Text>
            </TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default MyProfile;

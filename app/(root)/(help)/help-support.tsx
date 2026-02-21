import { FontAwesome } from '@expo/vector-icons';
import { useRouter } from "expo-router"; // <-- Navigation ke liye import add kiya hai
import {
  ArrowLeft,
  MessageCircle,
  Phone,
  ChevronRight,
  Users,
  Headphones,
} from "lucide-react-native";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GOLD = "#C89211";
const BG_CREAM = "#FDF9F0";
const BEIGE_LIGHT = "#F5EFE6";

const HelpSupport = () => {
  const router = useRouter(); // <-- Router initialize kiya hai

  return (
    <View className="flex-1" style={{ backgroundColor: BG_CREAM }}>
      <SafeAreaView edges={["top"]} className="flex-1">
        {/* Header */}
        <View className="px-5 py-3 flex-row items-center justify-between">
          <TouchableOpacity onPress={() => router.back()}> {/* <-- Back jane ka function */}
            <ArrowLeft size={24} color="#000" />
          </TouchableOpacity>
          <Text className="text-base font-bold text-gray-900 absolute left-0 right-0 text-center">
            Help & Support
          </Text>
          <View style={{ width: 24 }} />
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* Main Title */}
          <View className="px-5 pt-2 pb-5">
            <Text className="text-2xl font-bold text-gray-900 leading-tight">
              How can we help you{"\n"}today?
            </Text>
          </View>

          {/* Support Card */}
          <View className="px-5 mb-6">
            <View className="bg-white rounded-[28px] overflow-hidden shadow-sm">
              {/* Image with Badge */}
              <View className="relative">
                <Image
                  source={{
                    uri: "https://plus.unsplash.com/premium_photo-1661587794782-c00cae167b5d?q=80&w=1332&auto=format&fit=crop",
                  }}
                  className="w-full"
                  style={{ height: 160 }}
                  resizeMode="cover"
                />
                {/* Online Badge */}
                <View className="absolute bottom-3 left-3 bg-[#4fbf67] px-3 py-1.5 rounded-full flex-row items-center">
                  <View className="w-2 h-2 bg-white rounded-full mr-2" />
                  <Text className="text-white text-xs font-bold">
                    Online Now
                  </Text>
                </View>
              </View>

              {/* Card Content */}
              <View className="p-5">
                {/* Title Row */}
                <View className="flex-row items-center justify-between mb-1">
                  <Text className="text-lg font-bold text-gray-900">
                    Chat with Support
                  </Text>
                  <View
                    className="w-11 h-11 rounded-full items-center justify-center"
                    style={{ backgroundColor: "#C59315" }}
                  >
                    <Headphones size={22} color={BEIGE_LIGHT} strokeWidth={2.5} />
                  </View>
                </View>

                {/* Reply Time */}
                <Text className="text-xs text-gray-500 mb-4">
                  Typical reply time:{" "}
                  <Text className="font-bold" style={{ color: "#EAB308" }}>
                    ~2 mins
                  </Text>
                </Text>

                {/* Start Button */}
                <TouchableOpacity
                  onPress={() => router.push("/support-chat")} // <-- Yahan click karne se Support Chat par jayega
                  className="rounded-2xl py-4 flex-row items-center justify-center mt-2"
                  style={{ backgroundColor: '#C59315' }}
                >
                  <Text className="text-white font-bold text-base mr-2">
                    Start Conversation
                  </Text>
                  <ChevronRight size={18} color="white" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* About Service Provider */}
          <View className="px-5">
            <Text className="text-lg font-bold text-gray-900 mb-5">
              About service provider
            </Text>

            {/* Three Beige Boxes */}
            <View className="flex-row justify-between">
              {/* Report Issue */}
              <View
                className="rounded-[20px] items-center justify-center py-6 px-4"
                style={{ backgroundColor: BEIGE_LIGHT, width: "31%" }}
              >
                <View
                  className="w-12 h-12 rounded-full items-center justify-center mb-3"
                  style={{ backgroundColor: GOLD }}
                >
                  <Users size={24} color="white" />
                </View>
                <Text className="text-xs font-bold text-gray-900 text-center">
                  Report Issue
                </Text>
              </View>

              {/* Call Us */}
              <View
                className="rounded-[20px] items-center justify-center py-6 px-4"
                style={{ backgroundColor: BEIGE_LIGHT, width: "31%" }}
              >
                <View
                  className="w-12 h-12 rounded-full items-center justify-center mb-3"
                  style={{ backgroundColor: GOLD }}
                >
                  <Phone size={24} color="white" />
                </View>
                <Text className="text-xs font-bold text-gray-900 text-center">
                  Call Us
                </Text>
              </View>

              {/* WhatsApp */}
              <View
                className="rounded-[20px] items-center justify-center py-6 px-4"
                style={{ backgroundColor: BEIGE_LIGHT, width: "31%" }}
              >
                <View
                  className="w-12 h-12 rounded-full items-center justify-center mb-3"
                  style={{ backgroundColor: GOLD }}
                >
                  <FontAwesome name="whatsapp" size={26} color="white" />
                </View>
                <Text className="text-xs font-bold text-gray-900 text-center">
                  WhatsApp
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HelpSupport;
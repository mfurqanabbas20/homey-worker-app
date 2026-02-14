import { referralData } from "@/lib/constants/staticData";
import { useRouter } from "expo-router";
import { CheckCircle2, ChevronLeft, Copy } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ReferAndWin = () => {
  const router = useRouter();

  const handleShare = () => {
    // Mock share functionality
  };

  const handleCopy = () => {
    // Mock copy functionality
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4">
        <TouchableOpacity onPress={() => router.back()} className="p-1">
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-bold text-dark mr-6">
          Refer to friend and Win
        </Text>
      </View>

      <ScrollView
        className="flex-1 px-8"
        contentContainerStyle={{ alignItems: "center", paddingTop: 40 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Visual Representation */}
        <View className="w-56 h-56 items-center justify-center relative mb-8">
          <View className="w-48 h-48 bg-[#fdf2d8] rounded-full absolute" />
          <View className="w-32 h-24 bg-secondary rounded-2xl items-center justify-center shadow-lg relative z-10">
            <View className="w-full h-1.5 bg-[#B8860B] absolute top-6" />
            <View className="w-8 h-8 rounded-full border-4 border-[#B8860B] absolute -top-4" />
          </View>
        </View>

        {/* Offer Text */}
        <Text className="text-2xl font-bold text-dark text-center leading-10 mb-8">
          Invite Your friends{"\n"}and get credit{" "}
          <Text className="text-secondary">{referralData.credit}</Text>
        </Text>

        {/* Benefits */}
        <View className="w-full gap-y-6 mb-12">
          {referralData.benefits.map((benefit, index) => (
            <View key={index} className="flex-row items-start">
              <CheckCircle2
                size={24}
                color="#C59315"
                fill="#C59315"
                strokeWidth={1}
              />
              <Text className="flex-1 ml-4 text-sm font-bold text-dark leading-6">
                {benefit}
              </Text>
            </View>
          ))}
        </View>

        {/* Code Box */}
        <View className="w-full bg-[#fdf2d8] border border-dashed border-secondary rounded-2xl p-4 flex-row items-center justify-between mb-8">
          <Text className="text-lg font-bold text-primary ml-2">
            {referralData.code}
          </Text>
          <TouchableOpacity
            onPress={handleCopy}
            className="flex-row items-center"
          >
            <Copy size={20} color="#C59315" className="mr-2" />
            <Text className="text-secondary font-bold text-sm">Copy Code</Text>
          </TouchableOpacity>
        </View>

        {/* Share Button */}
        <TouchableOpacity
          onPress={handleShare}
          className="bg-secondary w-full py-4 items-center rounded-2xl shadow-lg mb-10"
        >
          <Text className="text-white font-bold text-lg">Share Code</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReferAndWin;

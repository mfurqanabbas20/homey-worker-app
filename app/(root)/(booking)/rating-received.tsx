import { ratingReceivedData } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Clock, MessageSquare, Star, ThumbsUp } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const RatingReceived = () => {
    const router = useRouter();

    const handleContinue = () => {
        router.push("/(root)/(tabs)/home");
    };

    return (
        <LinearGradient className="flex-1" colors={["#FFFFFF", "#F9F3E8"]}>
            <SafeAreaView edges={["top"]} className="flex-1">
                <View className="flex-1 px-5 pt-8">
                    {/* Success Icon */}
                    <View className="items-center mb-8">
                        <View className="relative items-center justify-center">
                            {/* Glow effect */}
                            <View className="absolute w-32 h-32 bg-[#C59315] opacity-10 rounded-full" />
                            <View className="absolute w-24 h-24 bg-[#C59315] opacity-20 rounded-full" />

                            {/* Main icon */}
                            <View className="w-20 h-20 bg-[#C59315] rounded-full items-center justify-center">
                                <ThumbsUp size={40} color="white" fill="white" />
                            </View>
                        </View>
                    </View>

                    {/* Title */}
                    <Text className="text-3xl font-bold text-gray-900 text-center mb-2">
                        {ratingReceivedData.title}
                    </Text>
                    <Text className="text-base text-gray-500 text-center mb-8">
                        {ratingReceivedData.message}
                    </Text>

                    {/* Rating Card */}
                    <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
                        {/* Stars */}
                        <View className="flex-row justify-center mb-3">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    size={32}
                                    color="#FFB800"
                                    fill={star <= ratingReceivedData.rating.stars ? "#FFB800" : "white"}
                                    className="mx-1"
                                />
                            ))}
                        </View>

                        <Text className="text-xl font-bold text-gray-900 text-center mb-4">
                            {ratingReceivedData.rating.label}
                        </Text>

                        {/* Review Text */}
                        <View className="bg-[#F9F3E8] rounded-xl p-4 mb-4">
                            <View className="flex-row items-start">
                                <MessageSquare size={20} color="#C59315" className="mr-2 mt-1" />
                                <Text className="flex-1 text-sm text-gray-700 italic leading-5">
                                    "{ratingReceivedData.review.text}"
                                </Text>
                            </View>
                        </View>

                        {/* Customer Info */}
                        <View className="flex-row justify-between items-center">
                            <View>
                                <Text className="text-xs text-gray-500">From</Text>
                                <Text className="text-sm font-semibold text-gray-900">
                                    {ratingReceivedData.review.customerName}
                                </Text>
                            </View>
                            <View className="items-end">
                                <Text className="text-xs text-gray-500">Service</Text>
                                <Text className="text-sm font-semibold text-gray-900">
                                    {ratingReceivedData.review.serviceType}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Timestamp */}
                    <View className="flex-row items-center justify-center mb-4">
                        <Clock size={14} color="#9CA3AF" />
                        <Text className="text-sm text-gray-500 ml-2">
                            {ratingReceivedData.timestamp}
                        </Text>
                    </View>

                    {/* Average Rating Card */}
                    <View className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-[#C59315]">
                        <View className="flex-row items-center justify-between">
                            <Text className="text-sm text-gray-600">
                                {ratingReceivedData.averageRating.label}
                            </Text>
                            <View className="flex-row items-center">
                                <Text className="text-sm font-semibold text-green-600 mr-2">
                                    +{ratingReceivedData.averageRating.increase.toFixed(2)}
                                </Text>
                                <Text className="text-sm text-gray-500">from this rating</Text>
                            </View>
                        </View>

                        <View className="flex-row items-center mt-3">
                            <Text className="text-4xl font-bold text-[#C59315]">
                                {ratingReceivedData.averageRating.current.toFixed(1)}
                            </Text>
                            <Star size={24} color="#FFB800" fill="#FFB800" className="ml-2" />
                        </View>
                    </View>

                    <View className="flex-1" />

                    {/* Continue Button */}
                    <TouchableOpacity
                        onPress={handleContinue}
                        className="bg-[#C59315] rounded-2xl py-4 items-center shadow-lg mb-6"
                    >
                        <Text className="text-white font-bold text-base">Continue</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default RatingReceived;

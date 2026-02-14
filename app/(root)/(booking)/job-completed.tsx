import { jobCompletedData } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Clock, Hash, Home, Star } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const JobCompleted = () => {
    const router = useRouter();

    const handleBackToHome = () => {
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

                            {/* Main icon with celebration */}
                            <View className="w-20 h-20 bg-[#C59315] rounded-full items-center justify-center relative">
                                <Text className="text-4xl">🎉</Text>
                            </View>
                        </View>
                    </View>

                    {/* Title */}
                    <Text className="text-3xl font-bold text-gray-900 text-center mb-2">
                        {jobCompletedData.title}
                    </Text>
                    <Text className="text-base text-gray-500 text-center mb-8">
                        {jobCompletedData.message}
                    </Text>

                    {/* Earnings Card */}
                    <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-[#C59315]">
                        <Text className="text-sm text-gray-600 text-center mb-2">
                            You Earned
                        </Text>
                        <Text className="text-5xl font-bold text-[#C59315] text-center mb-4">
                            {jobCompletedData.earnings.total} {jobCompletedData.earnings.currency}
                        </Text>

                        <View className="flex-row items-center justify-center">
                            <View className="flex-row items-center mr-4">
                                <Text className="text-sm text-gray-600">Base: </Text>
                                <Text className="text-sm font-semibold text-gray-900">
                                    {jobCompletedData.earnings.base} {jobCompletedData.earnings.currency}
                                </Text>
                            </View>
                            <Text className="text-gray-400">+</Text>
                            <View className="flex-row items-center ml-4">
                                <Text className="text-sm text-gray-600">Bonus: </Text>
                                <Text className="text-sm font-semibold text-[#C59315]">
                                    {jobCompletedData.earnings.bonus} {jobCompletedData.earnings.currency}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Job Summary Card */}
                    <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
                        <Text className="text-base font-bold text-gray-900 mb-4">
                            Job Summary
                        </Text>

                        <View className="flex-row items-center mb-3">
                            <View className="bg-[#FFF5E1] w-10 h-10 rounded-full items-center justify-center mr-3">
                                <Text className="text-lg">🔧</Text>
                            </View>
                            <View className="flex-1 flex-row justify-between items-center">
                                <Text className="text-sm text-gray-600">Service Type</Text>
                                <Text className="text-sm font-semibold text-gray-900">
                                    {jobCompletedData.jobSummary.serviceType}
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row items-center mb-3">
                            <View className="bg-[#FFF5E1] w-10 h-10 rounded-full items-center justify-center mr-3">
                                <Clock size={20} color="#C59315" />
                            </View>
                            <View className="flex-1 flex-row justify-between items-center">
                                <Text className="text-sm text-gray-600">Duration</Text>
                                <Text className="text-sm font-semibold text-gray-900">
                                    {jobCompletedData.jobSummary.duration}
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row items-center">
                            <View className="bg-[#FFF5E1] w-10 h-10 rounded-full items-center justify-center mr-3">
                                <Hash size={20} color="#C59315" />
                            </View>
                            <View className="flex-1 flex-row justify-between items-center">
                                <Text className="text-sm text-gray-600">Job ID</Text>
                                <Text className="text-sm font-semibold text-gray-900">
                                    {jobCompletedData.jobSummary.jobId}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Rating Card */}
                    <View className="bg-white rounded-2xl p-5 mb-6 shadow-sm border border-gray-100">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-1">
                                <Text className="text-base font-bold text-gray-900 mb-1">
                                    {jobCompletedData.rating.status}
                                </Text>
                                <Text className="text-sm text-gray-500">
                                    {jobCompletedData.rating.message}
                                </Text>
                            </View>
                            <View className="flex-row">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Star
                                        key={star}
                                        size={20}
                                        color="#FFB800"
                                        fill="white"
                                        className="mx-0.5"
                                    />
                                ))}
                            </View>
                        </View>
                    </View>

                    <View className="flex-1" />

                    {/* Back to Home Button */}
                    <TouchableOpacity
                        onPress={handleBackToHome}
                        className="bg-[#C59315] rounded-2xl py-4 items-center shadow-lg mb-6"
                    >
                        <View className="flex-row items-center">
                            <Home size={20} color="white" />
                            <Text className="text-white font-bold text-base ml-2">
                                Back to Home
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default JobCompleted;

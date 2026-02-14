import { jobArrivedData } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { CheckCircle, Clock, MapPin, Phone, Wrench } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const JobArrived = () => {
    const router = useRouter();

    const handleStartJob = () => {
        router.push("/(root)/(booking)/job-in-progress");
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
                                <CheckCircle size={40} color="white" fill="white" />
                            </View>
                        </View>
                    </View>

                    {/* Title */}
                    <Text className="text-3xl font-bold text-gray-900 text-center mb-2">
                        You've Arrived!
                    </Text>
                    <Text className="text-base text-gray-500 text-center mb-8">
                        Please meet the customer at the location
                    </Text>

                    {/* Location Confirmed Card */}
                    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
                        <View className="flex-row items-start">
                            <View className="bg-[#FFF5E1] w-12 h-12 rounded-full items-center justify-center mr-3">
                                <MapPin size={24} color="#C59315" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm font-bold text-gray-900 mb-1">
                                    {jobArrivedData.location.title}
                                </Text>
                                <Text className="text-sm text-gray-600 leading-5">
                                    {jobArrivedData.location.address}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Job Summary Card */}
                    <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100">
                        <Text className="text-base font-bold text-gray-900 mb-3">
                            Job Summary
                        </Text>

                        <View className="flex-row items-center mb-3">
                            <View className="bg-[#FFF5E1] w-10 h-10 rounded-full items-center justify-center mr-3">
                                <Wrench size={20} color="#C59315" />
                            </View>
                            <View className="flex-1 flex-row justify-between items-center">
                                <Text className="text-sm text-gray-600">Service Type</Text>
                                <Text className="text-sm font-semibold text-gray-900">
                                    {jobArrivedData.jobSummary.serviceType}
                                </Text>
                            </View>
                        </View>

                        <View className="flex-row items-center">
                            <View className="bg-[#FFF5E1] w-10 h-10 rounded-full items-center justify-center mr-3">
                                <Clock size={20} color="#C59315" />
                            </View>
                            <View className="flex-1 flex-row justify-between items-center">
                                <Text className="text-sm text-gray-600">Estimated Duration</Text>
                                <Text className="text-sm font-semibold text-gray-900">
                                    {jobArrivedData.jobSummary.estimatedDuration}
                                </Text>
                            </View>
                        </View>
                    </View>

                    {/* Customer Card */}
                    <View className="bg-white rounded-2xl p-4 mb-6 shadow-sm border border-gray-100">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center flex-1">
                                <Image
                                    source={jobArrivedData.customer.image}
                                    className="w-12 h-12 rounded-full mr-3"
                                />
                                <View className="flex-1">
                                    <Text className="text-base font-bold text-gray-900">
                                        {jobArrivedData.customer.name}
                                    </Text>
                                    <Text className="text-sm text-gray-500">
                                        {jobArrivedData.customer.role}
                                    </Text>
                                </View>
                            </View>

                            <TouchableOpacity className="bg-[#FFF5E1] w-12 h-12 rounded-full items-center justify-center">
                                <Phone size={20} color="#C59315" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View className="flex-1" />

                    {/* Timer Note */}
                    <View className="mb-4">
                        <Text className="text-sm text-gray-500 text-center">
                            {jobArrivedData.timerNote}
                        </Text>
                    </View>

                    {/* Start Job Button */}
                    <TouchableOpacity
                        onPress={handleStartJob}
                        className="bg-[#C59315] rounded-2xl py-4 items-center shadow-lg mb-6"
                    >
                        <View className="flex-row items-center">
                            <Wrench size={20} color="white" />
                            <Text className="text-white font-bold text-base ml-2">
                                Start Job
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default JobArrived;

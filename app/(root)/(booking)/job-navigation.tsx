import { jobNavigationData } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ChevronRight, MapPin, Navigation } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const JobNavigation = () => {
    const router = useRouter();

    const handleArrived = () => {
        router.push("/(root)/(booking)/job-arrived");
    };

    return (
        <LinearGradient className="flex-1" colors={["#FFFFFF", "#F9F3E8"]}>
            <SafeAreaView edges={["top"]} className="flex-1">
                {/* Navigation Instruction Card */}
                <View className="px-5 pt-4">
                    <View className="bg-white rounded-2xl p-4 flex-row items-center shadow-sm border border-gray-100">
                        <View className="bg-[#FFF5E1] w-10 h-10 rounded-full items-center justify-center mr-3">
                            <Navigation size={20} color="#C59315" />
                        </View>
                        <View className="flex-1">
                            <Text className="text-sm font-semibold text-gray-900">
                                {jobNavigationData.instruction}
                            </Text>
                            <Text className="text-xs text-gray-500 mt-1">
                                {jobNavigationData.subInstruction}
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Map Placeholder */}
                <View className="flex-1 mt-4">
                    <View className="flex-1 bg-gray-100 relative">
                        {/* Map placeholder with route visualization */}
                        <View className="absolute inset-0 items-center justify-center">
                            <View className="items-center">
                                <View className="bg-[#C59315] w-16 h-16 rounded-full items-center justify-center mb-4">
                                    <MapPin size={32} color="white" />
                                </View>
                                <Text className="text-gray-500 text-sm">Map View</Text>
                                <Text className="text-gray-400 text-xs mt-1">
                                    Navigation in progress...
                                </Text>
                            </View>
                        </View>

                        {/* Route line decoration */}
                        <View className="absolute left-8 top-20 bottom-40">
                            <View className="w-1 h-full bg-[#C59315] opacity-30 rounded-full" />
                        </View>

                        {/* Start marker */}
                        <View className="absolute left-4 top-16">
                            <View className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg" />
                        </View>

                        {/* End marker */}
                        <View className="absolute left-4 bottom-36">
                            <View className="w-8 h-8 bg-[#C59315] rounded-full border-4 border-white shadow-lg" />
                        </View>
                    </View>
                </View>

                {/* Destination Card */}
                <View className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-2xl">
                    <View className="p-5">
                        <View className="flex-row items-start mb-4">
                            <View className="bg-[#FFF5E1] w-12 h-12 rounded-full items-center justify-center mr-3">
                                <MapPin size={24} color="#C59315" />
                            </View>
                            <View className="flex-1">
                                <Text className="text-base font-bold text-gray-900 mb-1">
                                    {jobNavigationData.destination.name}
                                </Text>
                                <Text className="text-sm text-gray-500">Destination</Text>
                                <View className="bg-green-100 px-3 py-1 rounded-full self-start mt-2">
                                    <Text className="text-xs font-semibold text-green-700">
                                        ● {jobNavigationData.destination.status}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        {/* Distance and ETA */}
                        <View className="flex-row items-center mb-5 bg-[#F9F3E8] rounded-xl p-4">
                            <View className="flex-1 items-center border-r border-gray-300">
                                <Text className="text-2xl font-bold text-gray-900">
                                    {jobNavigationData.distance}
                                </Text>
                                <Text className="text-xs text-gray-500 mt-1">Distance</Text>
                            </View>
                            <View className="flex-1 items-center">
                                <Text className="text-2xl font-bold text-gray-900">
                                    {jobNavigationData.eta}
                                </Text>
                                <Text className="text-xs text-gray-500 mt-1">ETA</Text>
                            </View>
                        </View>

                        {/* I've Arrived Button */}
                        <TouchableOpacity
                            onPress={handleArrived}
                            className="bg-[#C59315] rounded-2xl py-4 flex-row items-center justify-center shadow-lg"
                        >
                            <Text className="text-white font-bold text-base mr-2">
                                I've Arrived
                            </Text>
                            <ChevronRight size={20} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default JobNavigation;

import { jobInProgressData } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { AlertCircle, Camera, CheckCircle2, Clock, Wrench } from "lucide-react-native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const JobInProgress = () => {
    const router = useRouter();

    const handleCompleteJob = () => {
        router.push("/(root)/(booking)/job-completed");
    };

    return (
        <LinearGradient className="flex-1" colors={["#FFFFFF", "#F9F3E8"]}>
            <SafeAreaView edges={["top"]} className="flex-1">
                <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
                    <View className="px-5 pt-4 pb-6">
                        {/* Header */}
                        <View className="flex-row items-center justify-between mb-6">
                            <View className="flex-1">
                                <Text className="text-2xl font-bold text-gray-900">
                                    {jobInProgressData.jobTitle}
                                </Text>
                                <Text className="text-sm text-gray-500 mt-1">
                                    {jobInProgressData.serviceType}
                                </Text>
                            </View>
                            <View className="bg-[#FFF5E1] px-4 py-2 rounded-full">
                                <Text className="text-sm font-semibold text-[#C59315]">
                                    ● {jobInProgressData.status}
                                </Text>
                            </View>
                        </View>

                        {/* Timer Card */}
                        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
                            <View className="flex-row items-center mb-4">
                                <View className="bg-[#FFF5E1] w-10 h-10 rounded-full items-center justify-center mr-3">
                                    <Clock size={20} color="#C59315" />
                                </View>
                                <Text className="text-base font-bold text-gray-900">
                                    Time Elapsed
                                </Text>
                            </View>

                            <View className="flex-row items-center justify-between bg-[#F9F3E8] rounded-xl p-4">
                                <View className="flex-1 items-center border-r border-gray-300">
                                    <Text className="text-3xl font-bold text-gray-900">
                                        {jobInProgressData.timeElapsed}
                                    </Text>
                                    <Text className="text-xs text-gray-500 mt-1">Elapsed</Text>
                                </View>
                                <View className="flex-1 items-center">
                                    <Text className="text-3xl font-bold text-gray-900">
                                        {jobInProgressData.estimatedTime}
                                    </Text>
                                    <Text className="text-xs text-gray-500 mt-1">Estimated</Text>
                                </View>
                            </View>
                        </View>

                        {/* Task Progress Card */}
                        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm border border-gray-100">
                            <View className="flex-row items-center justify-between mb-4">
                                <Text className="text-base font-bold text-gray-900">
                                    Task Progress
                                </Text>
                                <Text className="text-sm font-semibold text-gray-600">
                                    {jobInProgressData.taskProgress.completed}/{jobInProgressData.taskProgress.total}
                                </Text>
                            </View>

                            {/* Progress Bar */}
                            <View className="bg-gray-200 h-2 rounded-full mb-5">
                                <View
                                    className="bg-[#C59315] h-2 rounded-full"
                                    style={{
                                        width: `${(jobInProgressData.taskProgress.completed / jobInProgressData.taskProgress.total) * 100}%`
                                    }}
                                />
                            </View>

                            {/* Task List */}
                            {jobInProgressData.tasks.map((task) => (
                                <View
                                    key={task.id}
                                    className="bg-[#F9F3E8] rounded-xl p-4 mb-3 flex-row items-center"
                                >
                                    <View
                                        className={`w-6 h-6 rounded-full items-center justify-center mr-3 ${task.completed ? "bg-[#C59315]" : "bg-white border-2 border-gray-300"
                                            }`}
                                    >
                                        {task.completed && (
                                            <CheckCircle2 size={16} color="white" fill="white" />
                                        )}
                                    </View>
                                    <Text
                                        className={`flex-1 text-sm ${task.completed
                                                ? "text-gray-900 font-semibold"
                                                : "text-gray-600"
                                            }`}
                                    >
                                        {task.title}
                                    </Text>
                                </View>
                            ))}
                        </View>

                        {/* Action Buttons */}
                        <View className="flex-row justify-between mb-6">
                            <TouchableOpacity className="flex-1 bg-white rounded-xl py-4 items-center mr-2 shadow-sm border border-gray-100">
                                <Camera size={24} color="#C59315" />
                                <Text className="text-xs font-semibold text-gray-700 mt-2">
                                    Take Photo
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-1 bg-white rounded-xl py-4 items-center mx-2 shadow-sm border border-gray-100">
                                <Wrench size={24} color="#C59315" />
                                <Text className="text-xs font-semibold text-gray-700 mt-2">
                                    Add Parts
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity className="flex-1 bg-white rounded-xl py-4 items-center ml-2 shadow-sm border border-gray-100">
                                <AlertCircle size={24} color="#C59315" />
                                <Text className="text-xs font-semibold text-gray-700 mt-2">
                                    Report Issue
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/* Complete Job Button */}
                        <TouchableOpacity
                            onPress={handleCompleteJob}
                            className="bg-[#C59315] rounded-2xl py-4 items-center shadow-lg"
                        >
                            <View className="flex-row items-center">
                                <CheckCircle2 size={20} color="white" />
                                <Text className="text-white font-bold text-base ml-2">
                                    Complete Job
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default JobInProgress;

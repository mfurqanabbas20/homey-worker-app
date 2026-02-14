import { earningsData, userProfile } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { CheckCircle, CreditCard, Star, TrendingUp, Wallet } from "lucide-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Earnings = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  // Find max value for chart scaling
  // const maxAmount = Math.max(...earningsData.chartData.map(d => d.amount));

  return (
    <LinearGradient className="flex-1" colors={["#FFFFFF", "#F9F3E8"]}>
      <SafeAreaView edges={["top"]} className="flex-1">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="px-5 pt-4 pb-6">
            {/* Header */}
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-row items-center">
                <Image
                  source={userProfile.avatar}
                  className="w-12 h-12 rounded-full mr-3"
                />
                <View>
                  <Text className="text-xs text-gray-500">Welcome Back,</Text>
                  <Text className="text-base font-bold text-gray-900">
                    {earningsData.pendingCash}
                  </Text>
                </View>
              </View>

              {/* Language Toggle */}
              <View className="flex-row bg-white rounded-full p-1 shadow-sm border border-gray-100">
                <TouchableOpacity className="bg-[#C59315] px-4 py-2 rounded-full">
                  <Text className="text-white text-xs font-semibold">English</Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-4 py-2">
                  <Text className="text-gray-600 text-xs font-semibold">العربية</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Period Selector */}
            <View className="flex-row bg-white rounded-2xl p-1 mb-6 shadow-sm border border-gray-100">
              <TouchableOpacity
                onPress={() => setSelectedPeriod('daily')}
                className={`flex-1 py-3 rounded-xl ${selectedPeriod === 'daily' ? '' : ''}`}
              >
                <Text className={`text-center text-sm font-semibold ${selectedPeriod === 'daily' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Daily
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedPeriod('weekly')}
                className={`flex-1 py-3 rounded-xl ${selectedPeriod === 'weekly' ? 'bg-[#C59315]' : ''}`}
              >
                <Text className={`text-center text-sm font-semibold ${selectedPeriod === 'weekly' ? 'text-white' : 'text-gray-500'}`}>
                  Weekly
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setSelectedPeriod('monthly')}
                className={`flex-1 py-3 rounded-xl ${selectedPeriod === 'monthly' ? '' : ''}`}
              >
                <Text className={`text-center text-sm font-semibold ${selectedPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                  Monthly
                </Text>
              </TouchableOpacity>
            </View>

            {/* Balance Card */}
            <View className="bg-[#F5E6C8] rounded-3xl p-5 mb-6 shadow-sm border border-[#C59315]/20">
              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center">
                  <View className="bg-[#C59315] w-10 h-10 rounded-full items-center justify-center mr-3">
                    <Wallet size={20} color="white" />
                  </View>
                  <Text className="text-sm font-semibold text-gray-700">
                    Available Balance
                  </Text>
                </View>
                <View className="bg-green-100 w-10 h-10 rounded-full items-center justify-center">
                  <CheckCircle size={20} color="#22C55E" fill="#22C55E" />
                </View>
              </View>

              <Text className="text-4xl font-bold text-gray-900 mb-5">
                {earningsData.currency} {earningsData.availableBalance.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </Text>

              <View className="flex-row items-center justify-between">
                <TouchableOpacity className="flex-1 bg-[#C59315] rounded-xl py-3 mr-2 flex-row items-center justify-center">
                  <CreditCard size={18} color="white" />
                  <Text className="text-white font-bold text-sm ml-2">Withdraw</Text>
                </TouchableOpacity>

                <View className="flex-1 bg-white rounded-xl py-3 ml-2 items-center">
                  <Text className="text-xs text-gray-600">Pending Cash</Text>
                  <Text className="text-sm font-bold text-gray-900">
                    {earningsData.currency} {earningsData.pendingCash.toFixed(2)}
                  </Text>
                </View>
              </View>
            </View>

            {/* Earnings Trend */}
            <View className="mb-6">
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-bold text-gray-900">Earnings Trend</Text>
                <View className="bg-green-100 px-3 py-1 rounded-full flex-row items-center">
                  <TrendingUp size={14} color="#22C55E" />
                  <Text className="text-xs font-semibold text-green-700 ml-1">
                    {earningsData.weeklyTrend.percentage}%
                  </Text>
                </View>
              </View>

              {/* Chart */}
              <View className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <View className="flex-row items-end justify-between h-40">
                  {/* {earningsData.chartData.map((item, index) => {
                    const height = (item.amount / maxAmount) * 100;
                    const isWednesday = item.day === 'Wed';

                    return (
                      <View key={index} className="flex-1 items-center justify-end mx-1">
                        <View
                          className={`w-full rounded-t-lg ${isWednesday ? 'bg-[#C59315]' : 'bg-gray-200'}`}
                          style={{ height: `${height}%` }}
                        />
                        <Text className={`text-xs mt-2 ${isWednesday ? 'font-bold text-[#C59315]' : 'text-gray-500'}`}>
                          {item.label}
                        </Text>
                      </View>
                    );
                  })} */}
                </View>
              </View>
            </View>

            {/* Statistics Cards */}
            <View className="flex-row justify-between mb-6">
              {/* Earnings */}
              <View className="flex-1 bg-white rounded-2xl p-4 mr-2 shadow-sm border border-gray-100 items-center">
                <View className="bg-[#FFF5E1] w-12 h-12 rounded-full items-center justify-center mb-3">
                  <Text className="text-2xl">💰</Text>
                </View>
                <Text className="text-xs text-gray-600 mb-1">EARNINGS</Text>
                <Text className="text-2xl font-bold text-gray-900">
                  {earningsData.statistics.totalEarnings}
                </Text>
                <Text className="text-xs text-gray-500">{earningsData.currency}</Text>
              </View>

              {/* Rating */}
              <View className="flex-1 bg-white rounded-2xl p-4 mx-2 shadow-sm border border-gray-100 items-center">
                <View className="bg-[#FFF5E1] w-12 h-12 rounded-full items-center justify-center mb-3">
                  <Star size={24} color="#C59315" fill="#C59315" />
                </View>
                <Text className="text-xs text-gray-600 mb-1">RATING</Text>
                <Text className="text-2xl font-bold text-gray-900">
                  {earningsData.statistics.rating}
                </Text>
              </View>

              {/* Jobs */}
              <View className="flex-1 bg-white rounded-2xl p-4 ml-2 shadow-sm border border-gray-100 items-center">
                <View className="bg-[#FFF5E1] w-12 h-12 rounded-full items-center justify-center mb-3">
                  <CheckCircle size={24} color="#C59315" fill="#C59315" />
                </View>
                <Text className="text-xs text-gray-600 mb-1">JOBS</Text>
                <Text className="text-2xl font-bold text-gray-900">
                  {earningsData.statistics.totalJobs}
                </Text>
              </View>
            </View>

            {/* Recent Jobs */}
            <View className="mb-6">
              <View className="flex-row items-center justify-between mb-4">
                <Text className="text-lg font-bold text-gray-900">Recent Jobs</Text>
                <TouchableOpacity>
                  <Text className="text-sm font-semibold text-[#C59315]">See All</Text>
                </TouchableOpacity>
              </View>

              {/* {earningsData.recentJobs.map((job) => (
                <View
                  key={job.id}
                  className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100"
                >
                  <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center flex-1">
                      <View className="bg-[#FFF5E1] w-12 h-12 rounded-full items-center justify-center mr-3">
                        <Text className="text-2xl">{job.icon}</Text>
                      </View>
                      <View className="flex-1">
                        <Text className="text-base font-bold text-gray-900">
                          {job.title}
                        </Text>
                        <Text className="text-xs text-gray-500 mt-1">
                          Job {job.jobId} {job.time}
                        </Text>
                      </View>
                    </View>
                    <View className="items-end">
                      <Text className="text-base font-bold text-[#C59315]">
                        +{earningsData.currency} {job.amount.toFixed(2)}
                      </Text>
                      <Text className="text-xs text-green-600 mt-1">
                        {job.status}
                      </Text>
                    </View>
                  </View>
                </View>
              ))} */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Earnings;

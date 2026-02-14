import { workerHomeData, workerProfile } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
    Bell,
    CheckCircle,
    ChevronRight,
    Clock,
    DollarSign,
    Phone,
    Send,
    Star,
} from "lucide-react-native";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GOLD = "#C59315";
const GREEN = "#22C55E";
const LIGHT_GOLD_BG = "#FDF6E7";

const Home = () => {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);
  const { statusMessage, metrics, activeJob, recentActivity } = workerHomeData;

  return (
    <LinearGradient
      className="flex-1"
      locations={[0, 1]}
      colors={["#FFFFFF", "#F9F3E8"]}
    >
      <SafeAreaView edges={["left", "right", "top"]} className="flex-1">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 24 }}
        >
          <View className="px-5 pt-2 pb-4">
            {/* Header: Welcome + Profile + Language */}
            <View className="flex-row items-center justify-between mb-5">
              <View className="flex-row items-center flex-1">
                <Image
                  source={workerProfile.profileImage}
                  className="w-12 h-12 rounded-full mr-3"
                  resizeMode="cover"
                />
                <View>
                  <Text className="text-xs text-gray-500 font-medium">
                    Welcome Back,
                  </Text>
                  <Text
                    className="text-base font-bold"
                    style={{ color: GOLD }}
                  >
                    {workerProfile.name}
                  </Text>
                </View>
              </View>
              <View className="flex-row rounded-xl overflow-hidden border border-gray-200">
                <TouchableOpacity className="bg-[#C59315] px-4 py-2.5">
                  <Text className="text-white font-semibold text-sm">
                    English
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white px-4 py-2.5">
                  <Text className="font-semibold text-sm" style={{ color: GOLD }}>
                    العربية
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Your Status */}
            <View className="bg-white rounded-2xl p-4 mb-4 shadow-sm border border-gray-100 flex-row items-center justify-between">
              <View>
                <Text className="text-base font-bold text-gray-900 mb-0.5">
                  Your Status
                </Text>
                <Text className="text-sm text-gray-600">{statusMessage}</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Text
                  className="text-sm font-semibold"
                  style={{ color: GREEN }}
                >
                  Online
                </Text>
                <Switch
                  value={isOnline}
                  onValueChange={setIsOnline}
                  trackColor={{ false: "#d1d5db", true: GREEN }}
                  thumbColor="#fff"
                />
              </View>
            </View>

            {/* Metrics: Earnings, Rating, Jobs */}
            <View className="flex-row gap-3 mb-4">
              <View
                className="flex-1 rounded-2xl p-4 shadow-sm border border-gray-100"
                style={{ backgroundColor: LIGHT_GOLD_BG }}
              >
                <DollarSign size={20} color={GOLD} style={{ marginBottom: 6 }} />
                <Text className="text-xs text-gray-500 font-medium mb-0.5">
                  EARNINGS
                </Text>
                <Text className="text-base font-bold text-gray-900">
                  {metrics.earnings} SAR
                </Text>
              </View>
              <View
                className="flex-1 rounded-2xl p-4 shadow-sm border border-gray-100"
                style={{ backgroundColor: LIGHT_GOLD_BG }}
              >
                <Star size={20} color={GOLD} style={{ marginBottom: 6 }} />
                <Text className="text-xs text-gray-500 font-medium mb-0.5">
                  RATING
                </Text>
                <Text className="text-base font-bold text-gray-900">
                  {metrics.rating}
                </Text>
              </View>
              <View
                className="flex-1 rounded-2xl p-4 shadow-sm border border-gray-100"
                style={{ backgroundColor: LIGHT_GOLD_BG }}
              >
                <CheckCircle size={20} color={GOLD} style={{ marginBottom: 6 }} />
                <Text className="text-xs text-gray-500 font-medium mb-0.5">
                  JOBS
                </Text>
                <Text className="text-base font-bold text-gray-900">
                  {metrics.jobs}
                </Text>
              </View>
            </View>

            {/* Simulate New Job */}
            <TouchableOpacity className="bg-white rounded-2xl p-4 mb-5 flex-row items-center shadow-sm border border-gray-100">
              <View
                className="w-12 h-12 rounded-xl items-center justify-center mr-4"
                style={{ backgroundColor: LIGHT_GOLD_BG }}
              >
                <Bell size={24} color={GOLD} />
              </View>
              <View className="flex-1">
                <Text className="text-base font-bold text-gray-900">
                  Simulate New Job
                </Text>
                <Text className="text-sm text-gray-500">
                  Tap to see job request
                </Text>
              </View>
              <ChevronRight size={22} color={GOLD} />
            </TouchableOpacity>

            {/* Active Job */}
            <View className="mb-5">
              <View className="flex-row items-center justify-between mb-3">
                <Text className="text-lg font-bold text-gray-900">
                  Active Job
                </Text>
                <View
                  className="px-3 py-1.5 rounded-full"
                  style={{ backgroundColor: GOLD }}
                >
                  <Text className="text-white text-sm font-semibold">
                    {activeJob.status}
                  </Text>
                </View>
              </View>
              <View className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
                <Text className="text-lg font-bold text-gray-900 mb-2">
                  {activeJob.title}
                </Text>
                <View className="flex-row items-center mb-3">
                  <Clock size={18} color="#6B7280" />
                  <Text className="text-sm text-gray-600 ml-2">
                    {activeJob.time}
                  </Text>
                </View>
                <View className="flex-row items-center justify-between mb-4">
                  <View className="flex-row items-center flex-1">
                    <Image
                      source={activeJob.client.image}
                      className="w-10 h-10 rounded-full mr-3"
                      resizeMode="cover"
                    />
                    <View>
                      <Text className="text-sm font-semibold text-gray-900">
                        {activeJob.client.name}
                      </Text>
                      <Text className="text-xs text-gray-500">
                        {activeJob.client.location}
                      </Text>
                    </View>
                  </View>
                  <View className="px-2.5 py-1 rounded-lg bg-[#FDF6E7]">
                    <Text className="text-xs font-semibold text-gray-800">
                      ID: #{activeJob.id}
                    </Text>
                  </View>
                  <TouchableOpacity
                    className="w-10 h-10 rounded-full items-center justify-center ml-2"
                    style={{ backgroundColor: LIGHT_GOLD_BG }}
                  >
                    <Phone size={20} color={GOLD} />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  className="rounded-xl py-3.5 flex-row items-center justify-center"
                  style={{ backgroundColor: GOLD }}
                  onPress={() => router.push("/(root)/(booking)/job-navigation")}
                >
                  <Send size={20} color="white" style={{ marginRight: 8 }} />
                  <Text className="text-white font-bold text-base">
                    Navigate to Site
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Recent Activity */}
            <View>
              <Text className="text-lg font-bold text-gray-900 mb-3">
                Recent Activity
              </Text>
              {recentActivity.map((item) => (
                <View
                  key={item.id}
                  className="bg-white rounded-2xl p-4 mb-3 shadow-sm border border-gray-100 flex-row items-start"
                >
                  <View
                    className="w-10 h-10 rounded-full items-center justify-center mr-3 mt-0.5"
                    style={{ backgroundColor: LIGHT_GOLD_BG }}
                  >
                    {item.type === "review" ? (
                      <Star size={18} color={GOLD} />
                    ) : (
                      <CheckCircle size={18} color={GOLD} />
                    )}
                  </View>
                  <View className="flex-1">
                    <Text className="text-sm font-bold text-gray-900">
                      {item.title}
                    </Text>
                    {"snippet" in item && (
                      <Text className="text-xs text-gray-600 mt-0.5">
                        {(item as { snippet: string }).snippet}
                      </Text>
                    )}
                    {"amount" in item && (
                      <View className="flex-row items-center mt-1 flex-wrap gap-2">
                        <Text className="text-sm font-semibold text-gray-900">
                          {(item as { amount: string }).amount}
                        </Text>
                        <View
                          className="px-2 py-0.5 rounded-full"
                          style={{ backgroundColor: "#DCFCE7" }}
                        >
                          <Text
                            className="text-xs font-semibold"
                            style={{ color: "#166534" }}
                          >
                            {(item as { status: string }).status}
                          </Text>
                        </View>
                      </View>
                    )}
                    {"rating" in item && (
                      <Text className="text-sm font-semibold text-gray-800 mt-0.5">
                        {(item as { rating: string }).rating} ★
                      </Text>
                    )}
                    <Text className="text-xs text-gray-400 mt-1">
                      {item.time}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Home;

import { workerHomeData, workerProfile } from "@/lib/constants/staticData";
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

// --- EXACT COLORS FROM FIGMA IMAGES ---
const GOLD_TEXT = "#C59315";        // Dark Gold for Text
const GOLD_BTN = "#C59315";         // Gold for Buttons
const BG_CREAM = "#FDF9F0";         // Main Screen Background (Lightest Cream)
const METRIC_BG = "#F3E8D3";        // Beige Background for Metrics
const GREEN_TOGGLE = "#22C55E";     // Bright Green for Online Status
const TEXT_DARK = "#1F2937";        // Black/Dark Gray
const CARD_BORDER = "#F3F4F6";      // Very light border for cards

const Home = () => {
  const router = useRouter();
  const [isOnline, setIsOnline] = useState(true);
  const { statusMessage, metrics, activeJob, recentActivity } = workerHomeData;

  return (
    <View className="flex-1" style={{ backgroundColor: BG_CREAM }}>
      <SafeAreaView edges={["top"]} className="flex-1">
        <ScrollView
          className="flex-1 px-5"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* --- HEADER --- */}
          <View className="flex-row items-center justify-between mt-3 mb-6">
            <View className="flex-row items-center flex-1">
              <Image
                source={workerProfile.profileImage}
                className="w-12 h-12 rounded-full mr-3"
                resizeMode="cover"
              />
              <View>
                <Text className="text-xs text-gray-400 font-medium mb-0.5">
                  Welcome Back,
                </Text>
                <Text className="text-base font-bold" style={{ color: GOLD_TEXT }}>
                  {workerProfile.name}
                </Text>
              </View>
            </View>

            {/* Language Toggle (Pill Shape with Border) */}
            <View 
              className="flex-row rounded-full p-1 border"
              style={{ backgroundColor: "#FFFBF2", borderColor: "#ECE0C8" }}
            >
              <TouchableOpacity className="px-4 py-1.5 rounded-full" style={{ backgroundColor: GOLD_BTN }}>
                <Text className="text-white font-bold text-xs">English</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-4 py-1.5 rounded-full">
                <Text className="font-bold text-xs text-gray-800">العربية</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* --- STATUS CARD (Fixed Toggle Design) --- */}
          <View className="bg-white rounded-[24px] p-5 mb-5 shadow-sm flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-bold text-gray-900 mb-1">
                Your Status
              </Text>
              <Text className="text-sm text-gray-400 font-medium">
                {statusMessage}
              </Text>
            </View>

            {/* Custom Green Border Pill for Toggle */}
            <View 
              className="flex-row items-center gap-2 rounded-full pl-3 pr-1 py-1 border"
              style={{ borderColor: GREEN_TOGGLE, backgroundColor: "white" }}
            >
              <Text className="text-xs font-bold" style={{ color: GREEN_TOGGLE }}>
                Online
              </Text>
              <Switch
                value={isOnline}
                onValueChange={setIsOnline}
                trackColor={{ false: "#E5E7EB", true: GREEN_TOGGLE }}
                thumbColor="#FFFFFF"
                // Scaling down slightly to match compact design
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }} 
              />
            </View>
          </View>

          {/* --- METRICS ROW (Exact Beige Color) --- */}
          <View className="flex-row gap-3 mb-5">
            {/* Earnings */}
            <View
              className="flex-1 rounded-[24px] p-4 items-center justify-center py-6"
              style={{ backgroundColor: METRIC_BG }}
            >
              <DollarSign size={22} color={GOLD_TEXT} fill={GOLD_TEXT} style={{ marginBottom: 10 }} />
              <Text className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                EARNINGS
              </Text>
              <Text className="text-xl font-bold text-gray-900">
                {metrics.earnings} <Text className="text-xs font-bold text-gray-900">SAR</Text>
              </Text>
            </View>

            {/* Rating */}
            <View
              className="flex-1 rounded-[24px] p-4 items-center justify-center py-6"
              style={{ backgroundColor: METRIC_BG }}
            >
              <Star size={22} color={GOLD_TEXT} fill={GOLD_TEXT} style={{ marginBottom: 10 }} />
              <Text className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                RATING
              </Text>
              <Text className="text-xl font-bold text-gray-900">
                {metrics.rating}
              </Text>
            </View>

            {/* Jobs */}
            <View
              className="flex-1 rounded-[24px] p-4 items-center justify-center py-6"
              style={{ backgroundColor: METRIC_BG }}
            >
              <CheckCircle size={22} color={GOLD_TEXT} fill={GOLD_TEXT} style={{ marginBottom: 10 }} />
              <Text className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-1">
                JOBS
              </Text>
              <Text className="text-xl font-bold text-gray-900">
                {metrics.jobs}
              </Text>
            </View>
          </View>

          {/* --- SIMULATE JOB --- */}
          <TouchableOpacity className="bg-white rounded-[20px] p-4 mb-8 flex-row items-center shadow-sm">
            <View
              className="w-10 h-10 rounded-xl items-center justify-center mr-4"
              style={{ backgroundColor: GOLD_BTN }}
            >
              <Bell size={20} color="white" fill="white" />
            </View>
            <View className="flex-1">
              <Text className="text-base font-bold text-gray-900">
                Simulate New Job
              </Text>
              <Text className="text-xs text-gray-400 font-medium mt-0.5">
                Tap to see job request
              </Text>
            </View>
            <ChevronRight size={20} color={GOLD_TEXT} />
          </TouchableOpacity>

          {/* --- ACTIVE JOB HEADER --- */}
          <View className="flex-row items-center justify-between mb-3 px-1">
            <Text className="text-xl font-bold text-gray-900">
              Active Job
            </Text>
            <View className="px-3 py-1.5 rounded-full bg-[#F3E8D3]">
              <Text className="text-xs font-bold" style={{ color: GOLD_TEXT }}>
                In Progress
              </Text>
            </View>
          </View>

          {/* --- ACTIVE JOB CARD --- */}
          <View className="bg-white rounded-[28px] p-5 shadow-sm mb-8">
            {/* Title & ID */}
            <View className="flex-row items-start justify-between mb-2">
              <Text className="text-[18px] font-bold text-gray-900 flex-1 mr-2">
                {activeJob.title}
              </Text>
              <View 
                className="px-2.5 py-1 rounded-[8px] border"
                style={{ backgroundColor: "#F2E7D2", borderColor: "#EAD7B6" }}
              >
                <Text className="text-[12px] font-bold" style={{ color: GOLD_TEXT }}>
                  ID: #{activeJob.id}
                </Text>
              </View>
            </View>

            {/* Time */}
            <View className="flex-row items-center mb-6">
              <Clock size={16} color={GOLD_TEXT} />
              <Text className="text-xs text-gray-500 ml-1.5 font-medium">
                09:00 AM-11:30 AM
              </Text>
            </View>

            {/* Client Info */}
            <View className="flex-row items-center justify-between mb-6">
              <View className="flex-row items-center flex-1">
                <Image
                  source={activeJob.client.image}
                  className="w-11 h-11 rounded-full mr-3"
                  resizeMode="cover"
                />
                <View>
                  <Text className="text-[15px] font-bold text-gray-900">
                    {activeJob.client.name}
                  </Text>
                  <Text className="text-xs text-gray-500 font-medium mt-0.5">
                    {activeJob.client.location}
                  </Text>
                </View>
              </View>

              {/* Call Button (Light Beige BG, Gold Icon) */}
              <TouchableOpacity
                className="w-11 h-11 rounded-2xl items-center justify-center ml-2"
                style={{ backgroundColor: "#F3E8D3" }}
              >
                <Phone size={20} color={GOLD_TEXT} strokeWidth={2.5} />
              </TouchableOpacity>
            </View>

            {/* Navigate Button */}
            <TouchableOpacity
              className="rounded-2xl py-4 flex-row items-center justify-center shadow-sm w-full"
              style={{ backgroundColor: GOLD_BTN }}
              onPress={() => router.push("/job-navigation")}
            >
              <Send size={18} color="white" fill="white" style={{ marginRight: 8 }} />
              <Text className="text-white font-bold text-[16px]">
                Navigate to Site
              </Text>
            </TouchableOpacity>
          </View>

          {/* --- RECENT ACTIVITY (Updated Layout) --- */}
          <View>
            <Text className="text-xl font-bold text-gray-900 mb-4 px-1">
              Recent Activity
            </Text>

            {/* Activity Item 1: AC Repair */}
            <View className="bg-[#FDF6E7] rounded-[24px] p-5 mb-3 shadow-sm flex-row items-start">
              <View className="w-10 h-10 rounded-[14px] bg-[#F3E8D3] items-center justify-center mr-3">
                 <CheckCircle size={18} color={GOLD_TEXT} />
              </View>
              <View className="flex-1">
                {/* Top Row: Title + Price */}
                <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-sm font-bold text-gray-900">AC Repair</Text>
                    <Text className="text-sm font-bold" style={{color: GOLD_TEXT}}>+150 SAR</Text>
                </View>
                {/* Bottom Row: Date + Badge */}
                <View className="flex-row justify-between items-center">
                    <Text className="text-xs text-gray-400 font-medium">4 hours ago</Text>
                    <View className="bg-[#D1FAE5] px-2 py-0.5 rounded-full">
                         <Text className="text-[10px] font-bold text-[#10B981]">Done</Text>
                    </View>
                </View>
              </View>
            </View>

             {/* Activity Item 2: Electrical Work */}
             <View className="bg-[#FDF6E7] rounded-[24px] p-5 mb-3 shadow-sm flex-row items-start">
              <View className="w-10 h-10 rounded-[14px] bg-[#F3E8D3] items-center justify-center mr-3">
                 <CheckCircle size={18} color={GOLD_TEXT} />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-sm font-bold text-gray-900">Electrical Work</Text>
                    <Text className="text-sm font-bold" style={{color: GOLD_TEXT}}>+180 SAR</Text>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-xs text-gray-400 font-medium">Yesterday</Text>
                    <View className="bg-[#D1FAE5] px-2 py-0.5 rounded-full">
                         <Text className="text-[10px] font-bold text-[#10B981]">Done</Text>
                    </View>
                </View>
              </View>
            </View>
            
            {/* Activity Item 3: Review */}
            <View className="bg-[#FDF6E7] rounded-[24px] p-5 mb-3 shadow-sm flex-row items-start">
              <View className="w-10 h-10 rounded-[14px] bg-[#F3E8D3] items-center justify-center mr-3">
                 <Star size={18} color={GOLD_TEXT} fill={GOLD_TEXT} />
              </View>
              <View className="flex-1">
                <View className="flex-row justify-between items-center mb-1">
                    <Text className="text-sm font-bold text-gray-900">New Review</Text>
                    <Text className="text-sm font-bold" style={{color: GOLD_TEXT}}>5.0 ★</Text>
                </View>
                <View className="flex-row justify-between items-center">
                    <Text className="text-xs text-gray-500 font-medium italic">"Excellent service, very fast!"</Text>
                    <Text className="text-xs text-gray-400 font-medium">Yesterday</Text>
                </View>
              </View>
            </View>

          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
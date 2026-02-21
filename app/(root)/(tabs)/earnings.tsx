import React, { useState } from "react";
import { 
  Image, 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  View 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { 
  CheckCircle, 
  CreditCard, 
  Star, 
  TrendingUp, 
  Wallet, 
  Briefcase, 
  Lightbulb, 
  Shield, 
  Check   
} from "lucide-react-native";

// --- COLORS ---
const BG_CREAM = "#FDF9F0";
const GOLD_TEXT = "#C59315";
const GOLD_BTN = "#C59315";
const BALANCE_CARD_BG = "#EFE3CA";

// --- DATA ---
const userProfile = {
  avatar: { uri: "https://i.pravatar.cc/150?u=zubair_earnings" },
};

const earningsData = {
  totalBalance: "4,250.00",
  pendingCash: "840.00",
  weeklyTrend: "+ 12.5%",
  currency: "SAR",
  
  chartData: [
    { label: "Mon", amount: 300, active: false },
    { label: "Tue", amount: 450, active: false },
    { label: "Wed", amount: 600, active: true },
    { label: "Thu", amount: 200, active: false },
    { label: "Fri", amount: 350, active: false },
    { label: "Sat", amount: 500, active: false },
    { label: "Sun", amount: 250, active: false },
  ],

  stats: {
    earnings: "125",
    rating: "4.9",
    jobs: "24",
  },

  recentJobs: [
    { 
      id: 1, 
      title: "Light Installation", 
      jobId: "#8199", 
      time: "11:30 AM Yesterday", 
      amount: "85.00", 
      status: "Completed",
      type: "light" 
    },
     { 
      id: 2, 
      title: "AC Repair", 
      jobId: "#8200", 
      time: "10:00 AM Today", 
      amount: "150.00", 
      status: "Completed",
      type: "ac"
    },
  ]
};

const Earnings = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('weekly');
  const maxAmount = Math.max(...earningsData.chartData.map(d => d.amount));

  return (
    <View className="flex-1" style={{ backgroundColor: BG_CREAM }}>
      <SafeAreaView edges={["top"]} className="flex-1">
        <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 40 }}>
          
          {/* --- HEADER --- */}
          <View className="flex-row items-center justify-between mt-3 mb-6">
            <View className="flex-row items-center">
              <Image
                source={userProfile.avatar}
                className="w-12 h-12 rounded-full mr-3 border border-gray-100"
              />
              <View>
                <Text className="text-xs text-gray-400 font-medium">Welcome Back,</Text>
                <Text className="text-[15px] font-bold" style={{ color: GOLD_TEXT }}>
                  Zubair Bin Talha
                </Text>
              </View>
            </View>

            <View 
              className="flex-row rounded-full p-1 border"
              style={{ backgroundColor: "#FFFBF2", borderColor: "#ECE0C8" }}
            >
              <TouchableOpacity className="px-4 py-1.5 rounded-full" style={{ backgroundColor: GOLD_BTN }}>
                <Text className="text-white font-bold text-xs">English</Text>
              </TouchableOpacity>
              <TouchableOpacity className="px-4 py-1.5 rounded-full">
                <Text className="text-gray-800 font-bold text-xs">العربية</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* --- PERIOD SELECTOR --- */}
          <View className="flex-row bg-[#FDF6E7] rounded-[16px] p-1 mb-6 border border-[#F3E8D3]">
            {['daily', 'weekly', 'monthly'].map((period) => (
              <TouchableOpacity
                key={period}
                onPress={() => setSelectedPeriod(period)}
                className={`flex-1 py-2.5 rounded-[12px] ${selectedPeriod === period ? 'bg-[#C59315]' : ''}`}
              >
                <Text className={`text-center text-[13px] font-semibold ${selectedPeriod === period ? 'text-white' : 'text-gray-400'}`}>
                  {period.charAt(0).toUpperCase() + period.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* --- BALANCE CARD --- */}
          <View 
            className="rounded-[28px] p-5 mb-6"
            style={{ backgroundColor: BALANCE_CARD_BG }}
          >
            <View className="flex-row items-center justify-between mb-2">
              <View className="flex-row items-center gap-2">
                 <Wallet size={18} color="#9CA3AF" /> 
                 <Text className="text-sm font-semibold text-gray-500">Available Balance</Text>
              </View>
              
              
              <View 
                className="w-10 h-10 rounded-2xl items-center justify-center relative"
                style={{ backgroundColor: "#4FBF6740" }} // Light Green BG
              >
                {/* 1. Solid Green Shield */}
                <Shield 
                    size={24} 
                    fill="#4FBF67" 
                    color="#4FBF67" 
                />
                <View className="absolute">
                  <Check 
                    size={14} 
                    color="white" 
                    strokeWidth={4} 
                  />
                </View>
              </View>

            </View>

            <Text className="text-[32px] font-bold text-gray-900 mb-6">
              SAR {earningsData.totalBalance}
            </Text>

            <View className="flex-row gap-3">
              <TouchableOpacity 
                className="flex-1 rounded-xl py-3.5 flex-row items-center justify-center"
                style={{ backgroundColor: GOLD_BTN }}
              >
                <CreditCard size={18} color="white" />
                <Text className="text-white font-bold text-sm ml-2">Withdraw</Text>
              </TouchableOpacity>

              <View className="flex-1 rounded-xl py-3.5 items-center border border-gray-400/20 bg-white/40">
                <Text className="text-[10px] text-gray-600 font-medium">Pending Cash</Text>
                <Text className="text-sm font-bold text-gray-900">
                  SAR {earningsData.pendingCash}
                </Text>
              </View>
            </View>
          </View>

          {/* --- EARNINGS TREND CHART --- */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-[17px] font-bold text-gray-900">Earnings Trend</Text>
              <View className="bg-[#DCFCE7] px-2.5 py-1 rounded-full flex-row items-center border border-[#DCFCE7]">
                <TrendingUp size={12} color="#15803D" />
                <Text className="text-xs font-bold text-[#15803D] ml-1">
                  {earningsData.weeklyTrend}
                </Text>
              </View>
            </View>

            <View className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-50">
              <View className="flex-row items-end justify-between h-40 gap-2">
                {earningsData.chartData.map((item, index) => {
                    const heightPercent = maxAmount > 0 ? (item.amount / maxAmount) * 100 : 0;
                    return (
                        <View key={index} className="flex-1 items-center justify-end h-full">
                          <View className="h-32 w-full justify-end rounded-[6px] overflow-hidden bg-gray-50">
                             <View
                                className={`w-full rounded-[6px] ${item.active ? 'bg-[#C59315]' : 'bg-[#E5E7EB]'}`}
                                style={{ height: `${heightPercent}%` }}
                             />
                          </View>
                          <Text className="text-[11px] mt-3 text-gray-400 font-medium">
                            {item.label}
                          </Text>
                        </View>
                    );
                })}
              </View>
            </View>
          </View>

          {/* --- STATISTICS CARDS --- */}
          <View className="flex-row justify-between mb-8 gap-3">
            <View className="flex-1 bg-white rounded-[20px] p-4 items-center justify-center shadow-sm border border-gray-50">
              <View className="mb-2"><Wallet size={24} color={GOLD_BTN} /></View>
              <Text className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">EARNINGS</Text>
              <Text className="text-lg font-bold text-gray-900">{earningsData.stats.earnings} SAR</Text>
            </View>

            <View className="flex-1 bg-white rounded-[20px] p-4 items-center justify-center shadow-sm border border-gray-50">
              <View className="mb-2"><Star size={24} color={GOLD_BTN} fill={GOLD_BTN} /></View>
              <Text className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">RATING</Text>
              <Text className="text-lg font-bold text-gray-900">{earningsData.stats.rating}</Text>
            </View>

            <View className="flex-1 bg-white rounded-[20px] p-4 items-center justify-center shadow-sm border border-gray-50">
              <View className="mb-2"><CheckCircle size={24} color={GOLD_BTN} fill={GOLD_BTN} /></View>
              <Text className="text-[10px] text-gray-400 font-bold uppercase mb-0.5">JOBS</Text>
              <Text className="text-lg font-bold text-gray-900">{earningsData.stats.jobs}</Text>
            </View>
          </View>

          {/* --- RECENT JOBS --- */}
          {earningsData.recentJobs.map((job) => (
             <View key={job.id} className="bg-white rounded-[24px] p-4 mb-3 shadow-sm border border-gray-50 flex-row items-center justify-between">
                <View className="flex-row items-center flex-1">
                    <View 
                        className="w-12 h-12 rounded-[14px] items-center justify-center mr-3" 
                        style={{ backgroundColor: job.type === 'light' ? '#E9D5FF' : '#FEF3C7' }}
                    >
                        {job.type === 'light' ? (
                            <Lightbulb size={20} color="#9333EA" />
                        ) : (
                            <Briefcase size={20} color="#D97706" />
                        )}
                    </View>
                    
                    <View>
                        <Text className="text-[15px] font-bold text-gray-900">{job.title}</Text>
                        <Text className="text-xs text-gray-400 mt-0.5">Job {job.jobId} {job.time}</Text>
                    </View>
                </View>

                <View className="items-end">
                    <Text className="text-[15px] font-bold" style={{ color: GOLD_TEXT }}>
                        +SAR {job.amount}
                    </Text>
                    <Text className="text-[11px] font-bold text-green-600 mt-0.5">
                        {job.status}
                    </Text>
                </View>
             </View>
          ))}

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Earnings;
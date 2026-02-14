import { paymentMethods, walletData } from "@/lib/constants/staticData";
import { useRouter } from "expo-router";
import {
    CheckCircle2,
    ChevronLeft,
    Gift,
    History,
    Plus,
    TrendingDown,
    TrendingUp,
} from "lucide-react-native";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WalletScreen = () => {
  const router = useRouter();
  const [useWalletFirst, setUseWalletFirst] = useState(true);
  const [autoTopUp, setAutoTopUp] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(1);

  const getIcon = (iconName: string) => {
    // Mock icons for payment methods
    return (
      <View className="w-8 h-8 bg-gray-100 rounded items-center justify-center mr-3" />
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4">
        <TouchableOpacity onPress={() => router.back()} className="p-1">
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-bold text-dark mr-6">
          Wallet & Payments
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Total Balance Card */}
        <View className="bg-[#EFE3CF] rounded-[32px] p-6 mb-6 shadow-sm relative overflow-hidden">
          <View className="flex-row items-center justify-between mb-4">
            <View className="flex-row items-center">
              <Gift size={20} color="#C59315" className="mr-2" />
              <Text className="text-gray-600 font-medium">Total Balance</Text>
            </View>
            <CheckCircle2
              size={24}
              color="#4ADE80"
              fill="#E8F9EE"
              strokeWidth={1.5}
            />
          </View>

          <Text className="text-4xl font-bold text-dark mb-4">
            {walletData.balance}
          </Text>

          <View className="flex-row items-center justify-between">
            <Text className="text-xs text-secondary font-medium leading-5">
              Available for immediate use on{"\n"}all services
            </Text>
            <TouchableOpacity className="bg-secondary px-6 py-2.5 rounded-xl">
              <Text className="text-white font-bold">Top Up</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* History & Vouchers Quick Access */}
        <View className="flex-row gap-4 mb-8">
          <TouchableOpacity className="flex-1 bg-white p-4 rounded-[24px] border border-gray-100 items-center flex-row">
            <View className="bg-[#FDF6E7] p-3 rounded-2xl mr-3">
              <History size={20} color="#C59315" />
            </View>
            <View>
              <Text className="text-sm font-bold text-dark">History</Text>
              <Text className="text-[10px] text-gray-400">
                View transactions
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-white p-4 rounded-[24px] border border-gray-100 items-center flex-row">
            <View className="bg-[#FDF6E7] p-3 rounded-2xl mr-3">
              <Gift size={20} color="#C59315" />
            </View>
            <View>
              <Text className="text-sm font-bold text-dark">Vouchers</Text>
              <Text className="text-[10px] text-gray-400">0 Active</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Payment Methods */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-bold text-dark">Payment Methods</Text>
          <TouchableOpacity className="flex-row items-center">
            <Plus size={16} color="#C59315" className="mr-1" />
            <Text className="text-primary font-bold text-sm">Add New</Text>
          </TouchableOpacity>
        </View>

        <View className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden mb-8">
          {paymentMethods.map((method, index) => (
            <TouchableOpacity
              key={method.id}
              onPress={() => setSelectedMethod(method.id)}
              className={`flex-row items-center p-5 ${index !== paymentMethods.length - 1 ? "border-b border-gray-50" : ""}`}
            >
              <View className="w-10 h-6 bg-gray-50 rounded items-center justify-center mr-4">
                <Text className="text-[8px] font-bold text-blue-800">
                  {method.name.substring(0, 3).toUpperCase()}
                </Text>
              </View>
              <Text className="flex-1 text-sm font-medium text-dark">
                {method.name}
              </Text>
              <View
                className={`w-5 h-5 rounded-full border-2 items-center justify-center ${selectedMethod === method.id ? "border-secondary" : "border-gray-200"}`}
              >
                {selectedMethod === method.id && (
                  <View className="w-2.5 h-2.5 rounded-full bg-secondary" />
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Settings */}
        <Text className="text-lg font-bold text-dark mb-4">Settings</Text>
        <View className="bg-white rounded-[32px] border border-gray-100 shadow-sm overflow-hidden mb-8">
          <View className="flex-row items-center p-5 border-b border-gray-50">
            <View className="bg-[#FDF6E7] p-2.5 rounded-xl mr-4">
              <Gift size={18} color="#C59315" />
            </View>
            <Text className="flex-1 text-sm font-medium text-dark">
              Use wallet balance first
            </Text>
            <Switch
              value={useWalletFirst}
              onValueChange={setUseWalletFirst}
              trackColor={{ false: "#767577", true: "#C59315" }}
            />
          </View>
          <View className="flex-row items-center p-5">
            <View className="bg-[#FDF6E7] p-2.5 rounded-xl mr-4">
              <TrendingUp size={18} color="#C59315" />
            </View>
            <View className="flex-1">
              <Text className="text-sm font-medium text-dark">Auto-Top Up</Text>
              <Text className="text-[10px] text-gray-400">
                When balance is low
              </Text>
            </View>
            <Switch
              value={autoTopUp}
              onValueChange={setAutoTopUp}
              trackColor={{ false: "#767577", true: "#C59315" }}
            />
          </View>
        </View>

        {/* Recent Activity */}
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-lg font-bold text-dark">Recent Activity</Text>
          <TouchableOpacity>
            <Text className="text-primary font-bold text-sm">See All</Text>
          </TouchableOpacity>
        </View>

        {walletData.history.map((item) => (
          <View
            key={item.id}
            className="bg-white rounded-[24px] p-4 flex-row items-center mb-3 border border-gray-100 shadow-sm"
          >
            <View
              className={`p-3 rounded-2xl mr-4 ${item.isExpense ? "bg-orange-50" : "bg-green-50"}`}
            >
              {item.isExpense ? (
                <TrendingUp size={20} color="#F97316" />
              ) : (
                <TrendingDown
                  size={20}
                  color="#22C55E"
                  className="rotate-180"
                />
              )}
            </View>
            <View className="flex-1">
              <Text className="text-sm font-bold text-dark">{item.type}</Text>
              <Text className="text-[10px] text-gray-400">{item.date}</Text>
            </View>
            <Text
              className={`text-sm font-bold ${item.isExpense ? "text-orange-500" : "text-green-500"}`}
            >
              {item.amount}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default WalletScreen;

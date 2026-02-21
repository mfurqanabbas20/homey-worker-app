import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {
  Bell,
  Globe,
  FileText,
  CheckCircle,
  Clock,
  ChevronRight,
  LogOut,
  Camera,
  ShieldCheck, // Added for Terms
  HelpCircle,  // Added for Help & Support
} from 'lucide-react-native';
import { useRouter } from 'expo-router'; // Routing ke liye

const Profile = () => {
  const router = useRouter(); // Initialize router

  return (
    <SafeAreaView className="flex-1 bg-[#F5F0E8]">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="flex-1">

        {/* Header */}
        <View className="bg-white pt-12 pb-6">
          <Text className="text-2xl font-bold text-center mb-6 mt-4">
            Profile &amp; Settings
          </Text>

          {/* Profile Image */}
          <View className="items-center mb-4">
            <View className="relative">
              <Image
                source={{ uri: 'https://via.placeholder.com/120' }}
                className="w-28 h-28 rounded-full border-2 border-gray-200"
              />
              <View className="absolute bottom-0 right-0 bg-[#B8860B] rounded-full p-2">
                <Camera size={16} color="white" />
              </View>
            </View>
          </View>

          {/* Name and Info */}
          <Text className="text-xl font-bold text-center text-gray-900 mb-1">
            Zubair Bin Talha
          </Text>
          <Text className="text-center text-sm mb-3">
            <Text className="text-[#B8860B] font-medium">Plumbing Specialist</Text>
            <Text className="text-gray-500"> • Riyadh, KSA</Text>
          </Text>

          {/* Verified Badge */}
          <View className="items-center">
            <View className="bg-green-50 px-5 py-1.5 rounded-full border border-green-300">
              <Text className="text-green-600 text-sm font-medium">
                Verified Technician
              </Text>
            </View>
          </View>
        </View>

        {/* Documents Section */}
        <View className="bg-white mt-2 px-5 py-5">
          <Text className="text-lg font-bold text-gray-900 mb-4">Documents</Text>

          <View className="flex-row items-center bg-green-50 rounded-xl p-4 mb-3">
            <View className="bg-green-100 rounded-full p-3 mr-4">
              <FileText size={20} color="#16a34a" />
            </View>
            <Text className="flex-1 text-sm font-medium text-gray-900">
              National ID
            </Text>
            <View className="flex-row items-center gap-1">
              <CheckCircle size={18} color="#16a34a" />
              <Text className="text-green-600 text-sm font-medium">Verified</Text>
            </View>
          </View>

          <View className="flex-row items-center bg-green-50 rounded-xl p-4 mb-3">
            <View className="bg-green-100 rounded-full p-3 mr-4">
              <FileText size={20} color="#16a34a" />
            </View>
            <Text className="flex-1 text-sm font-medium text-gray-900">
              Professional License
            </Text>
            <View className="flex-row items-center gap-1">
              <CheckCircle size={18} color="#16a34a" />
              <Text className="text-green-600 text-sm font-medium">Verified</Text>
            </View>
          </View>

          <View className="flex-row items-center bg-orange-50 rounded-xl p-4 mb-3">
            <View className="bg-orange-100 rounded-full p-3 mr-4">
              <FileText size={20} color="#ea580c" />
            </View>
            <Text className="flex-1 text-sm font-medium text-gray-900">
              Training Certificate
            </Text>
            <View className="flex-row items-center gap-1">
              <Clock size={18} color="#ea580c" />
              <Text className="text-orange-600 text-sm font-medium">Pending</Text>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View className="bg-white mt-2 px-5 py-5">
          <Text className="text-lg font-bold text-gray-900 mb-4">Settings</Text>

          <TouchableOpacity className="flex-row items-center bg-gray-100 rounded-xl p-4 mb-3">
            <View className="bg-[#FDF5E6] rounded-full p-3 mr-4">
              <Bell size={20} color="#B8860B" />
            </View>
            <Text className="flex-1 text-sm font-medium text-gray-900">
              Notifications
            </Text>
            <View className="bg-[#B8860B] rounded-full w-6 h-6 items-center justify-center mr-2">
              <Text className="text-white text-xs font-bold">3</Text>
            </View>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>

          <View className="flex-row items-center bg-gray-100 rounded-xl p-4">
            <View className="bg-gray-200 rounded-full p-3 mr-4">
              <Globe size={20} color="#6b7280" />
            </View>
            <Text className="flex-1 text-sm font-medium text-gray-900">
              Language
            </Text>
            <View className="flex-row gap-2">
              <TouchableOpacity className="bg-[#B8860B] px-4 py-1.5 rounded-lg">
                <Text className="text-white text-sm font-medium">English</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-200 px-4 py-1.5 rounded-lg">
                <Text className="text-gray-900 text-sm font-medium">العربية</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* --- SUPPORT SECTION (UPDATED) --- */}
        <View className="bg-white mt-2 px-5 py-5">
          <Text className="text-lg font-bold text-gray-900 mb-4">Support</Text>

          {/* Terms & Conditions Button */}
          <TouchableOpacity 
            onPress={() => router.push("/terms-services")} // Make sure this route exists
            className="flex-row items-center bg-gray-100 rounded-xl p-4 mb-3"
          >
            <View className="bg-[#FDF5E6] rounded-full p-3 mr-4">
              <ShieldCheck size={20} color="#B8860B" />
            </View>
            <Text className="flex-1 text-sm font-medium text-gray-900">
              Terms & Conditions
            </Text>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>

          {/* Help & Support Button */}
          <TouchableOpacity 
            onPress={() => router.push("/help-support")} 
            className="flex-row items-center bg-gray-100 rounded-xl p-4"
          >
            <View className="bg-[#FDF5E6] rounded-full p-3 mr-4">
              <HelpCircle size={20} color="#B8860B" />
            </View>
            <Text className="flex-1 text-sm font-medium text-gray-900">
              Help & Support
            </Text>
            <ChevronRight size={20} color="#9ca3af" />
          </TouchableOpacity>
        </View>

        {/* Log Out Button */}
        <View className="px-5 py-4">
          <TouchableOpacity className="flex-row items-center bg-red-50 rounded-xl p-4 border border-red-100">
            <View className="bg-red-100 rounded-full p-3 mr-4">
              <LogOut size={20} color="#dc2626" />
            </View>
            <Text className="text-sm font-medium text-red-600">Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Version */}
        <View className="items-center py-4 pb-8">
          <Text className="text-gray-400 text-xs">WorkerPro v1.0.0</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
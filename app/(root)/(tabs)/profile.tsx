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
  Home,
  Briefcase,
  DollarSign,
  User,
  Camera,
} from 'lucide-react-native';

const Profile = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="bg-white pt-4 pb-6">
          <Text className="text-2xl font-bold text-center mb-8">
            Profile & Settings
          </Text>

          {/* Profile Image */}
          <View className="items-center mb-4">
            <View className="relative">
              <Image
                source={{ uri: 'https://via.placeholder.com/120' }}
                className="w-32 h-32 rounded-full"
              />
              <View className="absolute bottom-0 right-0 bg-yellow-600 rounded-full p-2">
                <Camera size={20} color="white" />
              </View>
            </View>
          </View>

          {/* Name and Info */}
          <Text className="text-2xl font-bold text-center text-gray-900 mb-2">
            Zubair Bin Talha
          </Text>
          <Text className="text-center text-base mb-3">
            <Text className="text-yellow-600 font-medium">Plumbing Specialist</Text>
            <Text className="text-gray-600"> • Riyadh, KSA</Text>
          </Text>

          {/* Verified Badge */}
          <View className="items-center">
            <View className="bg-green-100 px-6 py-2 rounded-full border border-green-300">
              <Text className="text-green-600 font-medium">
                Verified Technician
              </Text>
            </View>
          </View>
        </View>

        {/* Documents Section */}
        <View className="bg-white mt-2 px-5 py-6">
          <Text className="text-xl font-bold text-gray-900 mb-4">Documents</Text>

          {/* National ID */}
          <View className="flex-row items-center bg-green-50 rounded-xl p-4 mb-3">
            <View className="bg-green-200 rounded-full p-3 mr-4">
              <FileText size={24} color="#16a34a" />
            </View>
            <Text className="flex-1 text-base font-medium text-gray-900">
              National ID
            </Text>
            <View className="flex-row items-center">
              <CheckCircle size={20} color="#16a34a" />
              <Text className="text-green-600 font-medium ml-1">Verified</Text>
            </View>
          </View>

          {/* Professional License */}
          <View className="flex-row items-center bg-green-50 rounded-xl p-4 mb-3">
            <View className="bg-green-200 rounded-full p-3 mr-4">
              <FileText size={24} color="#16a34a" />
            </View>
            <Text className="flex-1 text-base font-medium text-gray-900">
              Professional License
            </Text>
            <View className="flex-row items-center">
              <CheckCircle size={20} color="#16a34a" />
              <Text className="text-green-600 font-medium ml-1">Verified</Text>
            </View>
          </View>

          {/* Training Certificate */}
          <View className="flex-row items-center bg-orange-50 rounded-xl p-4">
            <View className="bg-orange-200 rounded-full p-3 mr-4">
              <FileText size={24} color="#ea580c" />
            </View>
            <Text className="flex-1 text-base font-medium text-gray-900">
              Training Certificate
            </Text>
            <View className="flex-row items-center">
              <Clock size={20} color="#ea580c" />
              <Text className="text-orange-600 font-medium ml-1">Pending</Text>
            </View>
          </View>
        </View>

        {/* Settings Section */}
        <View className="bg-white mt-2 px-5 py-6">
          <Text className="text-xl font-bold text-gray-900 mb-4">Settings</Text>

          {/* Notifications */}
          <TouchableOpacity className="flex-row items-center bg-gray-50 rounded-xl p-4 mb-3">
            <View className="bg-yellow-100 rounded-full p-3 mr-4">
              <Bell size={24} color="#ca8a04" />
            </View>
            <Text className="flex-1 text-base font-medium text-gray-900">
              Notifications
            </Text>
            <View className="bg-yellow-600 rounded-full w-6 h-6 items-center justify-center mr-2">
              <Text className="text-white text-xs font-bold">3</Text>
            </View>
            <ChevronRight size={24} color="#9ca3af" />
          </TouchableOpacity>

          {/* Language */}
          <View className="flex-row items-center bg-gray-50 rounded-xl p-4">
            <View className="bg-gray-200 rounded-full p-3 mr-4">
              <Globe size={24} color="#6b7280" />
            </View>
            <Text className="flex-1 text-base font-medium text-gray-900">
              Language
            </Text>
            <View className="flex-row">
              <TouchableOpacity className="bg-yellow-600 px-4 py-2 rounded-lg mr-2">
                <Text className="text-white font-medium">English</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-gray-200 px-4 py-2 rounded-lg">
                <Text className="text-gray-700 font-medium">العربية</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Support Section */}
        <View className="bg-white mt-2 px-5 py-4">
          <Text className="text-xl font-bold text-gray-900">Support</Text>
        </View>

        {/* Log Out Button */}
        <View className="px-5 py-4">
          <TouchableOpacity className="flex-row items-center bg-red-50 rounded-xl p-4 border border-red-100">
            <View className="bg-red-100 rounded-full p-3 mr-4">
              <LogOut size={24} color="#dc2626" />
            </View>
            <Text className="text-base font-medium text-red-600">Log Out</Text>
          </TouchableOpacity>
        </View>

        {/* Version */}
        <View className="items-center py-6">
          <Text className="text-gray-400 text-sm">WorkerPro v1.0.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
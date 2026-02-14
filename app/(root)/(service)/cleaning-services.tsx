import { cleaningServices } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ChevronLeft, Search, Star } from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CleaningServices = () => {
  const router = useRouter();

  const handleServicePress = (serviceId: number) => {
    router.push({
      pathname: "/service-details",
      params: { id: String(serviceId) },
    });
  };

  return (
    <LinearGradient
      className="flex-1"
      locations={[0, 1]}
      colors={["#FFFFFF", "#F9F3E8"]}
    >
      <SafeAreaView className="flex-1">
        {/* Header */}
        <View className="px-5 flex-row items-center justify-between bg-transparent">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center"
          >
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>

          <Text className="text-lg font-bold text-gray-900">
            Cleaning Services
          </Text>

          <TouchableOpacity className="w-10 h-10 items-center justify-center">
            <Search size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Service Cards List */}
        <ScrollView
          className="flex-1 px-5 pt-4"
          showsVerticalScrollIndicator={false}
        >
          {cleaningServices.map((service) => (
            <TouchableOpacity
              key={service.id}
              onPress={() => handleServicePress(service.id)}
              className="bg-white rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100"
              style={{
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.06,
                shadowRadius: 8,
                elevation: 2,
              }}
            >
              {/* Service Image */}
              <Image
                source={service.image}
                className="h-44 w-full"
                resizeMode="cover"
              />

              {/* Service Info */}
              <View className="p-4">
                <View className="flex-row items-center justify-between mb-2">
                  <View className="flex-row items-center flex-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="#FFB800" color="#FFB800" />
                    ))}
                  </View>
                  <Text className="text-xs text-gray-500">
                    ({service.reviews} Reviews)
                  </Text>
                </View>

                <Text className="text-base font-bold text-gray-900 mb-3">
                  {service.name}
                </Text>

                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-lg font-bold text-gray-900">
                      SAR {service.price}
                    </Text>
                    <Text className="text-sm text-gray-400 line-through">
                      SAR {service.originalPrice}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleServicePress(service.id)}
                    className="bg-secondary px-6 py-2.5 rounded-xl"
                  >
                    <Text className="text-white font-semibold text-sm">
                      Add
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          ))}
          <View className="pb-6" />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default CleaningServices;

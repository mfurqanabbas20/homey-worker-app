import { allServices } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { ArrowUpRight, ChevronLeft, Search, Star } from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Services = () => {
  const router = useRouter();

  return (
    <LinearGradient
      className="flex-1"
      locations={[0, 1]}
      colors={["#FFFFFF", "#F7F7FB"]}
    >
      <SafeAreaView className="flex-1">
        <View className="px-5 flex-row items-center justify-between bg-white">
          <TouchableOpacity
            onPress={() => router.back()}
            className="w-10 h-10 items-center justify-center"
          >
            <ChevronLeft size={24} color="#000" />
          </TouchableOpacity>

          <Text className="text-lg font-bold text-gray-900">Our Services</Text>

          <TouchableOpacity className="w-10 h-10 items-center justify-center">
            <Search size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <ScrollView
          className="flex-1 px-5 pt-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="flex-row flex-wrap justify-between pb-6">
            {allServices.map((service) => (
              <View className="w-[48%] rounded-br-[70px] bg-secondary/20 mb-4 border border-gray-100">
                <TouchableOpacity
                  key={service.id}
                  onPress={() => {
                    if (service.slug === "cleaning") {
                      router.push("/cleaning-services");
                    } else {
                      router.push({
                        pathname: "/service-details",
                        params: { id: "1" },
                      });
                    }
                  }}
                >
                  <View className="relative bg-secondary/20">
                    <Image
                      source={service.image}
                      className="h-40 w-full"
                      resizeMode="cover"
                    />
                  </View>
                  <View className="p-4">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-base font-bold text-gray-900">
                        {service.name}
                      </Text>
                      <View className="flex-row items-center">
                        <Star size={14} fill="#FFB800" color="#FFB800" />
                        <Text className="text-xs font-semibold text-gray-700 ml-1">
                          {service.rating}
                        </Text>
                      </View>
                    </View>

                    <View className="flex-row items-center justify-between">
                      <Text className="text-sm font-semibold text-gray-900">
                        {service.price}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity className="bg-[#C59315] w-8 h-8 rounded-full items-center justify-center absolute right-0 bottom-0">
                  <ArrowUpRight size={16} color="#FFF" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Services;

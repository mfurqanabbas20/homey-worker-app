import { serviceDetailsData } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
    ArrowRight,
    Check,
    ChevronLeft,
    Clock,
    Heart,
    Share2,
    ShieldPlus,
    Star,
    Users,
    Zap,
} from "lucide-react-native";
import React, { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

const ServiceDetails = () => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const [readMore, setReadMore] = useState(false);

  const serviceId = id ? parseInt(id, 10) : 1;
  const service =
    serviceDetailsData[serviceId as keyof typeof serviceDetailsData] ||
    serviceDetailsData[1];

  if (!service) return null;

  const aboutText = service.about;
  const truncatedAbout =
    aboutText.length > 120 ? aboutText.slice(0, 120) + "..." : aboutText;

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

          <TouchableOpacity className="w-10 h-10 items-center justify-center"></TouchableOpacity>
        </View>
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Main Image */}
          <View className="px-5 pt-2">
            <Image
              source={service.image}
              className="w-full h-56 rounded-2xl"
              resizeMode="cover"
            />
          </View>

          {/* Title & Actions */}
          <View className="px-5 pt-4">
            <View className="flex-row items-start justify-between">
              <Text className="text-xl font-bold text-gray-900 flex-1">
                {service.name}
              </Text>
              <View className="flex-row gap-2">
                <TouchableOpacity className="w-10 h-10 rounded-full border border-secondary items-center justify-center">
                  <Heart size={20} color="#C59315" />
                </TouchableOpacity>
                <TouchableOpacity className="w-10 h-10 rounded-full border border-secondary items-center justify-center">
                  <Share2 size={20} color="#C59315" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Rating & Verified */}
            <View className="flex-row items-center gap-2 mt-2">
              <Star size={18} fill="#FFB800" color="#FFB800" />
              <Text className="text-base font-semibold text-gray-900">
                {service.rating}
              </Text>
              <Text className="text-sm text-gray-500">
                {service.reviews} Reviews
              </Text>
              <View className="flex-row items-center bg-blue-100 px-2 py-0.5 rounded-full">
                <Check size={12} color="#0867CD" />
                <Text className="text-xs font-medium text-primary ml-1">
                  Verified
                </Text>
              </View>
            </View>

            {/* Summary Cards */}
            <View className="flex-row gap-3 mt-4">
              <View className="flex-1 bg-[#F9F3E8] rounded-2xl p-4">
                <Clock size={24} color="#C59315" />
                <Text className="text-xs text-gray-500 mt-2">Duration</Text>
                <Text className="text-sm font-bold text-gray-900 mt-0.5">
                  {service.duration}
                </Text>
              </View>
              <View className="flex-1 bg-[#F9F3E8] rounded-2xl p-4">
                <Users size={24} color="#C59315" />
                <Text className="text-xs text-gray-500 mt-2">Team</Text>
                <Text className="text-sm font-bold text-gray-900 mt-0.5">
                  {service.team}
                </Text>
              </View>
              <View className="flex-1 bg-[#F9F3E8] rounded-2xl p-4">
                <Zap size={24} color="#C59315" />
                <Text className="text-xs text-gray-500 mt-2">Booking</Text>
                <Text className="text-sm font-bold text-gray-900 mt-0.5">
                  {service.booking}
                </Text>
              </View>
            </View>

            {/* About this service */}
            <View className="mt-6">
              <Text className="text-lg font-bold text-gray-900 mb-2">
                About this service
              </Text>
              <Text className="text-sm text-gray-600 leading-6">
                {readMore ? aboutText : truncatedAbout}
              </Text>
              {aboutText.length > 120 && (
                <TouchableOpacity
                  onPress={() => setReadMore(!readMore)}
                  className="mt-1"
                >
                  <Text className="text-sm font-semibold text-primary">
                    {readMore ? "Read less" : "Read more"}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {/* Service Inclusions */}
            <View className="bg-white rounded-2xl p-4 mt-4 border border-gray-100">
              {service.inclusions.map((item, index) => (
                <View
                  key={index}
                  className="flex-row items-start mb-3 last:mb-0"
                >
                  <View className="w-5 h-5 rounded-full bg-green-100 items-center justify-center mt-0.5">
                    <Check size={12} color="#22C55E" />
                  </View>
                  <Text className="flex-1 text-sm text-gray-700 ml-3">
                    {item}
                  </Text>
                </View>
              ))}
            </View>

            {/* About service provider */}
            <View className="mt-6">
              <Text className="text-lg font-bold text-gray-900 mb-3">
                About service provider
              </Text>
              <TouchableOpacity onPress={() => router.push("/worker-profile")}>
                <View className="bg-white rounded-2xl p-4 flex-row items-center border border-gray-100">
                  <Image
                    source={service.provider.image}
                    className="w-14 h-14 rounded-full"
                    resizeMode="cover"
                  />
                  <View className="ml-3">
                    <Text className="text-base font-bold text-gray-900">
                      {service.provider.name}
                    </Text>
                    <Text className="text-sm text-gray-500">
                      {service.provider.role}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>

            {/* Safety Guarantee */}
            <View className="bg-[#F9F3E8] rounded-2xl p-4 mt-4 flex-row items-center">
              <View className="w-12 h-12 rounded-full bg-secondary/20 items-center justify-center">
                <ShieldPlus size={24} color="#C59315" />
              </View>
              <View className="ml-3 flex-1">
                <Text className="text-base font-bold text-gray-900">
                  Safety Guarantee
                </Text>
                <Text className="text-sm text-gray-600 mt-0.5">
                  {service.safetyGuarantee}
                </Text>
              </View>
            </View>

            {/* Reviews */}
            <View className="mt-6 mb-8">
              <Text className="text-lg font-bold text-gray-900 mb-3">
                Reviews
              </Text>
              {service.reviewsList.map((review) => (
                <View
                  key={review.id}
                  className="bg-white rounded-2xl p-4 mb-3 border border-gray-100"
                >
                  <View className="flex-row items-start justify-between">
                    <View className="flex-row items-center">
                      <Image
                        source={review.avatar}
                        className="w-10 h-10 rounded-full"
                        resizeMode="cover"
                      />
                      <View className="ml-3">
                        <Text className="text-sm font-bold text-gray-900">
                          {review.name}
                        </Text>
                        <View className="flex-row items-center mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              fill="#FFB800"
                              color="#FFB800"
                            />
                          ))}
                        </View>
                      </View>
                    </View>
                    <Text className="text-xs text-gray-500">{review.date}</Text>
                  </View>
                  <Text className="text-sm text-gray-600 mt-3 leading-5">
                    {review.comment}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        </ScrollView>

        {/* Sticky Footer */}
        <View
          className="px-5 py-4 bg-[#F9F3E8] border-t border-gray-200"
          style={{ paddingBottom: Math.max(insets.bottom, 16) }}
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-sm text-gray-500">Total Price</Text>
              <Text className="text-xl font-bold text-gray-900">
                SAR {service.price}
              </Text>
            </View>
            <TouchableOpacity className="bg-secondary flex-row items-center gap-2 px-8 py-3.5 rounded-xl">
              <Text className="text-white font-bold text-base">Book Now</Text>
              <ArrowRight size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ServiceDetails;

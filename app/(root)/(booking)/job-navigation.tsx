import { useRouter } from "expo-router";
import {
  CheckCircle,
  ChevronLeft,
  Clock,
  MapPin,
  Phone,
  Send,
  Wrench,
} from "lucide-react-native";
import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GOLD = "#C89211";
const BG_CREAM = "#FDF9F0";
const BEIGE_LIGHT = "#FEF6E7";

const JobNavigation = () => {
  const router = useRouter();

  const jobData = {
    id: "49202",
    title: "AC Maintenance",
    status: "Accepted",
    estimatedArrival: "12 mins",
    distance: "2.4 km",
    client: {
      name: "Omar Al-Saud",
      role: "Customer",
      image: { uri: "https://i.pravatar.cc/150?img=12" }, // Online image
      address: "King Fahd Road, Al Olaya District, Building 42, Apt 5",
    },
    serviceType: "AC Maintenance",
    scheduledTime: "10:30 AM - 11:30 AM",
    estimatedPay: "180 SAR",
    customerNotes: "Please call before arriving. AC unit is in the living room.",
  };

  return (
    <View className="flex-1" style={{ backgroundColor: BG_CREAM }}>
      <SafeAreaView edges={["top"]} className="flex-1">
        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 32 }}
        >
          {/* Header */}
          <View className="px-5 pt-3 pb-4">
            <View className="flex-row items-start justify-between mb-2">
              <View className="flex-1">
                <Text className="text-xs text-gray-500 font-medium mb-1">
                  ID: #{jobData.id}
                </Text>
                <Text className="text-xl font-bold text-gray-900 mb-0.5">
                  {jobData.title}
                </Text>
              </View>

              {/* Status Badge */}
              <View
                className="px-3 py-1 rounded-full border"
                style={{ backgroundColor: "#F0FDF4", borderColor: "#86EFAC" }}
              >
                <Text className="text-xs font-semibold text-green-600">
                  {jobData.status}
                </Text>
              </View>
            </View>
          </View>

          <View className="px-5">
            {/* Map Card */}
            <View className="bg-white rounded-[28px] overflow-hidden mb-4 shadow-sm">
              {/* Map Placeholder */}
              <View
                style={{ height: 200, backgroundColor: "#E5E7EB" }}
                className="items-center justify-center p-4"
              >
                <View className="w-full h-full relative">
                  {/* Grid lines */}
                  <View className="absolute inset-0">
                    {[40, 80, 120, 160].map((top) => (
                      <View
                        key={`h-${top}`}
                        className="absolute w-full"
                        style={{
                          top,
                          height: 1,
                          backgroundColor: "#D1D5DB",
                          opacity: 0.5,
                        }}
                      />
                    ))}
                    {[60, 120, 180, 240].map((left) => (
                      <View
                        key={`v-${left}`}
                        className="absolute h-full"
                        style={{
                          left,
                          width: 1,
                          backgroundColor: "#D1D5DB",
                          opacity: 0.5,
                        }}
                      />
                    ))}
                  </View>

                  {/* Route path */}
                  <View
                    className="absolute rounded-lg"
                    style={{
                      width: 100,
                      height: 80,
                      borderWidth: 3,
                      borderColor: GOLD,
                      borderRadius: 20,
                      top: 50,
                      left: 80,
                      backgroundColor: "transparent",
                    }}
                  />

                  {/* Start point */}
                  <View
                    className="absolute w-3 h-3 rounded-full"
                    style={{
                      backgroundColor: GOLD,
                      top: 85,
                      left: 115,
                    }}
                  />

                  {/* End point with pin */}
                  <View className="absolute" style={{ top: 40, left: 150 }}>
                    <View
                      className="w-6 h-6 rounded-full items-center justify-center"
                      style={{ backgroundColor: GOLD }}
                    >
                      <MapPin size={14} color="white" />
                    </View>
                  </View>
                </View>
              </View>

              {/* Time and Distance Row */}
              <View className="flex-row p-4 gap-3">
                <View
                  className="flex-1 rounded-2xl p-3 flex-row items-center gap-2"
                  style={{ backgroundColor: BEIGE_LIGHT }}
                >
                  <View
                    className="w-8 h-8 rounded-full items-center justify-center"
                    style={{ backgroundColor: "#FEF3C7" }}
                  >
                    <Clock size={16} color={GOLD} />
                  </View>
                  <View className="flex-1">
                    <Text className="text-[10px] text-gray-500 font-medium mb-0.5">
                      Estimated Arrival
                    </Text>
                    <Text className="text-sm font-bold text-gray-900">
                      {jobData.estimatedArrival}
                    </Text>
                  </View>
                </View>

                <View
                  className="flex-1 rounded-2xl p-3 flex-row items-center gap-2"
                  style={{ backgroundColor: BEIGE_LIGHT }}
                >
                  <View
                    className="w-8 h-8 rounded-full items-center justify-center"
                    style={{ backgroundColor: "#FEF3C7" }}
                  >
                    <MapPin size={16} color={GOLD} />
                  </View>
                  <View className="flex-1">
                    <Text className="text-[10px] text-gray-500 font-medium mb-0.5">
                      Distance
                    </Text>
                    <Text className="text-sm font-bold text-gray-900">
                      {jobData.distance}
                    </Text>
                  </View>
                </View>
              </View>
            </View>

            {/* Client Card */}
            <View className="bg-white rounded-[28px] p-5 mb-4 shadow-sm">
              <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center flex-1">
                  <View
                    className="w-12 h-12 rounded-full mr-3 overflow-hidden"
                    style={{ backgroundColor: "#E5E7EB" }}
                  >
                    <Image
                      source={jobData.client.image}
                      className="w-full h-full"
                      resizeMode="cover"
                    />
                  </View>
                  <View>
                    <Text className="text-base font-bold text-gray-900">
                      {jobData.client.name}
                    </Text>
                    <Text className="text-xs text-gray-500">
                      {jobData.client.role}
                    </Text>
                  </View>
                </View>

                <TouchableOpacity
                  className="w-11 h-11 rounded-2xl items-center justify-center"
                  style={{ backgroundColor: BEIGE_LIGHT }}
                >
                  <Phone size={20} color={GOLD} />
                </TouchableOpacity>
              </View>

              <View className="flex-row items-start gap-2 mb-2">
                <MapPin size={16} color={GOLD} style={{ marginTop: 2 }} />
                <Text className="text-sm text-gray-700 flex-1 leading-5">
                  {jobData.client.address}
                </Text>
              </View>

              <TouchableOpacity className="mt-1">
                <Text className="text-xs font-semibold" style={{ color: GOLD }}>
                  Tap to copy address
                </Text>
              </TouchableOpacity>
            </View>

            {/* Job Details Card */}
            <View className="bg-white rounded-[28px] p-5 mb-4 shadow-sm">
              <Text className="text-base font-bold text-gray-900 mb-4">
                Job Details
              </Text>

              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center gap-3 flex-1">
                  <View
                    className="w-9 h-9 rounded-full items-center justify-center"
                    style={{ backgroundColor: BEIGE_LIGHT }}
                  >
                    <Wrench size={18} color={GOLD} />
                  </View>
                  <Text className="text-sm text-gray-600 font-medium">
                    Service Type
                  </Text>
                </View>
                <Text className="text-sm font-bold text-gray-900">
                  {jobData.serviceType}
                </Text>
              </View>

              <View className="flex-row items-center justify-between mb-4">
                <View className="flex-row items-center gap-3 flex-1">
                  <View
                    className="w-9 h-9 rounded-full items-center justify-center"
                    style={{ backgroundColor: BEIGE_LIGHT }}
                  >
                    <Clock size={18} color={GOLD} />
                  </View>
                  <Text className="text-sm text-gray-600 font-medium">
                    Scheduled Time
                  </Text>
                </View>
                <Text className="text-sm font-bold text-gray-900">
                  {jobData.scheduledTime}
                </Text>
              </View>

              <View className="flex-row items-center justify-between">
                <Text className="text-sm text-gray-600 font-medium">
                  Estimated Pay
                </Text>
                <Text className="text-base font-bold" style={{ color: GOLD }}>
                  {jobData.estimatedPay}
                </Text>
              </View>
            </View>

            {/* Customer Notes */}
            <View
              className="rounded-[24px] p-4 mb-6 flex-row items-start gap-3"
              style={{ backgroundColor: "#F0FDF4" }}
            >
              <CheckCircle size={20} color="#22C55E" style={{ marginTop: 1 }} />
              <View className="flex-1">
                <Text className="text-sm font-bold text-gray-900 mb-1">
                  Customer Notes
                </Text>
                <Text className="text-sm text-gray-600 leading-5">
                  {jobData.customerNotes}
                </Text>
              </View>
            </View>

            {/* Start Navigate Button */}
            <TouchableOpacity
              className="rounded-2xl py-4 flex-row items-center justify-center shadow-sm"
              style={{ backgroundColor: GOLD }}
              onPress={() => router.push('/job-arrived')}
            >
              <Send size={20} color="white" style={{ marginRight: 8 }} />
              <Text className="text-white font-bold text-base">
                Start Navigate
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default JobNavigation;
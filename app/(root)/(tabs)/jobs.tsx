import BookingCard from "@/components/booking/BookingCard";
import BookingTabs from "@/components/booking/BookingTabs";
import { bookingsData } from "@/lib/constants/staticData";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Booking = () => {
  const [activeTab, setActiveTab] = useState<"active" | "past">("active");

  const currentBookings =
    activeTab === "active" ? bookingsData.active : bookingsData.past;

  return (
    <LinearGradient className="flex-1" colors={["#FFFFFF", "#F7F7FB"]}>
      <SafeAreaView edges={["top"]} className="flex-1">
        <View className="px-5 pt-4 pb-2">
          <Text className="text-2xl font-bold text-dark text-center">
            My Bookings
          </Text>
        </View>

        <BookingTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ padding: 20, paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        >
          {currentBookings.map((booking) => (
            <BookingCard key={booking.id} booking={booking} />
          ))}

          {currentBookings.length === 0 && (
            <View className="flex-1 items-center justify-center py-20">
              <Text className="text-gray-400">No bookings found</Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Booking;

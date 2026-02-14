import FaqAccordion from "@/components/help/FaqAccordion";
import { faqsData } from "@/lib/constants/staticData";
import { useRouter } from "expo-router";
import { ChevronLeft, Search } from "lucide-react-native";
import React, { useState } from "react";
import {
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const FAQs = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4">
        <TouchableOpacity
          onPress={() =>
            router.canGoBack()
              ? router.back()
              : router.push("/(root)/(tabs)/home")
          }
          className="p-1"
        >
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-bold text-dark mr-6">
          FAQs
        </Text>
      </View>

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ padding: 20 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Search Bar - Optional in designs but good for UX */}
        <View className="bg-white border border-gray-100 rounded-full px-5 py-3 flex-row items-center shadow-sm mb-6">
          <Search size={20} color="#999" />
          <TextInput
            placeholder="Search for questions..."
            className="ml-3 text-dark flex-1 text-sm"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* FAQ Sections */}
        {Object.entries(faqsData).map(([section, items]) => (
          <View key={section} className="mb-8">
            <Text className="text-lg font-bold text-dark mb-4 ml-1">
              {section}
            </Text>
            {items
              .filter((item) =>
                item.question.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .map((item, index) => (
                <FaqAccordion
                  key={item.id}
                  question={item.question}
                  answer={item.answer}
                  isExpanded={section === "Contact" && index === 1} // Mirroring the Figma design state
                />
              ))}
          </View>
        ))}

        {Object.values(faqsData)
          .flat()
          .filter((item) =>
            item.question.toLowerCase().includes(searchQuery.toLowerCase()),
          ).length === 0 && (
          <View className="items-center justify-center py-20">
            <Text className="text-gray-400">
              No questions found matching "{searchQuery}"
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQs;

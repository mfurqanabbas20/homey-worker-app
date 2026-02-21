import React from "react";
import { 
  ScrollView, 
  Text, 
  TouchableOpacity, 
  View 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

// --- THEME COLORS ---
const BG_CREAM = "#FDF9F0";
const GOLD_TEXT = "#C59315";
const TEXT_DARK = "#111827";

const TermsOfService = () => {
  const router = useRouter(); 

  return (
    <View className="flex-1" style={{ backgroundColor: BG_CREAM }}>
      <SafeAreaView edges={["top"]} className="flex-1">
        
        {/* --- HEADER --- */}
        <View className="flex-row items-center px-5 py-4 bg-white/0 mb-2">
          {/* Back Button */}
          <TouchableOpacity 
            onPress={() => router.back()} 
            className="p-2 -ml-2"
          >
            <ArrowLeft size={24} color={TEXT_DARK} />
          </TouchableOpacity>
          
          {/* Screen Title */}
          <Text className="flex-1 text-center text-[18px] font-bold text-gray-900 pr-8">
            Terms of Service
          </Text>
        </View>

        {/* --- CONTENT --- */}
        <ScrollView 
          className="flex-1 px-5" 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 40 }}
        >
          {/* Last Update Date */}
          <Text className="text-[13px] mb-4 font-medium text-gray-500">
            Last update: 01/09/2026
          </Text>

          {/* Intro Paragraph */}
          <Text className="text-[15px] leading-6 text-gray-800 mb-6">
            Please read these privacy policy, carefully before using our app operated by us.
          </Text>

          {/* Section Sub-Title (Gold) */}
          <Text className="text-[16px] font-bold mb-3" style={{ color: GOLD_TEXT }}>
            Terms of Service
          </Text>

          {/* Main Terms Text */}
          <Text className="text-[15px] leading-6 text-gray-800 mb-4">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </Text>

          <Text className="text-[15px] leading-6 text-gray-800 mb-4">
            If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
          </Text>

          <Text className="text-[15px] leading-6 text-gray-800">
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
          </Text>

        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default TermsOfService;
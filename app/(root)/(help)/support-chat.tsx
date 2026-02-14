import { supportChatMessages } from "@/lib/constants/staticData";
import { useRouter } from "expo-router";
import {
    ChevronLeft,
    EllipsisVertical,
    Image as ImageIcon,
    Mic,
    SendHorizonal,
    Smile,
} from "lucide-react-native";
import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SupportChat = () => {
  const router = useRouter();
  const [message, setMessage] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-background" edges={["top"]}>
      {/* Header */}
      <View className="flex-row items-center px-5 py-4 bg-white border-b border-gray-50">
        <TouchableOpacity onPress={() => router.back()} className="p-1">
          <ChevronLeft size={24} color="#000" />
        </TouchableOpacity>
        <Text className="flex-1 text-center text-lg font-bold text-dark">
          Support Chat
        </Text>
        <TouchableOpacity className="p-1">
          <EllipsisVertical size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 20, paddingBottom: 20 }}
      >
        {supportChatMessages.map((msg, index) => {
          const isUser = msg.type === "user";
          return (
            <View
              key={msg.id}
              className={`mb-6 ${isUser ? "items-end" : "items-start"}`}
            >
              <View
                className={`max-w-[80%] p-4 rounded-[24px] ${
                  isUser
                    ? "bg-secondary rounded-tr-none"
                    : "bg-white rounded-tl-none border border-gray-100"
                }`}
              >
                <Text
                  className={`text-sm leading-6 ${isUser ? "text-white font-medium" : "text-dark"}`}
                >
                  {msg.text}
                </Text>
              </View>
              <Text className="text-[10px] text-gray-400 mt-2 mx-1">
                {msg.time}
              </Text>
            </View>
          );
        })}

        {/* Typing Indicator Mockup */}
        <View className="items-start mb-6">
          <View className="bg-white p-4 rounded-[24px] rounded-tl-none border border-gray-100">
            <View className="flex-row gap-1">
              <View className="w-1.5 h-1.5 rounded-full bg-gray-300" />
              <View className="w-1.5 h-1.5 rounded-full bg-gray-400" />
              <View className="w-1.5 h-1.5 rounded-full bg-gray-300" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Input Bar */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 0}
      >
        <View className="px-5 py-4 bg-white border-t border-gray-50 flex-row items-center gap-3">
          <TouchableOpacity>
            <ImageIcon size={24} color="#C59315" fill="#FDF6E7" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Mic size={24} color="#C59315" fill="#FDF6E7" />
          </TouchableOpacity>

          <View className="flex-1 bg-gray-50 rounded-full px-4 py-2.5 flex-row items-center border border-gray-100">
            <TextInput
              placeholder="Aa"
              className="flex-1 text-sm text-dark h-8"
              value={message}
              onChangeText={setMessage}
            />
            <TouchableOpacity>
              <Smile size={24} color="#C59315" />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            className={`${message ? "bg-secondary" : "bg-gray-100"} p-3 rounded-full`}
          >
            <SendHorizonal size={20} color={message ? "white" : "#9CA3AF"} />
          </TouchableOpacity>
        </View>
        <View className="h-6 bg-white" /> {/* Bottom safe area spacer */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SupportChat;

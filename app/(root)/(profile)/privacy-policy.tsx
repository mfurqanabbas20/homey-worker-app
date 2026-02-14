import { useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PrivacyPolicy = () => {
    const router = useRouter();

    const policyText = `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.

The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`;

    return (
        <SafeAreaView className="flex-1 bg-background" edges={['top']}>
            {/* Header */}
            <View className="flex-row items-center px-5 py-4">
                <TouchableOpacity onPress={() => router.back()} className="p-1">
                    <ChevronLeft size={24} color="#000" />
                </TouchableOpacity>
                <Text className="flex-1 text-center text-lg font-bold text-dark mr-6">Privacy Policy</Text>
            </View>

            <ScrollView className="flex-1" contentContainerStyle={{ padding: 25 }} showsVerticalScrollIndicator={false}>
                <Text className="text-gray-400 text-xs mb-8">Last update: 01/09/2026</Text>

                <Text className="text-base font-bold text-dark mb-6 leading-6">
                    Please read these privacy policy, carefully before using our app operated by us.
                </Text>

                <Text className="text-lg font-bold text-secondary mb-6">Privacy Policy</Text>

                <Text className="text-base text-dark leading-7 text-justify">
                    {policyText}
                </Text>

                {/* Additional segments to fill the page like the mockup */}
                <Text className="text-base text-dark leading-7 text-justify mt-6">
                    {policyText}
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
};

export default PrivacyPolicy;

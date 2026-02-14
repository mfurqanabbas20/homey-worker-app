import { ChevronDown, ChevronUp } from 'lucide-react-native';
import React, { useState } from 'react';
import { LayoutAnimation, Platform, Text, TouchableOpacity, UIManager, View } from 'react-native';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface FaqAccordionProps {
    question: string;
    answer: string;
    isExpanded?: boolean;
}

const FaqAccordion = ({ question, answer, isExpanded: initialExpanded = false }: FaqAccordionProps) => {
    const [isExpanded, setIsExpanded] = useState(initialExpanded);

    const toggleAccordion = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpanded(!isExpanded);
    };

    return (
        <View className="bg-white rounded-[20px] mb-3 border border-gray-100 overflow-hidden shadow-sm">
            <TouchableOpacity
                onPress={toggleAccordion}
                className="flex-row items-center justify-between p-5"
                activeOpacity={0.7}
            >
                <Text className="text-base font-bold text-dark flex-1 pr-4">{question}</Text>
                {isExpanded ? (
                    <ChevronUp size={20} color="#000" />
                ) : (
                    <ChevronDown size={20} color="#000" />
                )}
            </TouchableOpacity>

            {isExpanded && (
                <View className="px-5 pb-5 pt-1">
                    <Text className="text-sm text-gray-400 leading-6">
                        {answer}
                    </Text>
                </View>
            )}
        </View>
    );
};

export default FaqAccordion;

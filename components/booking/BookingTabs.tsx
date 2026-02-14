import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface BookingTabsProps {
    activeTab: 'active' | 'past';
    onTabChange: (tab: 'active' | 'past') => void;
}

const BookingTabs = ({ activeTab, onTabChange }: BookingTabsProps) => {
    return (
        <View className="flex-row border-b border-gray-100">
            <TouchableOpacity
                onPress={() => onTabChange('active')}
                className={`flex-1 py-4 items-center ${activeTab === 'active' ? 'border-b-2 border-secondary' : ''}`}
            >
                <Text
                    className={`text-base font-semibold ${activeTab === 'active' ? 'text-secondary' : 'text-gray-500'}`}
                >
                    Active Bookings
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => onTabChange('past')}
                className={`flex-1 py-4 items-center ${activeTab === 'past' ? 'border-b-2 border-secondary' : ''}`}
            >
                <Text
                    className={`text-base font-semibold ${activeTab === 'past' ? 'text-secondary' : 'text-gray-500'}`}
                >
                    Past Bookings
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default BookingTabs;

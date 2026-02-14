import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import RatingStars from '../common/RatingStars';

interface BookingCardProps {
    booking: {
        id: number;
        name: string;
        orderId: string;
        serviceType: string;
        status: string;
        statusColor: string;
        statusText: string;
        date: string;
        image: any;
        price?: number;
        rating?: number;
        provider?: {
            name: string;
            rating?: number;
            image: any;
        };
    };
}

const BookingCard = ({ booking }: BookingCardProps) => {
    const router = useRouter();

    const handleAction = () => {
        if (booking.status === 'On the way') {
            router.push('/track-booking');
        } else {
            router.push({
                pathname: '/booking-details',
                params: { id: booking.id }
            });
        }
    };

    return (
        <View className="bg-white rounded-[20px] p-4 mb-4 shadow-sm border border-gray-50">
            <View className="flex-row">
                <Image
                    source={booking.image}
                    className="w-20 h-20 rounded-[15px]"
                />
                <View className="flex-1 ml-4 justify-center">
                    <View className="flex-row items-center justify-between mb-1">
                        <View className="px-2 py-0.5 rounded-full" style={{ backgroundColor: booking.statusColor }}>
                            <Text className="text-[10px] font-medium" style={{ color: booking.statusText }}>{booking.status}</Text>
                        </View>
                    </View>
                    <Text className="text-base font-bold text-dark">{booking.name}</Text>
                    <Text className="text-xs text-gray-500 mt-0.5">
                        Order #{booking.orderId} • {booking.serviceType}
                    </Text>
                    <Text className="text-xs text-secondary font-medium mt-1">{booking.date}</Text>
                </View>
            </View>

            <View className="h-[1px] bg-gray-100 my-4" />

            {booking.provider ? (
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center">
                        <Image
                            source={booking.provider.image}
                            className="w-10 h-10 rounded-full"
                        />
                        <View className="ml-3">
                            <Text className="text-sm font-bold text-dark">{booking.provider.name}</Text>
                            {booking.provider.rating && (
                                <View className="flex-row items-center mt-0.5">
                                    <RatingStars rating={1} maxStars={1} size={12} />
                                    <Text className="text-[10px] text-gray-500 ml-1">{booking.provider.rating}</Text>
                                </View>
                            )}
                        </View>
                    </View>

                    <TouchableOpacity
                        onPress={handleAction}
                        className="bg-secondary px-6 py-2.5 rounded-[12px]"
                    >
                        <Text className="text-white text-xs font-bold">
                            {booking.status === 'On the way' ? 'Track Pro' : 'View Details'}
                        </Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity
                    onPress={handleAction}
                    className="bg-secondary w-full py-3 items-center rounded-[12px]"
                >
                    <Text className="text-white text-sm font-bold">View Details</Text>
                </TouchableOpacity>
            )}
        </View>
    );
};

export default BookingCard;

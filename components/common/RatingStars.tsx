import { Star } from 'lucide-react-native';
import React from 'react';
import { View } from 'react-native';

interface RatingStarsProps {
    rating: number;
    maxStars?: number;
    size?: number;
    color?: string;
}

const RatingStars = ({ rating, maxStars = 5, size = 16, color = "#C59315" }: RatingStarsProps) => {
    return (
        <View className="flex-row gap-x-0.5">
            {[...Array(maxStars)].map((_, index) => (
                <Star
                    key={index}
                    size={size}
                    color={color}
                    fill={index < Math.floor(rating) ? color : "transparent"}
                    strokeWidth={1.5}
                />
            ))}
        </View>
    );
};

export default RatingStars;

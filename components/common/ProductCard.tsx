import React from 'react';
import { Image, Text, View } from 'react-native';

const ProductCard = () => {
  return (
    <View>
        <Image />
        <View className='content'>
            <View>
                <Text>Cleaning</Text>
                <View>
                    <Text>Star</Text>
                    <Text>4.9</Text>
                </View>
                <Text>SAR 300/hr</Text>
            </View>
        </View>
    </View>
  )
}

export default ProductCard;

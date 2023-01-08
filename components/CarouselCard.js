import React from 'react';
import { View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselCardItem, { SLIDER_WIDTH, ITEM_WIDTH } from './CarouselCardItem';

const CarouselCard = ({ data }) => {
	const isCarousel = React.useRef(null);

	return (
		<View>
			<Carousel
				layout="default"
				layoutCardOffset={9}
				ref={isCarousel}
				data={data}
				renderItem={CarouselCardItem}
				sliderWidth={SLIDER_WIDTH}
				itemWidth={ITEM_WIDTH}
				inactiveSlideShift={0}
				useScrollView
				loop
				autoplay
				firstItem={1}
				autoplayDelay={1000}
				autoplayInterval={3000}
			/>
		</View>
	);
};

export default CarouselCard;

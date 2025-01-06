import React, { FC } from 'react';
import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
import { Icon } from '@/components/library';

type RatingProps = FlexProps & {
	ratingValue?: number;
	size?: number;
	color?: string;
};

const HongoRating: FC<RatingProps> = ({ ratingValue = 3, size, color, ...props }) => {
	const colors = useColorModeValue(color, color);
	return (
		<Flex {...props}>
			{[...Array(5)].map((_, i) => (
				<Icon
					color={colors}
					size={size || 18}
					key={i}
					name={i < ratingValue ? 'rating-fill' : 'rating-outline'}
				/>
			))}
		</Flex>
	);
};

export default HongoRating;

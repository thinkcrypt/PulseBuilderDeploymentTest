import { Flex, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';

const SliderArrowWrapper = ({
	children,
	...props
}: FlexProps & { children: ReactNode }) => {
	return (
		<Flex
			w='full'
			position='absolute'
			top='50%'
			left='50%'
			transform='translate(-50%, -50%)'
			zIndex='999'
			justifyContent='space-between'
			userSelect='none'
			{...props}
		>
			{children}
		</Flex>
	);
};

export default SliderArrowWrapper;

import { Center, CenterProps, Flex, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import useColors from '../../_core-components/hooks/useColors';
import { Icon } from '../../_core-components/icon';

// import { Icon } from '../icon';
// import useColors from '@/components/library/hooks/useColors';
// import { Icon } from '@/components/library';

// import { Icon } from '../icon';
type SwipperArrowButtonProps = CenterProps & {
	prev?: () => void;
	next?: () => void;
	css: any;
};

const SwipperArrowButton: FC<SwipperArrowButtonProps> = ({ prev, next, css, ...props }) => {
	const colors = useColors();
	return (
		<>
			<Center
				p='.4rem'
				bg={css?.arrowBtnBg || colors?.arrowBox}
				color={colors?.white}
				justifyContent='center'
				alignItems='center'
				w={{ base: '1.4rem', lg: '2.2rem' }}
				h={{ base: '1.4rem', lg: '2.2rem' }}
				cursor='pointer'
				borderRadius={2}
				zIndex='10'
				onClick={prev}
				border={`1px solid ${css?.primary}`}
				{...props}>
				<Icon
					name='arrow-left'
					color={css?.arrowBtnFg || css?.primary}
					size={40}
				/>
			</Center>
			<Center
				p='.4rem'
				bg={css?.arrowBtnBg || colors?.arrowBox}
				color={colors?.white}
				justifyContent='center'
				alignItems='center'
				w={{ base: '1.4rem', lg: '2.2rem' }}
				h={{ base: '1.4rem', lg: '2.2rem' }}
				cursor='pointer'
				borderRadius={2}
				zIndex='10'
				onClick={next}
				border={`1px solid ${css?.primary}`}>
				<Icon
					name='arrow-right'
					color={css?.arrowBtnFg || css?.primary}
					size={40}
				/>
			</Center>
		</>
	);
};

export default SwipperArrowButton;

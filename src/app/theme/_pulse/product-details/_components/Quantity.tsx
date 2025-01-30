import { Icon } from '@/components/library';
// import useColors from '@/components/library/hooks/useColors';
// import NormalText from '@/components/text/NormalText';
import { Center, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import useColors from '../../_core-components/hooks/useColors';
import NormalText from '../../_core-components/components/text/NormalText';

type QuanityProps = FlexProps & {
	quantity: number;
	handleQuantity: (type: string) => void;
	basic: any;
	css?: any;
};

const Quanity: FC<QuanityProps> = ({
	quantity,
	handleQuantity,
	basic,
	css,
	...props
}) => {
	const colors = useColors();
	return (
		<Flex
			justifyContent='space-around'
			width={{ base: 'auto', md: '8rem' }}
			h='full'
			// border='1px solid red'
			// bg='green'

			{...props}
		>
			<Center
				cursor='pointer'
				onClick={() => handleQuantity('decrement')}
				w='2.5rem'
				h='2.5rem'
				userSelect='none'
				bg={css?.secondaryBtnBg}
				borderRadius={`${css?.secondaryBtnRadius}px`}
				_hover={{
					bg: css?.secondaryBtnHoverBg,
					color: css?.secondaryBtnHoberFg,
				}}
			>
				<Icon color={css?.secondaryBtnFg} name='subtract' />
			</Center>
			<Center>
				<NormalText
					textAlign='center'
					minW='2rem'
					fontWeight='700'
					userSelect='none'
					basic={basic}
				>
					{quantity}
				</NormalText>
			</Center>
			<Center
				cursor='pointer'
				onClick={() => handleQuantity('increment')}
				w='2.5rem'
				h='2.5rem'
				bg={css?.secondaryBtnBg}
				borderRadius={`${css?.secondaryBtnRadius}px`}
				userSelect='none'
				_hover={{
					bg: css?.secondaryBtnHoverBg,
					color: css?.secondaryBtnHoberFg,
				}}
			>
				<Icon color={css?.secondaryBtnFg} name='add' />
			</Center>
		</Flex>
	);
};

export default Quanity;

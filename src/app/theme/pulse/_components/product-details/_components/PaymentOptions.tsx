// import useColors from '@/components/library/hooks/useColors';
// import NormalText from '@/components/text/NormalText';
import {
	Box,
	BoxProps,
	Grid,
	Radio,
	RadioGroup,
	Text,
	TextProps,
} from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useColors, NormalText } from '../../../_components/index';

type PaymentOptionsProps = BoxProps & {
	basic: any;
	content: any;
	productData: any;
};

const PaymentOptions: FC<PaymentOptionsProps> = ({
	basic,
	content,
	productData,
	...props
}) => {
	const colors = useColors();
	const [selectedValue, setSelectedValue] = useState('');

	const radioOptions = [
		{
			id: '1',
			price: productData?.price,
			title: 'Cash Discount Price',
			paymentType: 'Online / Cash Payment',
		},
		{
			id: '2',
			price: '$20',
			shortDescription: 'Pro Plan with advanced features.',
		},
	];

	const handleChange = (value: string) => {
		setSelectedValue(value);
	};

	return (
		<Box {...props}>
			<PaymentText basic={basic}>Payment Options</PaymentText>
			<Box>
				<RadioGroup onChange={handleChange} value={selectedValue}>
					<Grid gridTemplateColumns='1fr 1fr' gap={6}>
						{radioOptions.map(option => (
							<Box
								key={option.id}
								p={4}
								borderWidth='1px'
								borderRadius='md'
								boxShadow='sm'
								bg={selectedValue === option.id ? 'teal.50' : 'white'}
								cursor='pointer'
								w='full'
								h='full'
							>
								<Radio value={option.id}>
									<Text fontWeight='bold'>{option.price}</Text>
									<Text fontSize='sm'>{option.shortDescription}</Text>
								</Radio>
							</Box>
						))}
					</Grid>
				</RadioGroup>
			</Box>
		</Box>
	);
};

export default PaymentOptions;

const PaymentText = ({
	basic,
	children,
	...props
}: TextProps & {
	basic: any;
	children: any;
}) => {
	const colors = useColors();
	return (
		<NormalText
			color={colors?.black}
			fontWeight='500'
			fontSize='20px'
			mb='12px'
			basic={basic}
			{...props}
		>
			{children}
		</NormalText>
	);
};

import React, { FC } from 'react';
import { Box, Flex, FlexProps, Text, useColorModeValue } from '@chakra-ui/react';
import { QRCode } from 'react-qrcode-logo';
import Column from '@/components/containers/Column';

type QRStyleProps = FlexProps & {
	style: any;
	isSelected: boolean;
};

const DEMO_QR_CODE = '123';
const RADIUS = 2;
const DEFAULT = 'squares';
const SIZE = 60;

const SAGE = '#B5BD89';

const QRStyle: FC<QRStyleProps> = ({ style, isSelected, ...props }) => {
	const color = useColorModeValue(
		isSelected ? 'dodgerblue' : 'black',
		isSelected ? SAGE : '#f5f5f5'
	);
	return (
		<Flex
			gap={2}
			cursor='pointer'
			{...props}>
			<Column gap={3}>
				<Box
					borderWidth={2}
					p={1}
					borderRadius={4}
					borderColor={isSelected ? 'dodgerblue' : 'gray.200'}
					_dark={
						isSelected
							? {
									borderColor: 'brand.dark',
							  }
							: {}
					}>
					<QRCode
						bgColor='transparent'
						fgColor={color}
						quietZone={0}
						size={SIZE}
						qrStyle={style || DEFAULT}
						eyeRadius={{
							outer: RADIUS,
							inner: RADIUS,
						}}
						value={DEMO_QR_CODE}
					/>
				</Box>
				<Text
					fontWeight='600'
					textTransform='capitalize'
					fontSize='12px'
					textAlign='center'>
					{style}
				</Text>
			</Column>
		</Flex>
	);
};

export default QRStyle;

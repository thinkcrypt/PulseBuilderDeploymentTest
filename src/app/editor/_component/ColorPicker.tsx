import React from 'react';
import { Flex, Stack, Text, Input } from '@chakra-ui/react';

const SIZE = '30px';
const RADIUS = '4px';

const ColorPicker = ({
	color,
	setColor,
	title,
}: {
	color: string;
	title: string;
	setColor: (color: string) => void;
}) => {
	return (
		<Flex>
			<Stack>
				<Flex
					gap={2}
					align='center'>
					<Input
						h={SIZE}
						w={SIZE}
						boxShadow='lg'
						borderRadius={RADIUS}
						bg={color}
						type='color'
						value={color}
						onChange={(e: any) => setColor(e.target.value)}
					/>

					<Text
						textTransform='uppercase'
						fontSize='14px'
						fontWeight='600'>
						{color}
					</Text>
				</Flex>
				<Text
					fontSize='12px'
					fontWeight='500'>
					{title}
				</Text>
			</Stack>
		</Flex>
	);
};

export default ColorPicker;

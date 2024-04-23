import React, { FC } from 'react';
import { Flex, FlexProps, Grid } from '@chakra-ui/react';

type FormDivisionProps = FlexProps & {
	children: React.ReactNode;
};

const FormDivision: FC<FormDivisionProps> = ({ children, ...props }) => {
	return (
		<Flex
			bg='background.light'
			boxShadow='sm'
			borderWidth={1}
			_dark={{ bg: 'background.dark' }}
			p={4}
			borderRadius='12px'
			{...props}>
			<Grid templateColumns='repeat(2, 1fr)' gap={8} w='full' columnGap={4}>
				{children}
			</Grid>
		</Flex>
	);
};

export default FormDivision;

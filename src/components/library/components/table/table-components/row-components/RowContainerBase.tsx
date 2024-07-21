import { StackProps, Stack } from '@chakra-ui/react';
import React, { FC } from 'react';

type RowContainerMobileProps = StackProps & {
	children: React.ReactNode;
};

const RowContainerBase: FC<RowContainerMobileProps> = ({ children, ...props }) => {
	return (
		<Stack
			position='relative'
			width='100%'
			borderRadius='12px'
			boxShadow='2px 2px 10px rgba(0,0,0,.1)'
			mb={3}
			//mx={-4}
			p={4}
			pb={0}
			_last={{ mb: 12 }}
			direction='column'
			bg='white'
			_dark={{
				bg: 'menu.dark',
			}}
			{...props}>
			{children}
		</Stack>
	);
};

export default RowContainerBase;

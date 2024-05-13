import React, { FC } from 'react';
import { Grid, Input, Text, InputProps, Button, Box } from '@chakra-ui/react';
import UpdatePasswordModal from '../modals/update-password/UpdatePasswordModal';

type DetailProps = InputProps & {
	title: string;
	children: any;
	editing: boolean;
	isPassword?: boolean;
};

const Details: FC<DetailProps> = ({ title, children, editing, isPassword, ...props }) => {
	const textBox = (
		<Text
			px={3}
			py={1}
			fontSize='.9rem'>
			{children}
		</Text>
	);

	const passwordBox = (
		<Box>
			<UpdatePasswordModal trigger={<Button size='sm'>Change Password</Button>} />
		</Box>
	);

	const inputBox = (
		<Input
			w='400px'
			size='sm'
			borderRadius='lg'
			color='text.500'
			value={children}
			{...props}
		/>
	);

	return (
		<Grid
			gridTemplateColumns='1fr 3fr'
			w='100%'
			h='64px'>
			<Text
				py={1}
				fontWeight='600'
				fontSize='.9rem'>
				{title}
			</Text>
			{isPassword ? passwordBox : editing ? inputBox : textBox}
		</Grid>
	);
};

export default Details;

'use client';
import React from 'react';
import {
	Menu,
	MenuButton,
	IconButton,
	MenuGroup,
	Heading,
	Tag,
	MenuItem,
	MenuDivider,
} from '@chakra-ui/react';
import Icon from '../icon/Icon';
import CustomMenuItem from './CustomMenuItem';
import MenuContainer from './MenuContainer';
import { useGetSelfQuery } from '@/store/services/authApi';
import { useAppDispatch } from '@/hooks';
import { logout } from '@/store/slices/authSlice';

const SelfMenu = () => {
	const { data, isFetching, isError, error, isSuccess } = useGetSelfQuery({});
	const dispatch = useAppDispatch();
	const handleLogout = () => {
		dispatch(logout());
	};
	return (
		<Menu>
			<MenuButton
				as={IconButton}
				variant='ghost'
				size='md'
				borderRadius='full'
				icon={
					<Icon
						name='settings'
						size={24}
					/>
				}
			/>

			<MenuContainer>
				<MenuGroup>
					<MenuItem
						alignItems='flex-start'
						flexDir='column'
						_hover={{ bg: 'transparent' }}
						bg='transparent'>
						<Heading
							size='sm'
							mb={2}>
							{data?.name}
						</Heading>
						<Tag>{data?.restaurant?.name}</Tag>
					</MenuItem>
				</MenuGroup>
				<MenuDivider />
				<MenuGroup>
					<CustomMenuItem onClick={handleLogout}>Logout</CustomMenuItem>
				</MenuGroup>
			</MenuContainer>
		</Menu>
	);
};

export default SelfMenu;

'use client';

import { useAppDispatch } from '@/hooks';
import {
	Menu,
	MenuGroup,
	Flex,
	Input,
	useDisclosure,
	MenuDivider,
	MenuItemProps,
	Button,
	MenuButton,
	useColorModeValue,
	FormControl,
	Stack,
	InputProps,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import MenuContainer from '../../menu/MenuContainer';
import MenuItem from '../../menu/CustomMenuItem';
import Icon from '../../icon/Icon';
import HelperText from '../../form/label/HelperText';
import Label from '../../form/label/Label';
import { useGetAllQuery } from '@/store/services/commonApi';
import CreateModal from '../../modals/CreateModal';
import { shadow, sizes } from '@/lib/constants';

const WIDTH = '300px';
const MAX_H = '200px';

type ItemOfMenuProps = MenuItemProps & {
	children: React.ReactNode;
	id: string;
	filter?: string;
};

const ItemOfMenu: React.FC<ItemOfMenuProps> = ({ children, filter, id, ...props }) => {
	const hoverBg = useColorModeValue('hover.light', 'hover.dark');
	const itemBg = useColorModeValue('brand.500', 'brand.200');
	const itemColor = useColorModeValue('white', '#4a4a4a');

	const isActive = (id: string): boolean => {
		//return filters[filter] === id;
		return false;
	};

	const hoverStyle = (id: string): any => {
		if (isActive(id)) return {};
		return {
			bg: hoverBg,
		};
		return {};
	};
	return (
		<MenuItem
			w={WIDTH}
			_hover={{ bg: hoverBg }}
			bg={isActive(id) ? itemBg : 'transparent'}
			color={isActive(id) ? itemColor : 'inherit'}
			_dark={{
				bg: isActive(id) ? itemBg : 'transparent',
				color: isActive(id ? itemColor : 'inherit'),
				_hover: { bg: hoverBg },
			}}
			{...props}>
			{children}
		</MenuItem>
	);
};

type VDataMenuProps = InputProps & {
	label: string;
	isRequired?: boolean;
	placeholder?: string;
	value: any;
	helper?: string;
	model: string;
	dataModel: any;
};

const VDataMenu: React.FC<VDataMenuProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	helper,
	model,
	dataModel,
	...props
}) => {
	const dispatch = useAppDispatch();

	const { onOpen, onClose, isOpen } = useDisclosure();

	const close = () => {
		setSearch('');
		onClose();
	};

	const [title, setTitle] = useState<string>(`Select ${label}`);
	const [search, setSearch] = useState<string>('');

	const { data, isFetching, isError, error, isSuccess } = useGetAllQuery({
		path: model,
		limit: '999',
		sort: 'name',
		search,
	});

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};

	const handleChange = (e: any) => {
		if (props.onChange) {
			if (props.onChange) {
				const event = {
					target: {
						name: props.name,
						value: e._id,
					},
				} as any;

				props.onChange(event);
			}
		}
		setTitle(e?.name);

		onClose();
	};

	const renderMenuItems = data?.doc?.map((item: any, i: number) => (
		<ItemOfMenu cursor='pointer' id={item?._id} key={i} onClick={() => handleChange(item)}>
			{item?.name}
		</ItemOfMenu>
	));

	const borderColor = useColorModeValue('brand.500', 'brand.200');

	const getNameById = (id: string | undefined) => {
		const item = data?.doc?.find((item: any) => item._id === id);
		return item?.name || id;
	};

	const inputRef = React.useRef<any>(null);
	const btnRef = React.useRef<any>(null);

	return (
		<>
			<CreateModal
				data={dataModel}
				path={model}
				trigger={
					<Button display='none' ref={btnRef}>
						Add new {model}
					</Button>
				}
				type='post'
			/>
			<Menu onClose={close}>
				{({ isOpen }) => (
					<>
						<FormControl isRequired={isRequired} gap={4}>
							<Stack spacing={2} w='full'>
								<Label>{label}</Label>
								<Stack spacing={1} w='full'>
									<MenuButton
										isActive={isOpen}
										as={Button}
										variant='outline'
										colorScheme='gray'
										sx={styles.btn}
										color={value ? 'text.500' : 'gray.300'}
										fontWeight={value ? '400' : '500'}
										rightIcon={<Icon name='select' />}>
										{value ? getNameById(value) : `Select ${label}`}
									</MenuButton>
									<Input
										ref={inputRef}
										isRequired={isRequired}
										value={value}
										h='1px'
										w='full'
										color='transparent'
										focusBorderColor='transparent'
										border='none'
										{...props}
									/>
								</Stack>

								{helper && <HelperText>{helper}</HelperText>}
							</Stack>
						</FormControl>

						<MenuContainer w={WIDTH}>
							<MenuGroup>
								<Flex p={2} py={0.5}>
									<Input
										borderRadius={6}
										size='sm'
										placeholder='Search'
										value={search}
										onChange={handleSearch}
									/>
								</Flex>
							</MenuGroup>
							<MenuDivider mb={1} />
							<MenuItem onClick={() => btnRef.current.click()}>Add new {model}</MenuItem>
							<MenuDivider mt={1} mb={0} />
							<Flex flexDir='column' w='100%' maxH={MAX_H} overflowY='scroll'>
								<MenuItem w={WIDTH} onClick={() => handleChange({ name: ``, _id: undefined })}>
									Unselect
								</MenuItem>
								{renderMenuItems}
							</Flex>
						</MenuContainer>
					</>
				)}
			</Menu>
		</>
	);
};

const styles = {
	btn: {
		boxShadow: shadow.MENU,
		borderRadius: sizes.RADIUS_MENU,
		cursor: 'default',
		_active: {},
		_hover: {},
		h: '34px',
		textAlign: 'left',
		size: 'sm',
		fontSize: '.9rem',
		pl: 3.5,
		borderColor: 'selectBorder.light',
		_dark: {
			color: 'gray.300',
			borderColor: 'selectBorder.dark',
		},
	},
};

export default VDataMenu;

import { deleteSingleItemFromCart, useAppDispatch } from '@/components/library';
import ProductPrice from './ProductPrice';
import { Flex, Grid, GridProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import {
	CartAction,
	CartImage,
	ProductName,
	useColors,
} from '../../../_components/index';
import { useAppSelector } from '@/hooks';

export type CartItemProps = GridProps & {
	id: string;
	image: string;
	name: string;
	price: number;
	qty: number;
	basic: any;
	css?: any;
};

const CartItem = ({
	image,
	id,
	name,
	price,
	qty,
	css,
	basic,
	...props
}: CartItemProps) => {
	const dispatch = useAppDispatch();
	const handleRemove = () => {
		dispatch(deleteSingleItemFromCart(id));
	};
	const { display } = useAppSelector(state => state.builder);

	return (
		<Container css={css} {...props}>
			<Flex
				gap={6}
				alignItems='flex-start'
				flexDir={{ base: 'column', md: display === 'sm' ? 'column' : 'row' }}
			>
				<Flex alignItems='center' gap={4}>
					<CartImage image={image} />
				</Flex>
				<CartAction
					basic={basic}
					css={css}
					handleRemove={handleRemove}
					id={id}
					image={image}
					name={name}
					price={price}
					qty={qty}
				/>
			</Flex>
			<ProductName basic={basic} css={css} name={name} price={price} id={id} />

			<Flex
				alignItems='center'
				display={{ base: 'none', md: display === 'sm' ? 'none' : 'flex' }}
			>
				<ProductPrice basic={basic} css={css}>
					{price}
				</ProductPrice>
			</Flex>

			<CartAction
				basic={basic}
				css={css}
				handleRemove={handleRemove}
				id={id}
				image={image}
				name={name}
				price={price}
				qty={qty}
				alignItems='center'
				display={{ base: 'none', md: display === 'sm' ? 'none' : 'flex' }}
				justifyContent='flex-end'
			/>
		</Container>
	);
};
export default CartItem;

const Container: React.FC<{ children: ReactNode; css: any }> = ({
	children,
	css,
	...props
}) => {
	const borderColor = `1px solid ${css?.borderColor}`;
	return (
		<Grid
			gridTemplateColumns={{ base: '70px 2fr', md: '70px 3fr 1fr 1fr' }}
			borderBottom={borderColor}
			py={4}
			gap={4}
			{...props}
		>
			{children}
		</Grid>
	);
};

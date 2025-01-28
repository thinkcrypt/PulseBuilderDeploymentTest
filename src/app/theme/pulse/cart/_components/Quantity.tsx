import {
	addToCart,
	deleteOneFromCart,
	Icon,
	useAppDispatch,
} from '@/components/library';
import { Center, CenterProps, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, ReactNode } from 'react';
import useColors from '../../_core-components/hooks/useColors';
import NormalText from '../../_core-components/components/text/NormalText';

type QuanityProps = FlexProps & {
	basic: any;
	css?: any;
	id: string;
	image: string;
	name: string;
	price: number;
	qty: number;
};

const Quanity: FC<QuanityProps> = ({
	basic,
	css,
	image,
	id,
	name,
	price,
	qty,
	...props
}) => {
	const colors = useColors();

	const dispatch = useAppDispatch();

	const handleAdd = () => {
		dispatch(
			addToCart({
				item: {
					_id: id,
					name,
					price,
					vat: 0,
					image,
				},
			})
		);
	};

	const handleRemoveOne = () => {
		dispatch(deleteOneFromCart(id));
	};

	return (
		<Flex justifyContent='space-around' alignItems='center' h='full' {...props}>
			<QtyBtn css={css} name={'subtract'} onClick={handleRemoveOne} />
			<Center>
				<NormalText
					textAlign='center'
					minW='2rem'
					fontWeight='700'
					userSelect='none'
					color={css?.bodyFg}
					basic={basic}
				>
					{qty}
				</NormalText>
			</Center>
			<QtyBtn css={css} name={'add'} onClick={handleAdd} />
		</Flex>
	);
};

export default Quanity;

const QtyBtn = ({
	onClick,
	css,
	name,
	...props
}: CenterProps & { onClick: () => void; css: any; name: any }) => (
	<Center
		cursor='pointer'
		onClick={onClick}
		w='2rem'
		h='2rem'
		bg={css?.qtyBg || '#E2E8F0'}
		userSelect='none'
		borderRadius={`${css?.qtyBtnRadius || 4}px`}
		{...props}
	>
		<Icon color={css?.qtyFg || '#8d9aac'} name={name} />
	</Center>
);

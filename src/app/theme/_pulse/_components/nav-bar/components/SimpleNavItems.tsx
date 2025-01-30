'use client';
import { TextProps } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { NormalText } from '../../text';
import { useGetItemNameById } from '../../../_core-components/hooks';

type SimpleNavItemsProps = TextProps & {
	css: any;
	basic: any;
	hoverItem: number | null;
	item: any;
	index: number;
	id: string;
	path: string;
};

const SimpleNavItems: FC<SimpleNavItemsProps> = ({
	css,
	basic,
	item,
	hoverItem,
	index,
	id,
	path,
	...props
}) => {
	const { name, image, isFetching } = useGetItemNameById({
		id,
		path,
	});
	if (isFetching) return;

	// const colors = useColors();

	return (
		<Link
			href={`category/${id}`}
			style={{
				display: 'inline-block',
				lineHeight: '32px',
			}}>
			<NormalText
				h='full'
				alignItems='center'
				display='flex'
				css={css}
				basic={basic}
				fontSize={css?.fontSize}
				fontWeight={css?.fontWeight}
				color={hoverItem === index ? css?.hoverFg : css?.fgColor}
				mr={css?.gap}
				_hover={{
					color: css?.hoverFg,
				}}
				{...props}>
				{name}
			</NormalText>
		</Link>
	);
};

export default SimpleNavItems;

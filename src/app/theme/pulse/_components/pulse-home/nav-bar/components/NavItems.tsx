// import { FlexColumn } from "@/components/common";
// import useColors from '@/components/library/hooks/useColors';
import { NormalText } from '../../../../_components/index';
import Link from 'next/link';
import { FC } from 'react';

type NavItemsProps = {
	css: any;
	basic: any;
	hoverItem: number | null;
	item: any;
	index: number;
};

const NavItems: FC<NavItemsProps> = ({
	css,
	basic,
	item,
	hoverItem,
	index,
}) => {
	// const colors = useColors();
	return (
		<Link
			href={item?.link || ''}
			style={{
				display: 'inline-block',
				height: '100%',
			}}
		>
			<NormalText
				h='full'
				alignItems='center'
				display='flex'
				css={css}
				basic={basic}
				fontSize={css?.fontSize}
				fontWeight={css?.fontWeight}
				color={hoverItem === index ? css?.hoverFg : css?.fgColor}
			>
				{item?.text}
			</NormalText>
		</Link>
	);
};

export default NavItems;

import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { useColors, Icon, NormalText } from '../../../../_components/index';
type DropdownItemsProps = {
	css: any;
	basic: any;
	dropdown: {
		link: string;
		text: string;
		dropDown?: any;
	};
};

const DropdownItems: FC<DropdownItemsProps> = ({ css, basic, dropdown }) => {
	const colors = useColors();
	return (
		<Link href={dropdown?.link}>
			<Flex
				justifyContent='space-between'
				alignItems='center'
				mt='4px'
				color={css?.fgColor}
				_hover={{
					bg: css?.hoverFg,
					color: colors?.white,
				}}
			>
				<NormalText
					px={2}
					py={1}
					fontSize={css?.fontSize}
					css={css}
					basic={basic}
					color={'inherit'}
				>
					{dropdown?.text}
				</NormalText>

				{dropdown?.dropDown && (
					<Icon size={16} color={css?.hoverFg} name='arrow-right-solid' />
				)}
			</Flex>
		</Link>
	);
};

export default DropdownItems;

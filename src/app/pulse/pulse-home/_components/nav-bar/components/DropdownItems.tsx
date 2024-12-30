// import { Icon, NormalText } from "@/components";
import useColors from '@/components/library/hooks/useColors';
import { Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';
import { NormalText } from '../../text';
import { Icon } from '../../icon';

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
				color={colors?.black}
				_hover={{
					bg: colors?.hoverColor,
					color: colors?.white,
				}}
			>
				<NormalText
					px={2}
					py={1}
					fontSize='14px'
					css={css}
					basic={basic}
					color={'inherit'}
				>
					{dropdown?.text}
				</NormalText>

				{dropdown?.dropDown && (
					<Icon size={16} color={colors?.hoverColor} name='arrow-right-solid' />
				)}
			</Flex>
		</Link>
	);
};

export default DropdownItems;

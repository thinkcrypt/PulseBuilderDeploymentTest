import { Box, BoxProps } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { DropdownItems, DropdownWrapper } from './index';
import NavbarSubdropdown from './NavbarSubDropdown';

type NavbarDropdownProps = BoxProps & {
	css: any;
	item: any;
	basic: any;
};

const NavbarDropdown: FC<NavbarDropdownProps> = ({ css, basic, item }) => {
	const [subDropdownHover, setSubDropdownHover] = useState<number | null>(null);

	const handleSubDropdownHoverToggle = (index: number | null) => {
		setSubDropdownHover(index);
	};

	return (
		<DropdownWrapper css={css}>
			{item?.dropDown?.map((dropdown: any, idx: number) => (
				<Box
					key={idx}
					position='relative'
					onMouseEnter={() => handleSubDropdownHoverToggle(idx)}
					onMouseLeave={() => handleSubDropdownHoverToggle(null)}
				>
					<DropdownItems
						key={idx}
						dropdown={dropdown}
						css={css}
						basic={basic}
					/>

					{dropdown?.dropDown && subDropdownHover === idx && (
						<NavbarSubdropdown item={dropdown} css={css} basic={basic} />
					)}
				</Box>
			))}
		</DropdownWrapper>
	);
};

export default NavbarDropdown;

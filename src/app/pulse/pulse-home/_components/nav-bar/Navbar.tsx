import {
	maxWidth,
	sectionPadding,
} from '@/components/library/config/lib/constants/constants';
import { Box, BoxProps, Flex } from '@chakra-ui/react';
import { FC, ReactNode, useState } from 'react';
import {
	NavbarDropdown,
	NavbarWrapper,
	NavItems,
	NavItemsWrapper,
} from './components/index';
import { navData } from './components/navData';
import { HoverContentContainer } from '@/components/library';
type NavbarProps = BoxProps & {
	content: any;
	basic: any;
	data?: any;
	path?: any;
	dataModel?: any;
};

const PulseNavbar: FC<NavbarProps> = ({
	data,
	path,
	content,
	basic,
	dataModel,
	...props
}) => {
	const [hoverItem, setHoverItem] = useState<number | null>(null);

	const handleHoverToggle = (index: number | null) => {
		setHoverItem(index);
	};
	const navItems = navData?.navItems;

	const css = content?.headerCategories;

	// console.log('nav items css: ', content?.headerCategories);
	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			edit={true}
			bg={'red.200'}
			dataModel={dataModel}
			position='sticky'
			top='0'
		>
			<NavbarWrapper css={css} {...props}>
				<SectionPadding h='full'>
					<Flex
						h='full'
						alignItems='center'
						display={{ base: 'none', lg: 'flex' }}
					>
						{navItems?.map((item: any, i: number) => (
							<NavItemsWrapper
								key={i}
								handleHoverToggle={handleHoverToggle}
								index={i}
							>
								<NavItems
									hoverItem={hoverItem}
									item={item}
									index={i}
									css={css}
									basic={basic}
								/>
								{item?.dropDown && hoverItem === i && (
									<NavbarDropdown item={item} css={css} basic={basic} />
								)}
							</NavItemsWrapper>
						))}
					</Flex>
				</SectionPadding>
			</NavbarWrapper>
		</HoverContentContainer>
	);
};

export default PulseNavbar;

const SectionPadding = ({
	children,
	...props
}: BoxProps & { children: ReactNode }) => (
	<Box
		px={{
			base: sectionPadding.PADDING_X_MOBILE,
			lg: sectionPadding.PADDING_X_LG,
			'2xl': sectionPadding.PADDING_X_2XL,
		}}
		maxW={maxWidth}
		mx='auto'
		{...props}
	>
		{children}
	</Box>
);

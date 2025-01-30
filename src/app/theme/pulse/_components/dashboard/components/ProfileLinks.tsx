import { Icon } from '@/components/library';
// import NormalText from '@/components/text/NormalText';
import { Box, Center, Flex, FlexProps } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';
import {NormalText} from '../../../_components/index';
type ProfileLinksProps = FlexProps & {
	css: any;
	basic: any;
	item: any;
	slug: string;
};

const ProfileLinks: FC<ProfileLinksProps> = ({
	css,
	basic,
	item,
	slug,
	...props
}) => {
	const isActive = slug == item?.slug;
	return (
		<Link href={`${item?.slug}`}>
			<Container
				css={css}
				bg={isActive ? css?.hoverBg : css?.bgColor}
				borderRadius={`${css?.borderRadius || 4}px`}
				item={item}
				{...props}
			>
				<Center
					mr='12px'
					bg={isActive ? css?.iconActiveBg : css?.iconBg}
					w='34px'
					h='34px'
					borderRadius='50%'
				>
					<Icon
						color={isActive ? css?.iconActiveFg : css?.iconFg}
						name={item?.iconName}
					/>
				</Center>
				<Box>
					<NormalText basic={basic}>{item?.label}</NormalText>
				</Box>
			</Container>
		</Link>
	);
};

export default ProfileLinks;
const Container = ({
	children,
	item,
	css,
	...props
}: FlexProps & { children: ReactNode; item: any; css: any }) => (
	<Flex
		py='.5rem'
		px='.5rem'
		mb='6px'
		alignItems='center'
		bg={css?.bgColor}
		cursor='pointer'
		_hover={{ bg: css?.hoverBg || '#F5F5F5' }}
		{...props}
	>
		{children}
	</Flex>
);

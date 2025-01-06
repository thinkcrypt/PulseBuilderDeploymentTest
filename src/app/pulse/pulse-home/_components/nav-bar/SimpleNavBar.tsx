import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import { FC, ReactNode, useState } from 'react';
import SectionPadding from '@/components/common/SectionPadding';
import useColors from '@/components/library/hooks/useColors';
import SimpleNavItems from './components/SimpleNavItems';
import { HoverContentContainer } from '@/components/library';
import { PADDING_X } from '@/components/library/config/lib/constants/constants';

type SimpleNavBarProps = BoxProps & {
	content: any;
	basic: any;
	data: any;
	path: any;
	dataModel: any;
};

const SimpleNavBar: FC<SimpleNavBarProps> = ({
	content,
	basic,
	data,
	path,
	dataModel,
	...props
}) => {
	const [hoverItem, setHoverItem] = useState<number | null>(null);

	const handleHoverToggle = (index: number | null) => {
		setHoverItem(index);
	};

	const collections = content?.collections?.items.slice(0, 6);
	const css = content?.headerCategories;

	return (
		<HoverContentContainer
			type='content'
			path={path}
			title='Banner Information'
			data={content}
			edit={true}
			dataModel={dataModel}
			bg={css?.bgColor}
			px={PADDING_X}
			position='sticky'
			top='0'
		>
			<Box w='full' bg={css?.bgColor} py='1rem' {...props}>
				{/* <ScrollBox> */}
				{collections?.map((item: any, i: number) => (
					<SimpleNavItems
						key={i}
						hoverItem={hoverItem}
						item={item}
						index={i}
						css={css}
						basic={basic}
						id={item?.id}
						path={item?.type}
					/>
				))}
				{/* </ScrollBox> */}
			</Box>
		</HoverContentContainer>
	);
};
export default SimpleNavBar;

const ScrollBox = ({
	children,
	...props
}: FlexProps & { children: ReactNode }) => {
	const colors = useColors();

	return (
		<Flex
			overflowX='auto'
			whiteSpace='nowrap'
			sx={{
				'&::-webkit-scrollbar': {
					height: '6px',
				},
				'&::-webkit-scrollbar-thumb': {
					background: colors?.scrollBar || 'gray',
					borderRadius: '3px',
				},
			}}
			{...props}
		>
			{children}{' '}
		</Flex>
	);
};

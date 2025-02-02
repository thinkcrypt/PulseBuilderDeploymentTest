import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import { FC, ReactNode, useState } from 'react';
import { generateTextModel, HoverContentContainer } from '@/components/library';
import {
	PADDING_X,
	useColors,
	SimpleNavItems,
} from '../../../_components/index';
import { useAppSelector } from '@/hooks';

const navModel = [
	...generateTextModel('headerCategories?.navFont', 'Nav Font Style'),
];
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
	const { display } = useAppSelector(state => state.builder);
	const collections =
		display == 'lg'
			? content?.collections?.items.slice(0, 6)
			: content?.collections?.items.slice(0, 4);
	const css = content?.headerCategories;

	return (
		<HoverContentContainer
			section={true}
			type='content'
			path={path}
			title='Nav Categories'
			data={content}
			edit={true}
			dataModel={dataModel}
			bg={css?.bgColor}
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'
		>
			<Box zIndex={-1} w='full' bg={css?.bgColor} py='1rem' {...props}>
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

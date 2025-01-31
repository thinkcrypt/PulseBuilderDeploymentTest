import { Box, BoxProps, Flex, FlexProps } from '@chakra-ui/react';
import { FC, ReactNode, useState } from 'react';
import { HoverContentContainer } from '@/components/library';
import { PADDING_X, useColors, SimpleNavItems } from '../../../_components/index';
import { useAppSelector } from '@/hooks';

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

	const { display } = useAppSelector(state => state.builder);
	const collections =
		display == 'lg'
			? content?.collections?.items.slice(0, 6)
			: content?.collections?.items.slice(0, 4);
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
			px={{
				base: PADDING_X.base,
				md: display === 'sm' ? PADDING_X.base : PADDING_X.md,
			}}
			position='sticky'
			top='0'>
			<Box
				w='full'
				bg={css?.bgColor}
				py='1rem'
				{...props}>
				{collections?.map((item: any, i: number) => (
					<SimpleNavItems
						key={i}
						hoverItem={hoverItem}
						item={item}
						index={i}
						css={css}
						fontFamily={basic?.primaryFont}
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

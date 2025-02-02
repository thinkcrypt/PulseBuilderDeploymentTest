import { Box, Flex, FlexProps, Input } from '@chakra-ui/react';
import { FC, useRef } from 'react';

import SearchButton from './SearchButton';

type SearchBoxProps = FlexProps & {
	header: any;
	basic: any;
	content: any;
	dataModel?: any;
};

const SearchBox: FC<SearchBoxProps> = ({ header, basic, content, dataModel, ...props }) => {
	const boxRef = useRef<HTMLDivElement | null>(null);

	return (
		<Flex
			ml='32px'
			w='600px'
			alignItems='center'
			gap={3}
			h='auto'
			{...props}>
			<Box
				w='full'
				position='relative'
				ref={boxRef}>
				<Input
					bg={header?.searchBoxBg}
					border={`${header?.borderWidth}px solid ${header?.borderColor}`}
					placeholder={header?.searchBoxText}
					size='md'
					_placeholder={{
						fontFamily: basic?.secondaryFont,
					}}
					borderRadius={`${header?.searchBoxRadius}`}
					color={header?.searchBoxFg}
				/>
			</Box>
			<SearchButton
				header={header}
				fontFamily={basic?.secondaryFont}
			/>
		</Flex>
	);
};

export default SearchBox;

import { BoxProps, Flex, Input } from '@chakra-ui/react';
import React, { FC } from 'react';
import SearchButton from './SearchButton';


type SearchBoxProps = BoxProps & {
	header: any;
};

const SearchBox: FC<SearchBoxProps> = ({ header, ...props }) => {
	return (
		<Flex ml='32px' w='600px' alignItems='center' gap={2} h='auto'>
			<Input
				bg={header?.searchBoxBg}
				border={`${header?.borderWidth}px solid ${header?.borderColor}`}
				placeholder={header?.searchBoxText}
				size='md'
				borderRadius={`${header?.searchBoxRadius}`}
				color={header?.serchBoxFg}
			/>
			<SearchButton header={header} />
		</Flex>
	);
};

export default SearchBox;

import { Box, Flex, FlexProps } from '@chakra-ui/react';
import React, { FC } from 'react';
import { cartBoxShadow } from '../_core-components/config/lib/constants/constants';
import NormalText from '../_core-components/components/text/NormalText';

type SearchValueBoxProps = FlexProps & {
	basic: any;
	content: any;
	searchValue: any;
};

const SearchValueBox: FC<SearchValueBoxProps> = ({
	basic,
	content,
	searchValue,
	...props
}) => {
	const css = content?.searchBoxValue;

	const value = searchValue ? searchValue : '...';

	return (
		<Box py='2rem' {...props}>
			<Flex
				bg={css?.bgColor || '#fff'}
				px='1rem'
				py='.6rem'
				borderRadius={`${css?.borderRadius || 4}px`}
				boxShadow={css?.boxShadow || cartBoxShadow}
			>
				<Flex alignItems='center'>
					<NormalText
						fontSize={`${css?.primaryTextSize || 18}px`}
						color={css?.primaryText || '#000'}
						fontWeight={css?.primaryWeight || 600}
						basic={basic}
					>{`Search - ${value}`}</NormalText>
				</Flex>
				<Box></Box>
			</Flex>
		</Box>
	);
};

export default SearchValueBox;

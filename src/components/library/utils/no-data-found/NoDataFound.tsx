import React, { FC } from 'react';
import { Center, FlexProps, Text } from '@chakra-ui/react';

type NoDataFoundProps = FlexProps & {
	title?: string;
	description?: string;
};

// Default values for title and description
const DEFAULT_TITLE: string = 'No results found.';
const DEFAULT_DESCRIPTION: string =
	"There aren't any results for that query. Try using different filters.";

const NoDataFound: FC<NoDataFoundProps> = ({
	title = DEFAULT_TITLE,
	description = DEFAULT_DESCRIPTION,
	...props
}) => {
	return (
		<Center flexDir='column' h='400px' w='100%' {...props}>
			<Text>{title}</Text>
			<Text>{description}</Text>
		</Center>
	);
};

export default NoDataFound;

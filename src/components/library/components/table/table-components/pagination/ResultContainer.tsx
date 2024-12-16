import React, { FC } from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/react';

import { useIsMobile, useAppSelector, sizes, Pagination, THEME } from '../../../..';

type ResultContainerProps = FlexProps & {
	data: any;
};

const ResultContainer: FC<ResultContainerProps> = ({ data, ...props }) => {
	const { selectedItems } = useAppSelector(state => state.table);
	const isMobile = useIsMobile();

	if (selectedItems.length > 0) {
		return null;
	}

	return (
		<Flex
			bg='background.light'
			borderTop='1px solid'
			borderTopColor={{ base: 'stroke.deepL', md: 'transparent' }}
			_dark={{ bg: 'sidebar.dark', borderTopColor: 'stroke.deepD' }}
			pl={{ base: 0, md: THEME == 'basic' ? 0 : 4 }}
			sx={{
				...styles.container,
				left: isMobile ? 0 : sizes.HOME_NAV_LEFT,
				w: isMobile ? '100vw' : sizes.HOME_NAV_MAX_WIDTH,
				pb: isMobile ? 4 : 0,
				...props,
			}}>
			<Flex
				px={4}
				pl={6}
				align='center'
				justify='space-between'
				gap={4}
				w='100%'>
				<Text>
					<b>{data?.totalDocs || '--'}</b> results
				</Text>

				<Pagination data={data && data} />
			</Flex>
		</Flex>
	);
};

const styles = {
	container: {
		//borderTop: '1px solid',
		//borderTopColor: 'stroke.deepL',
		position: 'fixed',
		bottom: 0,
		// bg: 'container.light',
		// _dark: { bg: 'container.dark', borderTopColor: 'stroke.deepD' },
		overflow: 'scroll',
		maxW: '100%',
		fontSize: '.9rem',
	},
};

export default ResultContainer;

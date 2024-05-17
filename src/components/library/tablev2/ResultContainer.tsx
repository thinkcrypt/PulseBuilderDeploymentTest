import React, { FC } from 'react';
import { Flex, FlexProps, Text } from '@chakra-ui/react';
import Pagination from './Pagination';
import { sizes } from '@/lib/constants';
import { useAppSelector } from '@/hooks';
import useIsMobile from '../hooks/useIsMobile';

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
			sx={{
				...styles.container,
				left: isMobile ? 0 : sizes.HOME_NAV_LEFT,
				w: isMobile ? '100vw' : sizes.HOME_NAV_MAX_WIDTH,
				px: isMobile ? 4 : 4,
				pb: isMobile ? 4 : 0,
				...props,
			}}>
			<Text>
				<b>{data?.totalDocs}</b> results
			</Text>

			<Pagination data={data && data} />
		</Flex>
	);
};

const styles = {
	container: {
		borderTop: '1px solid',
		borderTopColor: 'stroke.deepL',
		alignItems: 'center',
		justifyContent: 'space-between',
		zIndex: 10,
		gap: 4,
		position: 'fixed',
		bottom: 0,
		bg: 'container.light',

		_dark: { bg: 'container.dark', borderTopColor: 'stroke.deepD' },
		overflow: 'scroll',
		maxW: '100%',

		fontSize: '.9rem',
	},
};

export default ResultContainer;

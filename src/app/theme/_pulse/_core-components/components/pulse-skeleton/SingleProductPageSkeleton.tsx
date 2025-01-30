import { Box, Center, Grid, Skeleton, SkeletonText } from '@chakra-ui/react';
import { PADDING_X } from '../../config/lib/constants/constants';

const SingleProductPageSkeleton = () => {
	return (
		<Grid
			gridTemplateColumns={{ base: '1fr', md: '1fr 1fr' }}
			gap={16}
			px={PADDING_X}
		>
			<Box>
				<Skeleton
					w='full'
					height={{ base: '300px', sm: '400px' }}
					borderRadius='12px'
				/>
			</Box>
			<Box>
				<Skeleton w='full' height='20px' borderRadius='4px' />
				<Box my='10px'>
					<Skeleton w='200px' height='20px' borderRadius='4px' />
				</Box>
				<Box mt='60px'>
					<SkeletonText
						mt='4'
						noOfLines={4}
						spacing='4'
						skeletonHeight='20px'
					/>
				</Box>
				<Center mt={{ base: '30px', md: '100px' }}>
					<Skeleton
						w='full'
						height={{ base: '20px', md: '30px' }}
						borderRadius='4px'
					/>
				</Center>
			</Box>
		</Grid>
	);
};

export default SingleProductPageSkeleton;

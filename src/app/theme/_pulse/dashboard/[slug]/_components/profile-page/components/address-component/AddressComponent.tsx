import { Box, CenterProps, Grid } from '@chakra-ui/react';
import React, { FC } from 'react';
import AddressHeader from './AddressHeader';
import AddressCard from './AddressCard';

type AddressComponentProps = CenterProps & {
	basic: any;
	css: any;
};

const AddressComponent: FC<AddressComponentProps> = ({
	basic,
	css,
	...props
}) => {
	return (
		<Box bg={css?.bgColor || '#fff'} color={css?.fgColor || '#000'} {...props}>
			<AddressHeader basic={basic} css={css} />
			<Grid gridTemplateColumns='1fr 1fr' mt={'2rem'} gap={6}>
				<AddressCard basic={basic} css={css} />
				<AddressCard basic={basic} css={css} />
			</Grid>
		</Box>
	);
};

export default AddressComponent;

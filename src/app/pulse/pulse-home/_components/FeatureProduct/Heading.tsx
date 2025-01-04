// import { useGetStoreQuery } from '@/store/services/storeApi';
import { Text, TextProps } from '@chakra-ui/react';
import React, { FC } from 'react';

type HeadngProps = TextProps & {
	children: string | number;
	css?: any;
	basic?: any;
};

const Headng: FC<HeadngProps> = ({ children, css, ...props }) => {
	// const { data } = useGetStoreQuery({});
	// const basic = data?.basic;
	return (
		<Text
			fontWeight='400'
			fontSize='1rem'
			fontFamily={css?.primaryFont}
			color={css?.color}
			{...props}
		>
			{children}
		</Text>
	);
};

export default Headng;
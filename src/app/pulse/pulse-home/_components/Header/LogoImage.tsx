import { Flex, FlexProps, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type LogoImageProps = FlexProps & {
	src: string;
};

const LogoImage: FC<LogoImageProps> = ({ src, ...props }) => {
	return (
		<Link href='/'>
			<Flex w='100px' h='auto' objectFit='contain' {...props}>
				<Image src={src} w='full' h='auto' alt='Logo Image' />
			</Flex>
		</Link>
	);
};

export default LogoImage;
import { Flex, FlexProps, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type LogoImageProps = FlexProps & {
	src: string;
	header?: any;
};

const LogoImage: FC<LogoImageProps> = ({ src, header, ...props }) => {
	return (
		<Link href='/'>
			<Flex
				w={`${header?.logoWidth}px`}
				h={`${header?.logoHeight}px`}
				{...props}
			>
				<Image
					src={src}
					w='full'
					h='auto'
					alt='Logo Image'
					objectFit='contain'
				/>
			</Flex>
		</Link>
	);
};

export default LogoImage;

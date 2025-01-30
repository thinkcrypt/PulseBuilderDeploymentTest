import { useAppSelector } from '@/hooks';
import { Flex, FlexProps, Image } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

type LogoImageProps = FlexProps & {
	src: string;
	header?: any;
};

const LogoImage: FC<LogoImageProps> = ({ src, header, ...props }) => {
	const { display } = useAppSelector(state => state.builder);
	return (
		<Link style={{ width: '100%', height: '100%' }} href='/'>
			<Flex
				justifyContent={{
					base: 'flex-start',
					xl: display == 'sm' ? 'center' : 'flex-start',
				}}
				// w="full"
				// h="full"
			>
				<Flex
					w={`${header?.logoWidth}px`}
					h={`${header?.logoHeight}px`}
					{...props}
				>
					<Image
						src={src}
						w='full'
						h='full'
						alt='Logo Image'
						objectFit='cover'
					/>
				</Flex>
			</Flex>
		</Link>
	);
};

export default LogoImage;

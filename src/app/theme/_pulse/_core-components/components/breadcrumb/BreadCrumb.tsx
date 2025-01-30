'use client';
import React, { FC } from 'react';
import { usePathname } from 'next/navigation';
import {
	Box,
	BoxProps,
	Breadcrumb,
	BreadcrumbItem,
	Flex,
} from '@chakra-ui/react';

import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';
import useColors from '../../hooks/useColors';
import NormalText from '../text/NormalText';
// import useColors from '@/components/library/hooks/useColors';
// import NormalText from '@/components/text/NormalText';

type BreadCrumbProps = BoxProps & {
	basic: any;
	css?: any;
};

const BreadCrumb: FC<BreadCrumbProps> = ({ basic, css }) => {
	const endpoint = usePathname();

	// console.log('endpoint:', endpoint);

	const colors = useColors();

	return (
		<Flex py='1rem' alignItems='center'>
			<Breadcrumb
				separator={<MdKeyboardArrowRight size={20} color='gray.500' />}
			>
				<BreadcrumbItem color={colors?.fBg}>
					<Link href='/'>
						<NormalText fontSize='1.2rem' basic={basic}>
							Home
						</NormalText>
					</Link>
				</BreadcrumbItem>

				<BreadcrumbItem>
					<Link href='#'>
						<NormalText
							fontSize='1.2rem'
							color={css?.fgColor || colors?.warning}
							basic={basic}
						>
							{endpoint.slice(1)}
						</NormalText>
					</Link>
				</BreadcrumbItem>
			</Breadcrumb>
		</Flex>
	);
};

export default BreadCrumb;

import {
	Box,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerHeader,
	DrawerOverlay,
	Flex,
	Grid,
	Input,
	useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useGetAllQuery } from '@/components/library';
import { SpaceBetween } from '@/commerce-components';
import Heading from '../../_core-components/components/text/Heading';
import SearchProductSkeleton from '../../_core-components/components/pulse-skeleton/SearchProductSkeleton';
import NormalText from '../../_core-components/components/text/NormalText';
import SearchProductCard from '../../_components/Header/SearchProductCard';

export default function SearchDrawer({
	children,
	basic,
	content,
}: {
	children: React.ReactNode;
	basic: any;
	content: any;
}) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();

	const [search, setSearch] = React.useState('');
	const { data, isLoading, isFetching } = useGetAllQuery(
		{
			path: 'products',
			search: search,
		},
		{
			skip: !search || search == '',
		}
	);
	const css = content?.searchBoxCss;

	return (
		<>
			<Flex onClick={onOpen}>{children}</Flex>
			<Drawer
				isOpen={isOpen}
				placement='top'
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent
					bg={css?.bgColor || '#fff'}
					maxH='80vh'>
					<DrawerHeader>
						<SpaceBetween
							gap={4}
							pb='1rem'>
							<Heading
								fontSize='18px'
								color={css?.fgColor || '#000'}
								css={css}
								basic={basic}>
								Search For Products
							</Heading>
							<DrawerCloseButton />
						</SpaceBetween>
						<Input
							value={search}
							onChange={e => setSearch(e.target.value)}
							placeholder='Search for products'
							borderRadius='full'
							border={`1px solid ${css?.borderColor || '#000'}`}
							color={css?.fgColor || '#000'}
							mb='1rem'
						/>
					</DrawerHeader>

					<DrawerBody my='1rem'>
						{isFetching && [1, 2, 3, 4].map((item: number) => <SearchProductSkeleton key={item} />)}
						{!isFetching && (
							<>
								{data && data?.totalDocs == 0 && (
									<NormalText
										fontSize='1.4rem'
										mb='1.5rem'
										basic={basic}
										textAlign='center'>
										No Products Found
									</NormalText>
								)}
							</>
						)}
						<Box gap={4}>
							{!isFetching && (
								<>
									{data &&
										data?.totalDocs > 0 &&
										data?.doc?.map((item: any, i: number) => (
											<SearchProductCard
												basic={basic}
												css={css}
												item={item}
												key={i}
											/>
										))}
								</>
							)}
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}

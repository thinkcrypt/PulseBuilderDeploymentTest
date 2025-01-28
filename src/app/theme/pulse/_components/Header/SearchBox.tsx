'use client';
import { Box, Center, Flex, FlexProps, Image, Input } from '@chakra-ui/react';
import { FC, useEffect, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { HoverContentContainer, useGetAllQuery } from '@/components/library';
import SearchButton from './SearchButton';
import SearchShowBox from './SearchShowBox';
// import { PADDING_X } from '@/components/library/config/lib/constants/constants';
import searchBoxCssSchema from './searchBoxSchema';

type SearchBoxProps = FlexProps & {
	header: any;
	basic: any;
	content: any;
	dataModel?: any;
	path?: any;
};

const SearchBox: FC<SearchBoxProps> = ({
	header,
	basic,
	content,
	dataModel,
	path,
	...props
}) => {
	const [searchValue, setSearchValue] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const boxRef = useRef<HTMLDivElement | null>(null);
	const router = useRouter();

	const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const handleSearchPage = () => {
		if (searchValue.trim()) {
			router.push(
				`/products/search?search=${encodeURIComponent(searchValue.trim())}`
			);
		} else {
			alert('Please enter a search value'); // Replace with better UX if needed
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearchPage();
		}
	};

	const { data, isLoading, isFetching } = useGetAllQuery(
		{
			path: 'products',
			search: searchValue,
		},
		{
			skip: !searchValue || searchValue == '',
		}
	);

	useEffect(() => {
		const handleClickOutside = (event: any) => {
			if (boxRef.current && !boxRef.current.contains(event.target)) {
				setIsFocused(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);
	const searchCss = content?.searchBoxCss;
	return (
		<Flex ml='32px' w='600px' alignItems='center' gap={3} h='auto' {...props}>
			<Box w='full' position='relative' ref={boxRef}>
				<Input
					bg={header?.searchBoxBg}
					border={`${header?.borderWidth}px solid ${header?.borderColor}`}
					placeholder={header?.searchBoxText}
					size='md'
					borderRadius={`${header?.searchBoxRadius}`}
					color={header?.searchBoxFg}
					onKeyDown={handleKeyDown}
					onChange={handleSearchValue}
					onFocus={() => setIsFocused(true)}
				/>
				{/* dont use isFocused */}
				<SearchShowBox
					searchValue={searchValue}
					isFetching={isFetching}
					data={data}
					basic={basic}
					header={header}
					css={searchCss}
					content={content}
					path={path}
					dataModel={searchBoxCssSchema}
					onMouseDown={e => e.stopPropagation()}
				/>
			</Box>
			<SearchButton onClick={handleSearchPage} header={header} />
		</Flex>
	);
};

export default SearchBox;

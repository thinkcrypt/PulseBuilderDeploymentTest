'use client';
import React, { FC } from 'react';
import SearchValueBox from './SearchValueBox';
import SearchProducts from './SearchProducts';
import { useSearchParams } from 'next/navigation';

type SearchPageCompProps = {
	basic: any;
	content: any;
};

const SearchPageComp: FC<SearchPageCompProps> = ({ basic, content }) => {
	const searchParams = useSearchParams();
	const searchValue = searchParams.get('search');

	return (
		<>
			<SearchValueBox
				basic={basic}
				content={content}
				searchValue={searchValue}
			/>
			<SearchProducts
				basic={basic}
				content={content}
				searchValue={searchValue}
			/>
		</>
	);
};

export default SearchPageComp;

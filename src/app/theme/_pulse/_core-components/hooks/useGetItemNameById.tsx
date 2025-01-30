import { useGetByIdQuery } from '@/components/library';
import React from 'react';
// import { useGetByIdQuery } from '../';

const useGetItemNameById = ({ path, id }: { path: string; id: string }) => {
	const { data, isLoading, isFetching } = useGetByIdQuery(
		{
			path,
			id,
		},
		{
			skip: !id || !path,
		}
	);
	if (isLoading || isFetching) return { name: '', image: '' };
	if (!data) return { name: '', image: '', isFetching };
	if (data)
		return {
			name: data?.name,
			image: data?.image,
			isFetching,
		};
	return { name: '', image: '', isFetching };
};

export default useGetItemNameById;

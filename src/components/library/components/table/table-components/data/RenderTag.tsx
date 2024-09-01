import React from 'react';
import { Badge } from '@chakra-ui/react';
import { useGetByIdQuery } from '../../../../store';

const RenderTag = ({ path, item }: { path: string; item: any }) => {
	const { data } = useGetByIdQuery({ path, id: item });
	return <Badge>{data?.name}</Badge>;
};

export default RenderTag;

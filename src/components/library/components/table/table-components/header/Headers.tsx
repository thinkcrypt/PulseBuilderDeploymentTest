'use client';

import React, { useEffect, useState } from 'react';

import { Checkbox } from '@chakra-ui/react';
import {
	useAppDispatch,
	useAppSelector,
	useIsMobile,
	TableObjectDataProps,
	Title,
	selectAll,
} from '../../../../';

type HeadersProps = {
	tableData: TableObjectDataProps[];
	fields?: any[];
	selectable: boolean;
	isLoading: boolean;
	data: any;
	showMenu?: boolean;
};

const Headers = ({ tableData, fields, selectable, isLoading, data, showMenu }: HeadersProps) => {
	const [checked, setChecked] = useState(false);
	const dispatch = useAppDispatch();
	const { selectedItems } = useAppSelector(state => state.table);

	const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(e.target.checked);
		const ids = data?.map((item: any) => item?._id);
		dispatch(selectAll({ ids, isSelected: e.target.checked }));
	};

	useEffect(() => {
		const ids = data?.map((item: any) => item?._id);
		const isSelected = ids?.every((id: any) => selectedItems.includes(id));
		setChecked(isSelected);
	}, [selectedItems, data]);

	const isMobile = useIsMobile();

	if (isMobile) return null;

	return (
		<>
			{selectable && (
				<Title w='5px'>
					<Checkbox
						isChecked={checked}
						onChange={handleSelectAll}
						colorScheme='brand'
						disabled={isLoading}
					/>
				</Title>
			)}

			{tableData?.map(({ title, sort, dataKey, type }) => {
				if (!fields?.includes(dataKey) && type !== 'menu') return null;
				if (!showMenu && type == 'menu') return null;
				return (
					<Title
						key={title}
						ifItemsSelected={selectedItems?.length > 0 ? true : false}
						sort={sort}>
						{title}
					</Title>
				);
			})}
		</>
	);
};

export default Headers;

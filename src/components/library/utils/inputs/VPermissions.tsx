'use client';

import { FormControl, Stack, InputProps, Checkbox, Grid, Badge } from '@chakra-ui/react';

import React, { useState } from 'react';

import { Label, HelperText, Column } from '../..';

const WIDTH = '300px';
const MAX_H = '200px';

type VDataMenuProps = InputProps & {
	label: string;
	isRequired?: boolean;
	placeholder?: string;
	value: any;
	helper?: string;
	model?: string;
	dataModel?: any;
	options: any;
};

const VPermissions: React.FC<VDataMenuProps> = ({
	label,
	isRequired,
	placeholder,
	value,
	helper,
	model,
	dataModel,
	options,
	...props
}) => {
	const addPermission = (item: string, isChecked: boolean) => {
		if (isChecked) {
			if (value && !value.includes(item)) {
				const newArr = [...value, item];
				if (props.onChange) {
					const event = {
						target: {
							name: props.name,
							value: newArr,
						},
					} as any;
					props.onChange(event); // Call onChange with the synthetic event
				}
			}
		} else {
			const newArr = value && value?.length > 0 ? value?.filter((tag: string) => tag !== item) : [];
			if (props.onChange) {
				const event = {
					target: {
						name: props.name,
						value: newArr,
					},
				} as any;
				props.onChange(event); // Call onChange with the synthetic event
			}
		}
	};

	const renderMenuItems = options?.map((item: any, i: number) => (
		<Checkbox
			key={i}
			defaultChecked={value?.includes(item?.value)}
			id={item?.value}
			onChange={(e: any) => addPermission(item?.value, e.target.checked)}
			size='md'
			colorScheme='brand'>
			{item?.label}
		</Checkbox>
	));

	return (
		<Column>
			<FormControl
				isRequired={isRequired}
				gap={4}>
				<Stack
					spacing={2}
					w='full'>
					<Label>{label}</Label>
					{/* <Grid
						rowGap={2}
						gridTemplateColumns='1fr 1fr 1fr 1fr'
						w='100%'
						overflowY='scroll'>
						{value &&
							value?.length > 0 &&
							value?.map((item: any, i: number) => (
								<Badge
									key={i}
									colorScheme='red'>
									{item}
								</Badge>
							))}
					</Grid> */}
					<Grid
						rowGap={2}
						gridTemplateColumns='1fr 1fr 1fr 1fr'
						w='100%'
						overflowY='scroll'>
						{renderMenuItems}
					</Grid>

					{helper && <HelperText>{helper}</HelperText>}
				</Stack>
			</FormControl>
		</Column>
	);
};

export default VPermissions;

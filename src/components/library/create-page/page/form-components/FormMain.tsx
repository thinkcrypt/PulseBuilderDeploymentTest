import React, { FC } from 'react';
import {
	FormDivision,
	FormItem,
	FormInput,
	getFieldValue,
	handleChange,
	handleImage,
	handleSwitch,
	handleImageArray,
	handleNestedImage,
	handleNestedString,
} from '../../../';
import { Box, FormControl, GridItem, Select, Stack } from '@chakra-ui/react';

type FormMainType = {
	fields: any;
	formData: any;
	setFormData: any;
	setChangedData: any;
	isModal?: boolean;
	productListKeys?: any;
	hasProductlistKey?: boolean;
	handleChangeProductList?: any;
};

const FormMain: FC<FormMainType> = ({
	fields,
	formData,
	setFormData,
	setChangedData,
	isModal = false,
	productListKeys,
	hasProductlistKey = false,
	handleChangeProductList,
}) => {
	console.log('fields::', fields);
	const sections = React.useMemo(() => {
		let section: any[] = [];
		let sections: any[][] = [];

		if (!fields || !Array.isArray(fields)) return [];

		fields.forEach((field: any, i: number) => {
			section.push(field);
			if (field.endOfSection || i === fields.length - 1) {
				sections.push(section);
				section = [];
			}
		});

		return sections;
	}, [fields]);

	const getOnChangeHandler = (type: string, key?: string) => {
		const params = { formData, setFormData, setChangedData };

		switch (type) {
			case 'image':
				return (e: any) =>
					handleImage({ e, dataKey: key || 'image', ...params });
			case 'switch':
			case 'image-array':
				return (e: any, type?: string) =>
					handleImageArray({ e, dataKey: key || 'image', type, ...params });
			case 'checkbox':
				return (e: any) => handleSwitch({ e, ...params });
			case 'nested-image':
				return (e: any) =>
					handleNestedImage({ e, dataKey: key || 'image', ...params });
			case 'nested-string':
				return (e: any) => handleNestedString({ e, ...params });

			default:
				return (e: any) => handleChange({ e, ...params });
		}
	};

	// return <Text>{JSON.stringify(fields)}</Text>;

	return sections.map((section: any, i: number) => (
		<FormDivision key={i} isModal={isModal}>
			{section?.map((item: any, i: number) => (
				<FormItem
					isHidden={item?.renderCondition && !item?.renderCondition(formData)}
					item={item}
					key={i}
				>
					<>
						<FormInput
							formData={formData}
							setFormData={setFormData}
							setChangedData={setChangedData}
							isRequired={item?.isRequired || false}
							name={item?.name}
							label={item?.label}
							type={item?.type}
							value={getFieldValue({ name: item?.name, formData })}
							onChange={getOnChangeHandler(item?.type, item?.name)}
							model={item?.model}
							placeholder={item?.placeholder}
							options={item?.options}
							dataModel={item?.dataModel}
							item={item}
						/>
					</>
					{/* // )} */}
				</FormItem>
			))}
			{/* <Box bg="red.200">dfh</Box> */}
			{hasProductlistKey && (
				<GridItem colSpan={2}>
					<Select
						placeholder='Select product list key'
						fontSize='sm'
						value={productListKeys}
						onChange={handleChangeProductList}

						//   w="full"
					>
						<option value='productList'>Product List</option>
						<option value='productListTwo'>Product List Two</option>
						<option value='productListThree'>Product List Three</option>
						<option value='productListFour'>Product List Four</option>
						<option value='productListFive'>Product List Five</option>
					</Select>
				</GridItem>
			)}
		</FormDivision>
	));
};

export default FormMain;

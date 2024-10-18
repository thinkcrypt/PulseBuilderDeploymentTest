'use client';
import React, { ReactNode, useState } from 'react';
import {
	Layout,
	useIsMobile,
	Column,
	VInput,
	sizes,
	usePostMutation,
	ShadowContainer as Container,
	shadow,
	VDataMenu,
	createFormFields,
	useCustomToast,
} from '@/components/library';
import { useParams } from 'next/navigation';
import { Grid, Table, Thead, Tbody, Th, TableContainer, Text, Button } from '@chakra-ui/react';

import { Tr, PurchaseProduct } from '@/components/library';
import schema from '@/models/supplier/supplier.schema';

const addSupplierModel = createFormFields({
	schema,
	layout: [
		{
			sectionTitle: 'Supplier Information',
			fields: ['name', 'email', 'phone', 'address'],
		},
	],
});

const CreatePurchase = () => {
	const isMobile = useIsMobile();

	const [formData, setFormData] = useState({
		subTotal: 0,
		items: [],
		total: 0,
		shippingCost: 0,
		paidAmount: 0,
		date: new Date().toISOString(),
		supplier: '',
	});

	const handleChange = (e: any) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const setItem = ({ item, qty, price }: { item: any; price: any; qty: number }) => {
		setFormData((prevFormData: any) => {
			const existingItemIndex: any = prevFormData.items.findIndex(
				(existingItem: any) => existingItem._id === item._id
			);

			if (existingItemIndex !== -1) {
				// Item exists, update the quantity
				const updatedItems = [...prevFormData.items];
				updatedItems[existingItemIndex] = {
					...updatedItems[existingItemIndex],
					qty: qty,
					price: price,
					subTotal: price * qty,
				};
				return { ...prevFormData, items: updatedItems };
			} else {
				// Item does not exist, add the item
				return {
					...prevFormData,
					items: [
						...prevFormData.items,
						{
							_id: item._id,
							name: item?.name,
							price: item?.cost,
							qty: 1,
							subTotal: item?.cost * 1,
						}, // Add new field here
					],
				};
			}
		});
	};
	const [trigger, result] = usePostMutation();

	useCustomToast({
		...result,
		successText: 'Purchase created successfully',
	});

	const handleSubmit = (e: any) => {
		e.preventDefault();
		trigger({
			invalidate: ['purchases', 'products'],
			path: 'purchases',
			body: {
				...formData,
				dueAmount:
					formData.items.reduce((acc: number, item: any) => acc + item.subTotal, 0) +
					Number(formData.shippingCost) -
					Number(formData.paidAmount),
				subTotal: formData.items.reduce((acc: number, item: any) => acc + item.subTotal, 0),
				total:
					formData.items.reduce((acc: number, item: any) => acc + item.subTotal, 0) +
					Number(formData.shippingCost),
			},
		});
	};

	const handleSelectProduct = (e: any) => {
		const { value } = e.target;
		const productExists = formData?.items?.some((item: any) => item?._id === value?._id);
		if (productExists) {
			return;
		}

		setFormData((prevFormData: any) => {
			return {
				...prevFormData,
				items: [
					...prevFormData.items,
					{
						_id: value._id,
						name: value?.name,
						price: value?.cost,
						qty: 1,
						subTotal: value?.cost * 1,
					},
				],
			};
		});
	};

	const inputs = (
		<>
			<Three>
				<VDataMenu
					dataModel={addSupplierModel}
					isRequired={true}
					label='Supplier'
					value={formData.supplier}
					name='supplier'
					model='suppliers'
					onChange={handleChange}
				/>

				<VInput
					isRequired={true}
					type='date'
					label='Purchase Date'
					value={formData.date}
					name='date'
					onChange={handleChange}
				/>
				<VInput
					label='Sub Total'
					value={formData.items.reduce((acc: number, item: any) => acc + item.subTotal, 0)}
					name='subTotal'
					type='number'
					onChange={handleChange}
					isReadOnly={true}
				/>
			</Three>
			<Three>
				<VInput
					isRequired={true}
					type='number'
					label='Shipping Cost'
					value={formData.shippingCost}
					name='shippingCost'
					onChange={handleChange}
				/>
				<VInput
					isRequired={true}
					type='number'
					label='Paid Amount'
					value={formData.paidAmount}
					name='paidAmount'
					onChange={handleChange}
				/>
				<VInput
					label='Due Amount'
					type='number'
					value={
						formData.items.reduce((acc: number, item: any) => acc + item.subTotal, 0) +
						Number(formData.shippingCost) -
						Number(formData.paidAmount)
					}
					onChange={handleChange}
					name='dueAmount'
					isReadOnly={true}
				/>
			</Three>

			<Row>
				<VDataMenu
					value={''}
					label='Add product'
					model='products'
					unselect={false}
					type='object'
					onChange={handleSelectProduct}
				/>
				<VInput
					label='Total'
					value={
						formData.items.reduce((acc: number, item: any) => acc + item.subTotal, 0) +
						Number(formData.shippingCost)
					}
					name='total'
					onChange={handleChange}
					isReadOnly={true}
				/>
			</Row>
		</>
	);

	const table = (
		<Table size='sm'>
			<Thead {...(isMobile && { display: 'none' })}>
				<Tr>
					<Th>#</Th>
					<Th>Product Name</Th>
					<Th>Qty</Th>
					<Th isNumeric>Unit Cost Price</Th>
					<Th isNumeric>SubTotal</Th>
					<Th>delete</Th>
				</Tr>
			</Thead>

			<Tbody>
				{formData?.items?.map((item: any, i: number) => (
					<PurchaseProduct
						key={i}
						item={item}
						i={i}
						setItem={setItem}
					/>
				))}
			</Tbody>
		</Table>
	);

	return (
		<Layout
			title='Purchase'
			path='purchases'>
			<form onSubmit={handleSubmit}>
				<Column gap={4}>
					<Grid
						gridTemplateColumns={{ base: '1fr', md: '1fr' }}
						gap={4}>
						<Container>{inputs}</Container>
					</Grid>
					<TableContainer
						p={{ base: 0, md: 4 }}
						borderRadius={sizes.RADIUS_MENU}
						boxShadow={{ base: 'none', md: shadow.CARD }}
						borderWidth={{ base: 0, md: 1 }}>
						{table}
					</TableContainer>
					<Button
						type='submit'
						isLoading={result.isLoading}>
						Create Purchase
					</Button>
				</Column>
			</form>
		</Layout>
	);
};

const Row = ({ children }: { children: ReactNode }) => (
	<Grid
		gridTemplateColumns='1fr 1fr'
		gap={2}>
		{children}
	</Grid>
);

const Three = ({ children }: { children: ReactNode }) => (
	<Grid
		gridTemplateColumns='1fr 1fr 1fr'
		gap={2}>
		{children}
	</Grid>
);

export default CreatePurchase;

import React from 'react';
import { Column, DetailItem } from '@/components/library';

const BasicDetails = ({ data }: { data: any }) => {
	const convertAddress = (address: any) => {
		if (!address) return 'Walk-in Customer';
		const street = address?.street ? `${address?.street}, ` : '';
		const city = address?.city ? `${address?.city}, ` : '';
		const postalCode = address?.postalCode ? `${address?.postalCode}, ` : '';
		const country = address?.country ? `${address?.country}` : '';
		return `${street}${city}${postalCode}${country}`;
	};
	return (
		<>
			<Column
				gap={1}
				fontSize='.95rem'>
				<DetailItem
					row
					title='Invoice:'>
					#{data?.invoice}
				</DetailItem>
				<DetailItem
					row
					title='Customer:'>
					{data?.customer?.name || 'Walk-in Customer'}
				</DetailItem>
				<DetailItem
					row
					title='Order Date:'>
					{data?.createdAt ? new Date(data?.createdAt).toLocaleString() : ''}
				</DetailItem>
				<DetailItem
					row
					title='Payment Status:'>
					{data?.isPaid ? 'Paid' : 'Unpaid'}
				</DetailItem>
				<DetailItem title='Address:'>{convertAddress(data?.address)}</DetailItem>
			</Column>
			<Column
				gap={1}
				fontSize='.95rem'>
				<DetailItem
					row
					title='Recipient Name'>
					{data?.address?.name}
				</DetailItem>
				<DetailItem
					row
					title='Recipient Email:'>
					{data?.address?.email}
				</DetailItem>
				<DetailItem
					row
					title='Recipient Phone:'>
					{data?.address?.phone}
				</DetailItem>
			</Column>
		</>
	);
};

export default BasicDetails;

import { URL } from '../../';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tags = [
	'self',
	'users',
	'organizations',
	'filters',
	'categories',
	'uploads',
	'coupons',
	'brands',
	'products',
	'count',
	'scan',
	'collection',
	'collections',
];

export const mainApi = createApi({
	reducerPath: 'mainApi',
	baseQuery: fetchBaseQuery({
		baseUrl: `${URL.api}/api`,
		prepareHeaders: (headers, { getState }) => {
			const token: string = (getState() as any).auth?.token;
			if (token) {
				headers.set('authorization', token);
			}
		},
	}),
	tagTypes: tags,
	endpoints: builder => ({}),
});

export default mainApi;

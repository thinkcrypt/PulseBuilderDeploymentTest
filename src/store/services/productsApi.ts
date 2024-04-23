import mainApi from './mainApi';
import { User, ListType, TableProps } from '../store.types';
import { BASE_LIMIT } from '@/lib/constants';

export const productsApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		getAllProducts: builder.query<ListType<any>, TableProps>({
			query: ({
				sort = '-createdAt',
				page = 1,
				limit = BASE_LIMIT,
				search = '',
				isActive,
				filters = {},
			}) => ({
				url: 'products',
				params: { sort, page, limit, search, isActive, ...filters },
			}),
			providesTags: ['Products'],
		}),
		addProduct: builder.mutation<any, any>({
			query: body => ({
				url: 'products',
				method: 'POST',
				body,
			}),
			invalidatesTags: ['products'],
		}),
	}),
});

export const { useGetAllProductsQuery, useAddProductMutation } = productsApi;

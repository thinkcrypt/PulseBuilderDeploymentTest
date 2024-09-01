import { BASE_LIMIT } from '../../';
import mainApi from './mainApi';

export const userApi = mainApi.injectEndpoints({
	overrideExisting: true,
	endpoints: builder => ({
		getFilters: builder.query<any, string>({
			query: id => `${id}/get/filters`,
			providesTags: ['Filters'],
		}),
		getCount: builder.query<any, string>({
			query: id => `${id}/get/count`,
			providesTags: ['count', 'items', 'categories', 'scan'],
		}),
		getAll: builder.query<any, any>({
			query: ({
				sort = '-createdAt',
				page = 1,
				limit = BASE_LIMIT,
				search = '',
				isActive,
				filters = {},
				path,
			}) => ({
				url: path,
				params: { sort, page, limit, search, isActive, ...filters },
			}),
			providesTags: (result, error, { path }) => [path],
		}),
		getSelectData: builder.query<any, string>({
			query: (id: any) => `${id}?limit=1000&fields=name&sort=name`,
			providesTags: ['filters', 'products', 'brands', 'categories', 'coupons', 'collections'],
		}),
		getById: builder.query<any, { path: string; id: any }>({
			query: ({ path, id }): any => `${path}/${id}`,
			providesTags: [
				'products',
				'brands',
				'categories',
				'coupons',
				'items',
				'collection',
				'collections',
			],
		}),
		getByIdToEdit: builder.query<any, { path: string; id: any }>({
			query: ({ path, id }): any => `${path}/edit/${id}`,
			providesTags: [
				'products',
				'brands',
				'categories',
				'coupons',
				'items',
				'collection',
				'collections',
			],
		}),
		post: builder.mutation<any, { path: string; body: any; invalidate?: string; type?: string }>({
			query: ({ path, body, invalidate }): any => ({
				url: path,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: (result, error, { path, invalidate = '' }) => [path, invalidate],
		}),
		export: builder.mutation<any, { path: string; body: any; invalidate?: string; type?: string }>({
			query: ({ path, body, invalidate, type = 'csv' }): any => ({
				url: `${path}/export/${type}`,
				method: 'POST',
				body: { fields: body },
				responseHandler: (response: any) => response.blob(),
			}),
			onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
				try {
					const result = await queryFulfilled;

					const url = window.URL.createObjectURL(result.data);
					const link = document.createElement('a');
					link.href = url;
					const date = new Date();
					const timestamp = date.toISOString().replace(/[:.]/g, '-');
					link.setAttribute('download', `data_${timestamp}.csv`);

					document.body.appendChild(link);
					link.click();
					link.remove();
				} catch (e: any) {
					//throw new Error(e.message);
				}
			},
		}),
		exportMany: builder.mutation<
			any,
			{ path: string; body: any; invalidate?: string; type?: string }
		>({
			query: ({ path, body, invalidate, type = 'csv' }): any => ({
				url: `${path}/export/${type}`,
				method: 'POST',
				body: { fields: body?.fields, ids: body?.ids },
				responseHandler: (response: any) => response.blob(),
			}),
			onQueryStarted: async (arg, { dispatch, queryFulfilled }) => {
				try {
					const result = await queryFulfilled;

					const url = window.URL.createObjectURL(result.data);
					const link = document.createElement('a');
					link.href = url;
					const date = new Date();
					const timestamp = date.toISOString().replace(/[:.]/g, '-');
					link.setAttribute('download', `data_${timestamp}.csv`);

					document.body.appendChild(link);
					link.click();
					link.remove();
				} catch (e: any) {
					//throw new Error(e.message);
				}
			},
		}),
		updateById: builder.mutation<any, { path: string; id: string; body: any; invalidate?: any }>({
			query: ({ path, id, body }): any => ({
				url: `${path}/${id}`,
				method: 'PUT',
				body: body,
			}),
			invalidatesTags: (result, error, { path, id, invalidate = '' }) => [path, invalidate],
		}),
		updateMany: builder.mutation<any, { path: string; body: any; invalidate?: any }>({
			query: ({ path, body }): any => ({
				url: `${path}/update/many`,
				method: 'PUT',
				body: body,
			}),
			invalidatesTags: (result, error, { path, invalidate = '' }) => [path, invalidate],
		}),
		copyItem: builder.mutation<any, { path: string; body: any; invalidate?: any }>({
			query: ({ path, body }): any => ({
				url: `${path}/copy/${body.id}`,
				method: 'PUT',
				body: body,
			}),
			invalidatesTags: (result, error, { path, invalidate = '' }) => [path, invalidate],
		}),
		deleteById: builder.mutation<any, { path: string; id: string }>({
			query: ({ path, id }): any => ({
				url: `${path}/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, { path, id }) => [path],
		}),
	}),
});

export const {
	useGetFiltersQuery,
	useGetSelectDataQuery,
	useGetByIdQuery,
	useUpdateByIdMutation,
	useGetAllQuery,
	useDeleteByIdMutation,
	usePostMutation,
	useGetCountQuery,
	useExportMutation,
	useUpdateManyMutation,
	useCopyItemMutation,
	useGetByIdToEditQuery,
	useLazyGetByIdToEditQuery,
	useExportManyMutation,
} = userApi;

import mainApi from '@/components/library/store/services/mainApi';
import { LoginBodyType, LoginPayloadType } from './types';

export const authApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		lgoin: builder.mutation<LoginPayloadType, any>({
			query: ({ email, password, lead, from }) => ({
				url: `auth/login`,
				method: 'POST',
				body: {
					email,
					password,
					lead,
					from,
				},
			}),
			invalidatesTags: ['self'],
		}),
		register: builder.mutation<any, any>({
			query: body => ({
				url: `auth/register`,
				method: 'POST',
				body: body,
			}),
			invalidatesTags: ['self'],
		}),
		updatePassword: builder.mutation<any, any>({
			query: body => ({
				url: `auth/change-password`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['self'],
		}),
		getSelf: builder.query<any, any>({
			query: () => `auth/self`,
			providesTags: ['self'],
		}),
		updateSelf: builder.mutation<any, any>({
			query: body => ({
				url: `auth/update/self`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: ['self'],
		}),
		updatePreferences: builder.mutation<any, any>({
			query: ({ field, preferences }) => ({
				url: `auth/update/preferences`,
				method: 'PUT',
				body: { field, preferences },
			}),
			invalidatesTags: (result, error, { field, preferences }) => [field, 'self'],
		}),
	}),
	overrideExisting: false,
});

export const {
	useLgoinMutation,
	useGetSelfQuery,
	useUpdatePreferencesMutation,
	useRegisterMutation,
	useUpdatePasswordMutation,
	useUpdateSelfMutation,
} = authApi;
export default authApi;

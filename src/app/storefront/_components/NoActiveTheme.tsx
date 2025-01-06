'use client';
import React from 'react';
import { NoDataContainer } from '@/components/library';

const NoActiveTheme = () => {
	return (
		<NoDataContainer title='No Active Theme'>
			There is currently no active theme on your website. You can activate one of your saved themes
			or explore our marketplace to find the perfect design. Build stunning eCommerce projects
			effortlessly with themes tailored to your needs!
		</NoDataContainer>
	);
};

export default NoActiveTheme;

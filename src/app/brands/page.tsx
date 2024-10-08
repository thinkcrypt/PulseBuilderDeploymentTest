'use client';
import React from 'react';
import { NextPage } from 'next';
import { PageTable } from '@/components/library';
import brandsTable from '@/models/brand/brand.model';

const page: NextPage = () => {
	return <PageTable table={brandsTable} />;
};

export default page;

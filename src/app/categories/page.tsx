'use client';

import React from 'react';
import { NextPage } from 'next';
import { PageTable } from '@/components/library';
import { categories } from '@/models';

const { getAll } = categories;

const CatPage: NextPage = () => {
	return <PageTable table={getAll} />;
};

export default CatPage;

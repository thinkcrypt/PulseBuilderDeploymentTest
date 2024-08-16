'use client';

import React from 'react';
import { NextPage } from 'next';
import { PageTable } from '@/components/library';
import data from './dataModel';

const page: NextPage = () => {
	return <PageTable table={data} />;
};

export default page;

'use client';

import React from 'react';
import { NextPage } from 'next';
import { TableObjectProps, PageTable } from '@/components/library';
import { viewAll as table } from '@/models/products/products.model';

//import table from '@/models/products/viewAllProductModel';

const page: NextPage = () => {
	return <PageTable table={table} />;
};

export default page;

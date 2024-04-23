import React from 'react';
import { NextPage } from 'next';
import PageTable from '@/components/library/pages/page-tables/PageTable';
import data from './dataModel';

const EmployeePage: NextPage = () => {
	return <PageTable table={data} />;
};

export default EmployeePage;

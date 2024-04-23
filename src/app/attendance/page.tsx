import React from 'react';
import { NextPage } from 'next';
import PageTable from '@/components/library/pages/page-tables/PageTable';
import data from './dataModel';

const AttendancePage: NextPage = () => {
	return <PageTable table={data} />;
};

export default AttendancePage;

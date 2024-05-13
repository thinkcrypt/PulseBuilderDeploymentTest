'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Flex, Heading, Stat, StatLabel, StatNumber } from '@chakra-ui/react';
import HomePage from '@/components/pages/HomePage';
import Layout from '@/components/layout/Layout';
import Count from '@/components/library/stat/Count';

export default function Home() {
	return (
		<Layout title='Dashboard'>
			<Heading>Dashboard</Heading>
			<Flex
				gap={2}
				flexWrap='wrap'>
				<Count
					title='Total Scans'
					path='scans'
				/>
				<Count
					title='Total Items'
					path='items'
				/>
				<Count
					title='Categories'
					path='categories'
				/>
			</Flex>
		</Layout>
	);
}

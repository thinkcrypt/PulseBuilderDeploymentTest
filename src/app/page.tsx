import Image from 'next/image';
import styles from './page.module.css';
import { Flex, Heading } from '@chakra-ui/react';
import HomePage from '@/components/pages/HomePage';
import Layout from '@/components/layout/Layout';

export default function Home() {
	return (
		<Layout title='Dashboard'>
			<Heading>Start</Heading>
		</Layout>
	);
}

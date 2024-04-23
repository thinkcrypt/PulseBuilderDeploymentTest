import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/library/providers/Providers';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Thinkcrypt ERP',
	description: 'Thinkcrypt ERP',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<Head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, user-scalable=yes'
				/>
			</Head>
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

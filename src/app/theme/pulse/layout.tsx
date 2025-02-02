import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Builder | Pulse Theme',
};

export default function Page({ children }: { children: React.ReactNode }) {
	return children;
}

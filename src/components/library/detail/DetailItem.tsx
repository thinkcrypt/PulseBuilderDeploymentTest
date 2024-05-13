import Column from '@/components/containers/Column';
import { Flex, Heading, Text } from '@chakra-ui/react';
import { ReactNode } from 'react';

const DetailItem = ({ title, children }: { title: string; children: ReactNode }) => {
	return (
		<Column>
			<Heading size='sm'>{title}</Heading>
			<Text>{children}</Text>
		</Column>
	);
};

export default DetailItem;

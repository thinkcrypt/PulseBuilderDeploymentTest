import { Text, FlexProps } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Column } from '../';

const DetailItem = ({
	title,
	children,
	row,
	...props
}: FlexProps & { title: string; children: ReactNode; row?: boolean }) => {
	return (
		<Column
			{...(row && { gap: 2 })}
			flexDir={row ? 'row' : 'column'}
			{...props}>
			<Text fontWeight='700'>{title}</Text>
			<Text>{children}</Text>
		</Column>
	);
};

export default DetailItem;

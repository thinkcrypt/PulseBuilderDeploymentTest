import { Flex, FlexProps, Heading, Button, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { CreateModal, Icon } from '../../';
import ExportModal from '../modals/export/ExportModal';

type PageHeadingProps = FlexProps & {
	title: string;
	button?: string;
	href?: string;
	isModal?: boolean;
	path: string;
	data?: any;
	export?: boolean;
	table: any;
};

const PageHeading: React.FC<PageHeadingProps> = ({
	title,
	href,
	button,
	isModal = false,
	path,
	table,
	data,
	export: exportData,
	...props
}) => {
	const iconColor = useColorModeValue('#fafafa', '#171717');
	const btn = (
		<Button
			size='sm'
			pl={3}
			leftIcon={
				<Icon
					size={18}
					name='add'
					color={iconColor}
				/>
			}>
			{button}
		</Button>
	);
	const exportButton = <ExportModal path={path} />;
	const toButton = isModal ? (
		<CreateModal
			trigger={btn}
			type='post'
			path={path}
			data={data}
			invalidate={table?.invalidate}
			prompt={table?.button?.prompt}
		/>
	) : href ? (
		<Link href={href}>{btn}</Link>
	) : (
		btn
	);

	return (
		<Flex
			flexDir={{ base: 'column', md: 'row' }}
			gap={2}
			justify='space-between'
			{...props}
			align={{ base: 'flex-start', md: 'center' }}
			pt={4}>
			<Heading fontSize={{ base: '1.5rem', md: '1.75rem' }}>{title}</Heading>
			<Flex
				gap={2}
				w='full'
				justify='flex-end'>
				<>{Boolean(exportData) && exportButton}</>
				<>{(Boolean(button) || isModal) && toButton}</>
			</Flex>
		</Flex>
	);
};

export default PageHeading;

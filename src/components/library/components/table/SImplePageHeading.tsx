import { Flex, FlexProps, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { CreateModal } from '../../';
import ExportModal from '../modals/export/ExportModal';

type PageHeadingProps = FlexProps & {
	title: string;
	path: string;
	invalidate?: any;
	button?: string;
	href?: string;
	isModal?: boolean;
	data?: any;
	id?: string;
	export?: boolean;
	type?: 'post' | 'update';
};

const SimplePageHeading: React.FC<PageHeadingProps> = ({
	title,
	href,
	button,
	isModal = false,
	path,
	data,
	id,
	invalidate,
	type = 'post',
	export: exportData,
	...props
}) => {
	const btn = <Button size='sm'>{button}</Button>;
	const exportButton = <ExportModal path={path} />;
	const toButton = isModal ? (
		<CreateModal
			id={id}
			trigger={btn}
			type={type}
			path={path}
			data={data}
			invalidate={invalidate}
		/>
	) : href ? (
		<Link href={href}>{btn}</Link>
	) : (
		btn
	);

	return (
		<Flex
			justify='space-between'
			{...props}
			align='center'>
			<Heading fontSize='1.75rem'>{title}</Heading>
			<Flex gap={2}>
				<>{Boolean(exportData) && exportButton}</>
				<>{(Boolean(button) || isModal) && toButton}</>
			</Flex>
		</Flex>
	);
};

export default SimplePageHeading;

import { Flex, FlexProps, Heading, Button } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import CreateModal from '../modals/CreateModal';

type PageHeadingProps = FlexProps & {
	title: string;
	button?: string;
	href?: string;
	isModal?: boolean;
	path: string;
	data?: any;
};

const PageHeading: React.FC<PageHeadingProps> = ({
	title,
	href,
	button,
	isModal = false,
	path,
	data,
	...props
}) => {
	const btn = <Button size='sm'>{button}</Button>;
	const toButton = isModal ? (
		<CreateModal trigger={btn} type='post' path={path} data={data} />
	) : href ? (
		<Link href={href}>{btn}</Link>
	) : (
		btn
	);

	return (
		<Flex justify='space-between' {...props} align='center'>
			<Heading fontSize='1.75rem'>{title}</Heading>
			<Flex gap={2}>
				<>{(Boolean(button) || isModal) && toButton}</>
			</Flex>
		</Flex>
	);
};

export default PageHeading;

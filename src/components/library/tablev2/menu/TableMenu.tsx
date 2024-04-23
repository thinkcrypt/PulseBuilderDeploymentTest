import React from 'react';
import { Menu, MenuButton, IconButton } from '@chakra-ui/react';
import TableData from '../data/TableData';
import Icon from '../../icon/Icon';
import Link from 'next/link';
import MenuContainer from '../../menu/MenuContainer';
import MenuItem from '../../menu/CustomMenuItem';
import DeleteItemModal from '../modals/DeleteItemModel';

const TableMenu = ({
	data,
	id,
	path,
	title,
}: {
	data: any;
	id: string;
	path: string;
	title: any;
}) => {
	return (
		<Menu>
			<TableData>
				<MenuButton
					as={IconButton}
					size='sm'
					icon={<Icon name='settings' />}
					variant='ghost'
				/>
			</TableData>

			<MenuContainer>
				{data?.map((item: any, i: number) => {
					if (item?.type == 'edit')
						return (
							<Link
								key={i}
								href={`/${path}/edit/${id}`}>
								<MenuItem key={i}>{item?.title}</MenuItem>
							</Link>
						);
					if (item?.type == 'view')
						return (
							<Link
								key={i}
								href={`/${path}/${id}`}>
								<MenuItem>{item?.title}</MenuItem>
							</Link>
						);

					if (item?.type == 'delete')
						return (
							<DeleteItemModal
								key={i}
								id={id}
								title={title}
								path={path}
							/>
						);

					return <MenuItem key={i}>{item?.title}</MenuItem>;
				})}
			</MenuContainer>
		</Menu>
	);
};

export default TableMenu;

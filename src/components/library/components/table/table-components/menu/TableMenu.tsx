import React, { FC } from 'react';
import { Menu, MenuButton, IconButton } from '@chakra-ui/react';
import { Icon, useIsMobile, CustomTd, CreateModal } from '../../../../';
import Link from 'next/link';

import MenuContainer from '../../../../menu/MenuContainer';
import MenuItem from '../../../../menu/CustomMenuItem';
import DeleteItemModal from '../modals/DeleteItemModel';
import ViewItemModal from '../modals/ViewItemModal';

type TableMenuProps = {
	data: any;
	id: string;
	path: string;
	title: any;
	item: any;
};

const TableMenu: FC<TableMenuProps> = ({ data, id, path, title, item: dataItem }) => {
	const isMobile = useIsMobile();
	return (
		<Menu>
			<CustomTd>
				<MenuButton
					sx={isMobile ? { position: 'absolute', right: 2, top: 2 } : {}}
					as={IconButton}
					size={isMobile ? 'md' : 'sm'}
					icon={
						<Icon
							name={isMobile ? 'dots' : 'settings'}
							size={isMobile ? 20 : 12}
						/>
					}
					variant='ghost'
				/>
			</CustomTd>

			<MenuContainer>
				{data?.map((item: any, i: number) => {
					switch (item.type) {
						case 'redirect':
							return (
								<Link
									key={i}
									href={item?.href || '#'}>
									<MenuItem key={i}>{item?.title}</MenuItem>
								</Link>
							);
						case 'edit':
							return (
								<Link
									key={i}
									href={`/${path}/edit/${id}`}>
									<MenuItem key={i}>{item?.title}</MenuItem>
								</Link>
							);

						case 'view':
							return (
								<Link
									key={i}
									href={`/${path}/${id}`}>
									<MenuItem>{item?.title}</MenuItem>
								</Link>
							);

						case 'delete':
							return (
								<DeleteItemModal
									key={i}
									id={id}
									title={title}
									path={path}
								/>
							);
						case 'view-modal':
							return (
								<ViewItemModal
									key={i}
									id={id}
									title={title}
									path={path}
									dataModel={item?.dataModel}
								/>
							);

						case 'edit-modal':
							return (
								<CreateModal
									key={i}
									id={id}
									path={path}
									data={item?.dataModel}
									trigger={<MenuItem>Edit</MenuItem>}
									type='update'
								/>
							);

						case 'custom':
							return (
								<item.modal
									key={i}
									id={id}
									data={dataItem}
									path={path}
								/>
							);
						case 'custom-modal':
							return (
								<item.modal
									key={i}
									id={id}
									data={dataItem}
									path={path}
									title={item?.title}
								/>
							);
						default:
							return <MenuItem key={i}>{item?.title}</MenuItem>;
					}
				})}
			</MenuContainer>
		</Menu>
	);
};

export default TableMenu;

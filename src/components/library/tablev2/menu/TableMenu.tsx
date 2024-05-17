import React, { FC } from 'react';
import { Menu, MenuButton, IconButton } from '@chakra-ui/react';
import Icon from '../../icon/Icon';
import Link from 'next/link';
import MenuContainer from '../../menu/MenuContainer';
import MenuItem from '../../menu/CustomMenuItem';
import DeleteItemModal from '../modals/DeleteItemModel';
import ViewItemModal from '../modals/ViewItemModal';
import CustomTd from '../data/CustomTd';
import useIsMobile from '../../hooks/useIsMobile';

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

						case 'custom':
							return (
								<item.modal
									key={i}
									id={id}
									data={dataItem}
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

import React, { FC } from 'react';
import { Menu, MenuButton, IconButton } from '@chakra-ui/react';
import {
	Icon,
	useIsMobile,
	MenuContainer,
	EditManyModal,
	EditManySelectModal,
	EditDataSelectModal,
} from '../../../../';

type TableMenuProps = {
	path: string;
	data: any;
	hide: boolean;
	items: any[];
};

const SelectedMenu: FC<TableMenuProps> = ({ path, hide, data, items }) => {
	if (hide) return null;

	const isMobile = useIsMobile();
	const { title, id, data: dataItem } = data;
	return (
		<Menu>
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

			<MenuContainer>
				{data?.map((item: any, i: number) => {
					switch (item.type) {
						case 'edit':
							return (
								<EditManyModal
									key={i}
									keys={item?.key}
									value={item?.value}
									items={items}
									title={item?.title}
									prompt={item?.prompt}
									path={path}
								/>
							);

						case 'edit-select':
							return (
								<EditManySelectModal
									key={i}
									keys={item?.key}
									items={items}
									title={item?.title}
									prompt={item?.prompt}
									path={path}
									options={item?.options}
								/>
							);
						case 'edit-data-select':
							return (
								<EditDataSelectModal
									key={i}
									dataModel={item?.dataModel}
									keys={item?.key}
									items={items}
									title={item?.title}
									prompt={item?.prompt}
									path={path}
									dataPath={item?.dataPath}
								/>
							);
						default:
							return null;
					}
				})}
			</MenuContainer>
		</Menu>
	);
};

export default SelectedMenu;

import { Accordion, AccordionButton, AccordionItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useGetItemNameById, NormalText } from '../../../../_components/index';

type SimpleNavListType = {
	css?: any;
	basic?: any;
	item?: any;
	key?: number;
	index?: number;
	border?: any;
	collectionLength?: any;
};

const SimpleNavLists: FC<SimpleNavListType> = ({
	index,
	item,
	css,
	basic,
	border,
	collectionLength,
	key,
}) => {
	const { name, image, isFetching } = useGetItemNameById({
		id: item?.id,
		path: item?.type,
	});
	if (isFetching) return;
	return (
		<>
			<Accordion allowToggle key={key}>
				<AccordionItem
					border='none'
					borderBottom={
						index === collectionLength
							? 'none' // No border for the last item
							: border
					}
				>
					<AccordionButton w='full' px='0px'>
						<NormalText
							css={css}
							basic={basic}
							textAlign='left'
							flex='1'
							fontSize={'16px'}
						>
							{name}
						</NormalText>
						{/* <AccordionIcon /> */}
					</AccordionButton>
				</AccordionItem>
			</Accordion>
		</>
	);
};

export default SimpleNavLists;

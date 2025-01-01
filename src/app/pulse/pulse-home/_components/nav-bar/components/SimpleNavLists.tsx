import { Accordion, AccordionButton, AccordionItem } from '@chakra-ui/react';
import React, { FC } from 'react';
import { NormalText } from '../../text';
import useGetItemNameById from '@/hooks/useGetItemById';

type SimpleNavListType = {
	css?: any;
	basic?: any;
	item?: any;
	key?: number;
};

const SimpleNavLists: FC<SimpleNavListType> = ({ item, css, basic, key }) => {
	const { name, image, isFetching } = useGetItemNameById({
		id: item?.id,
		path: item?.type,
	});
	if (isFetching) return;
	return (
		<>
			<Accordion allowToggle key={key}>
				<AccordionItem>
					<AccordionButton w='full'>
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

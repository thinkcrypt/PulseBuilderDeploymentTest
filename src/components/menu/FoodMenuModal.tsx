import React, { FC } from 'react';

import {
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Button,
	useDisclosure,
	Flex,
	Image,
	Text,
	Heading,
	CloseButton,
} from '@chakra-ui/react';
import Column from '../library/containers/Column';
import { useSwipeable } from 'react-swipeable';
import SpaceBetween from '../containers/SpaceBetween';

type FoodMenuItemProps = {
	name: string;
	price: number;
	description: string;
	isDiscounted?: boolean;
	discountedPrice?: number;
	image?: string;
	trigger?: any;
	children: React.ReactNode;
};

const FoodMenuModal: FC<FoodMenuItemProps> = ({
	trigger,
	image,
	name,
	price,
	description,
	discountedPrice,
	isDiscounted,
	children,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handlers = useSwipeable({
		onSwipedDown: () => {
			onClose();
		},
	});
	return (
		<>
			<Flex
				borderBottom='2px dotted #333'
				w='full'
				py={2}
				gap={2}
				flexDir='column'
				onClick={onOpen}>
				{children}
			</Flex>

			<Drawer
				isFullHeight={false}
				placement='bottom'
				isOpen={isOpen}
				onClose={onClose}>
				<DrawerOverlay />
				<DrawerContent
					maxH='90vh'
					userSelect='none'
					bg='#f8f6f3'
					borderTopRadius='20px'>
					<DrawerHeader
						fontFamily='Bebas Neue'
						{...handlers}>
						<Flex
							bg='#555'
							h='4px'
							w='100px'
							mx='auto'
							borderRadius='30px'
						/>
						<SpaceBetween>
							<Heading
								size='lg'
								pt={4}>
								{name}
							</Heading>
							<CloseButton onClick={onClose} />
						</SpaceBetween>

						{/* <DrawerCloseButton /> */}
					</DrawerHeader>

					<DrawerBody>
						<Column gap={8}>
							{image && (
								<Image
									w='full'
									objectFit='contain'
									src={image}
								/>
							)}
							<Text>{description}</Text>
						</Column>
					</DrawerBody>

					<DrawerFooter>
						<Flex
							gap={3}
							align='flex-end'>
							{isDiscounted && (
								<Text
									lineHeight={1.2}
									fontFamily='Bebas neue'
									// fontSize='14px'
									textDecorationLine='line-through'>
									BDT. {price}
								</Text>
							)}

							<Heading
								fontFamily='Bebas neue'
								size='md'>
								BDT. {isDiscounted ? discountedPrice : price}
							</Heading>
						</Flex>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	);
};

export default FoodMenuModal;

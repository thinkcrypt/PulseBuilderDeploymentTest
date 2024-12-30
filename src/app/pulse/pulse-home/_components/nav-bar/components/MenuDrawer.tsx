import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	BoxProps,
	Button,
	Center,
	Drawer,
	DrawerBody,
	DrawerContent,
	DrawerOverlay,
	useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC, useRef } from 'react';
import { navData } from './navData';
import useColors from '@/components/library/hooks/useColors';
import { NormalText } from '../../text';
import { Icon } from '../../icon';

type MenuDrawerProps = BoxProps & {
	content: any;
	basic: any;
};

const MenuDrawer: FC<MenuDrawerProps> = ({ content, basic, ...props }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef<HTMLDivElement>(null);
	const colors = useColors();

	const navItems = navData?.navItems;
	const css = content?.navItemsCss;

	return (
		<Box {...props}>
			<Box ref={btnRef} onClick={onOpen}>
				<Center
					w='40px'
					h='40px'
					bg={isOpen ? colors?.darkLight : 'transparent'}
					borderRadius='50%'
				>
					{isOpen ? (
						<Icon size={24} color={colors?.white} name='cross' />
					) : (
						<Icon size={24} color={colors?.white} name='menu' />
					)}
				</Center>
			</Box>
			<Drawer
				isOpen={isOpen}
				placement='left'
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				{/* <DrawerOverlay /> */}
				<DrawerContent
					sx={{
						marginTop: '74px', // Moves the drawer down
						height: 'calc(100vh - 74px)', // Ensures it doesn't exceed the viewport
						borderRadius: '0 8px 8px 0', // Optional: Adds rounded corners to the top
					}}
				>
					<DrawerBody>
						{navItems?.map((item: any, i: number) => (
							<Accordion allowToggle key={i}>
								<AccordionItem>
									<AccordionButton>
										<Link href={item?.link || '#'}>
											<NormalText
												css={css}
												basic={basic}
												as='span'
												flex='1'
												textAlign='left'
												fontSize={'16px'}
											>
												{item?.text}
											</NormalText>
										</Link>
										<AccordionIcon />
									</AccordionButton>

									{item?.dropDown && (
										<AccordionPanel pb={4} w='full'>
											{item.dropDown.map((subItem: any, j: number) => (
												<Accordion key={j} allowMultiple>
													<AccordionItem w='full'>
														<AccordionButton w='full'>
															<Box textAlign='left' w='full'>
																<Link
																	href={subItem?.link || '#'}
																	style={{ width: '100%' }}
																>
																	<NormalText
																		fontSize='14px'
																		css={css}
																		basic={basic}
																	>
																		{subItem?.text}
																	</NormalText>
																</Link>
															</Box>
															{subItem?.dropDown && <AccordionIcon />}
														</AccordionButton>

														{subItem?.dropDown && (
															<AccordionPanel pb={4} w='full'>
																{subItem?.dropDown?.map(
																	(childItem: any, k: number) => (
																		<Box key={k} pl={4}>
																			<Link href={childItem?.link || '#'}>
																				<NormalText
																					css={css}
																					basic={basic}
																					fontSize='14px'
																					py={1}
																				>
																					{childItem?.text}
																				</NormalText>
																			</Link>
																		</Box>
																	)
																)}
															</AccordionPanel>
														)}
													</AccordionItem>
												</Accordion>
											))}
										</AccordionPanel>
									)}
								</AccordionItem>
							</Accordion>
						))}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
};

export default MenuDrawer;

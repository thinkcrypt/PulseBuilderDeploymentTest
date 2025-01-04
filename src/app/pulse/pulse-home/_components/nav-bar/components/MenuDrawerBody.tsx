import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	BoxProps,
	DrawerBody,
} from '@chakra-ui/react';
import Link from 'next/link';
import { FC, useState } from 'react';
import { navData } from './navData';
import { NormalText } from '../../text';

type MenuDrawerBodyProps = BoxProps & {
	css: any;
	basic: any;
};

const MenuDrawerBody: FC<MenuDrawerBodyProps> = ({ css, basic }) => {
	const navItems = navData?.navItems;

	return (
		<DrawerBody>
			{navItems?.map((item: any, i: number) => (
				<Accordion allowToggle key={i}>
					<AccordionItem>
						<AccordionButton w='full'>
							<NormalText
								css={css}
								basic={basic}
								textAlign='left'
								flex='1'
								fontSize={'16px'}
							>
								{item?.text}
							</NormalText>
							<AccordionIcon />
						</AccordionButton>

						{item?.dropDown && (
							<AccordionPanel pb={4}>
								{item.dropDown.map((subItem: any, j: number) => (
									<Accordion key={j} allowMultiple>
										<AccordionItem w='full'>
											<AccordionButton w='full'>
												<Box textAlign='left' w='full'>
													<Link
														href={subItem?.link || '#'}
														style={{ width: '100%' }}
													>
														<NormalText fontSize='14px' css={css} basic={basic}>
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
	);
};

export default MenuDrawerBody;

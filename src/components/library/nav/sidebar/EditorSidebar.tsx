'use client';
import { FlexProps, Heading, Stack, Flex, useColorMode, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import SidebarItem from './SidebarItem';

import { sidebarData, THEME, Icon, DecisionAlert, EditContentModal } from '../../';

import {
	SidebarBody,
	SidebarContainer,
	SidebarContent,
	SidebarFooter,
	SidebarHeading,
	SidebarLogo,
} from './sidebar-components';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const EditorSidebar: React.FC<FlexProps & { closeBtn?: ReactNode; data?: any; doc?: any }> = ({
	closeBtn,
	data,
	doc,
	...props
}) => {
	const router = useRouter();

	const sidebar = data || sidebarData;
	const textColor = useColorModeValue('text.dark', 'text.light');
	const main = (
		<>
			<SidebarBody
				bg='container.light'
				_dark={{ bg: 'container.dark' }}>
				{sidebar.map((item: any, i: number) => (
					<Stack
						key={i}
						bg='inherit'>
						<SidebarHeading show={item?.startOfSection}>{item?.sectionTitle}</SidebarHeading>
						{item?.type == 'page' ? (
							<Link href={item?.href}>
								<SidebarItem
									sx={{
										color: textColor,
									}}
									href={item?.href}
									path={item?.path}
									icon={item?.icon}>
									{item?.title}
								</SidebarItem>
							</Link>
						) : item?.type == 'component' ? (
							<EditContentModal
								cursor='pointer'
								dataModel={item?.dataModel}
								data={doc[item?.dataPath]}
								contentType={item?.dataPath}
								title={item?.title}
								path={item?.path}>
								<SidebarItem
									sx={{
										color: textColor,
									}}
									path={item?.path}
									icon={item?.icon}>
									{item?.title}
								</SidebarItem>
							</EditContentModal>
						) : null}
					</Stack>
				))}
			</SidebarBody>
		</>
	);

	const handleExit = () => router.push('/dashboard');

	return (
		<SidebarContainer {...props}>
			<SidebarLogo
				bg='container.light'
				_dark={{
					bg: 'container.dark',
				}}>
				<DecisionAlert
					handler={handleExit}
					prompt={{
						title: 'Exit Editor',
						body: 'Are you sure you want to exit the editor?',
						btnText: 'Exit',
					}}>
					<Flex
						cursor='pointer'
						align='center'
						gap={2}>
						<Icon
							name='arrow-left'
							color='inherit'
							size={20}
						/>

						<Heading
							color={THEME == 'basic' ? 'inherit' : 'text.dark'}
							size='md'
							fontFamily='Bebas Neue'>
							Exit Editor
						</Heading>
					</Flex>
				</DecisionAlert>

				{closeBtn && closeBtn}
			</SidebarLogo>
			<SidebarContent
				bg='container.light'
				_dark={{
					bg: 'container.dark',
				}}>
				{main}
			</SidebarContent>
		</SidebarContainer>
	);
};

export default EditorSidebar;

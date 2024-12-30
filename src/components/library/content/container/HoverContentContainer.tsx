import React, { FC, ReactNode, useState } from 'react';
import { Button, Center, Flex, FlexProps, Heading } from '@chakra-ui/react';
import { EditContentModal } from '../..';

type ViewContentContainerType = FlexProps & {
	children: ReactNode;
	title?: string;
	dataModel?: any;
	data: any;
	edit?: boolean;
	path?: string;
	type?: 'basic' | 'content';
};

const HoverContentContainer: FC<ViewContentContainerType> = ({
	title,
	children,
	dataModel,
	data,
	edit = true,
	path,
	type = 'content',
	...props
}) => {
	const [hover, setHover] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const mouseEnter = () => setHover(true);
	const mouseLeave = () => {
		if (isOpen) return;
		setHover(false);
	};

	return (
		<Container onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
			<Body position='relative' {...props}>
				{edit && hover && (
					<EditContentModal
						setHover={setHover}
						setIsOpen={setIsOpen}
						path={path}
						data={data}
						contentType={type}
						dataModel={dataModel}
					>
						<Overlay>
							<Button
								display={hover ? 'block' : 'none'}
								position='absolute'
								colorScheme='gray'
								borderRadius={0}
								size='lg'
							>
								Click to Edit
							</Button>
						</Overlay>
					</EditContentModal>
				)}
				{children}
			</Body>
		</Container>
	);
};

const Overlay = ({ children }: { children: ReactNode }) => (
	<Center
		cursor='pointer'
		position='absolute'
		top={0}
		left={0}
		w='full'
		flex={1}
		zIndex={998}
		bg='rgba(0,0,0,0.5)'
		h='full'
	>
		{children}
	</Center>
);

const Container = ({
	children,
	...props
}: FlexProps & { children: ReactNode }) => {
	return (
		<Flex flexDir='column' {...props}>
			{children}
		</Flex>
	);
};

const Body = ({ children, ...props }: FlexProps & { children: ReactNode }) => (
	<Flex flexDir='column' {...props}>
		{children}
	</Flex>
);

export default HoverContentContainer;

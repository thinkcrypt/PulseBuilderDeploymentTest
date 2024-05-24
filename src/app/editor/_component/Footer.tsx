import { StickyBottomContainer } from '@/components/library';
import { Button } from '@chakra-ui/react';
import Link from 'next/link';
import React, { FC } from 'react';

const TOP_SHADOW = '2px -4px 10px rgba(0,0,0,.05)';

type FooterProps = {
	onSubmit: () => void;
	isLoading: boolean;
};

const Footer: FC<FooterProps> = ({ onSubmit, isLoading }) => {
	return (
		<StickyBottomContainer
			boxShadow={TOP_SHADOW}
			justify='flex-end'
			gap={2}
			h='48px'>
			{!isLoading && (
				<Link href='/settings'>
					<Button
						colorScheme='gray'
						size='xs'>
						Discard
					</Button>
				</Link>
			)}
			<Button
				onClick={onSubmit}
				size='xs'
				isLoading={isLoading}>
				Save
			</Button>
		</StickyBottomContainer>
	);
};

export default Footer;

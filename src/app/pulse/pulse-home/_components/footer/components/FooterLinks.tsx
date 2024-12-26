import { NormalText } from '../../text';
import { Box, BoxProps } from '@chakra-ui/react';
import Link from 'next/link';
import { FC } from 'react';

type FooterLinksProps = BoxProps & {
	css: any;
	basic: any;
	item: any;
};

const FooterLinks: FC<FooterLinksProps> = ({ css, basic, item, ...props }) => {
	return (
		<Box my='1rem'>
			<Link href={item?.link} style={{ display: 'inline-block' }}>
				<NormalText
					fontSize={`${css?.fontSize}px`}
					css={css}
					basic={basic}
					_hover={{
						color: css?.hoverColor,
						textDecoration: 'underline',
					}}
				>
					{item?.text}
				</NormalText>
			</Link>
		</Box>
	);
};

export default FooterLinks;

import {
	Box,
	BoxProps,
	Center,
	Flex,
	FlexProps,
	TextProps,
} from '@chakra-ui/react';
import { FC } from 'react';
import { NormalText } from '../../text';
import { Icon } from '../../icon';

type SupportCardProps = BoxProps & {
	css: any;
	basic: any;
	item: any;
};

const SupportCard: FC<SupportCardProps> = ({ css, basic, item, ...props }) => {
	console.log('csssssss:', css);
	return (
		<Container css={css} {...props}>
			<Center
				color={css?.fgColor}
				borderRight={`1px solid ${css?.borderColor}`}
				mx='1rem'
				pr='1rem'
			>
				<Icon
					color={css?.footerTagFg || 'white'}
					size={css?.iconSize}
					name={item?.icon}
				/>
			</Center>
			<Box>
				<NormalText
					color={css?.fgColor}
					css={css}
					basic={basic}
					fontSize={`12px`}
				>
					{item?.topText}
				</NormalText>
				<CardText css={css} basic={basic}>
					{item?.bottomText}
				</CardText>
			</Box>
		</Container>
	);
};

export default SupportCard;

const Container = ({
	children,
	css,
	...props
}: FlexProps & { children: any; css: any }) => (
	<Flex
		border={`1px solid ${css?.borderColor}`}
		bg={css?.footerTagBg}
		borderRadius={`${css?.iconRadius}px`}
		px='.5rem'
		py='.5rem'
		mb='1rem'
		mr='5rem'
		cursor='pointer'
		background='transparent'
		color={css?.footerTagFg}
		_hover={{
			border: `1px solid ${css?.hoverColor}`,
		}}
		{...props}
	>
		{children}
	</Flex>
);

const CardText = ({
	children,
	css,
	basic,
	...props
}: TextProps & { children: any; basic: any; css: any }) => (
	<NormalText css={css} basic={basic} fontSize='16px' color={css?.hoverColor}>
		{children}
	</NormalText>
);

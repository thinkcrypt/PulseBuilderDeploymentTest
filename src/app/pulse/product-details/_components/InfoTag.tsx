import useColors from '@/components/library/hooks/useColors';
import NormalText from '@/components/text/NormalText';
import { Box, BoxProps, Center } from '@chakra-ui/react';
import { FC } from 'react';

type InfoTagProps = BoxProps & {
	basic: any;
	title: string;
	value: string | number;
	css: any;
};

const InfoTag: FC<InfoTagProps> = ({ basic, title, value, css, ...props }) => {
	// const colors = useColors();

	return (
		<Box
			bg={css?.badgeBg}
			display='inline-block'
			px='1rem'
			py='.4rem'
			borderRadius={`${css?.badgeRadius}px`}
			{...props}
		>
			<Center>
				<NormalText
					color={css?.badgeSecondaryFg}
					fontSize='14px'
					basic={basic}
					mr='4px'
				>
					{`${title}:`}
				</NormalText>
				<NormalText
					basic={basic}
					color={css?.badgeFg}
					fontSize='14px'
					fontWeight='600'
				>{` ${value}`}</NormalText>
			</Center>
		</Box>
	);
};

export default InfoTag;

import { Box, Text } from '@chakra-ui/react';

interface ContentProps {
	label: string;
	paraOne: string;
	paraTwo?: string; // Optional if some sections only have one paragraph
	css?: string;
}

const Content: React.FC<ContentProps> = ({ css, label, paraOne, paraTwo }) => {
	return (
		<Box mb='2rem'>
			<Text color={css} fontWeight='bold' fontSize='1.5rem' mb='1rem'>
				{label}
			</Text>
			<Text color={css} mb='1rem'>
				{paraOne}
			</Text>
			{paraTwo && <Text color={css}>{paraTwo}</Text>}
		</Box>
	);
};

export default Content;

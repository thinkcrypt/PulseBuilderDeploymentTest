import React from 'react';
import {
	Center,
	Flex,
	FormControl,
	FormLabel,
	Image,
	Input,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import Column from '@/components/containers/Column';

const InsertUrl = ({ handleSelect }: { handleSelect: any }) => {
	const borderColor = useColorModeValue('brand.500', 'brand.200');
	const [url, setUrl] = React.useState<any>(null);
	const handleChange = (e: any) => {
		setUrl(e.target.value);
		handleSelect(e.target.value);
	};
	const ImageContainer = (
		<Center flex={1}>
			<Center
				h='300px'
				w='400px'
				gap={1}
				bg='gray.300'
				flexDir='column'>
				<Image
					src={url}
					alt='Preview'
					objectFit='contain'
				/>
			</Center>
		</Center>
	);
	const body = url ? (
		ImageContainer
	) : (
		<Center
			flex={1}
			gap={1}
			color='gray.400'
			flexDir='column'>
			<Text
				fontWeight='600'
				fontSize='1.1rem'>
				If your Url is correct, {`you'll`} see an image preview here. Large images may take a few
				minutes to appear.
			</Text>
			<Text fontSize='.9rem'>
				Remember: Using others images on the web without their permission may be bad manners, or
				worse, copyright infringement
			</Text>
		</Center>
	);
	return (
		<Column
			gap={2}
			flex={1}
			h='full'>
			<Flex>
				<FormControl>
					<Flex
						gap={2}
						align='center'>
						<FormLabel
							fontWeight='bold'
							m='0'
							fontSize='14px'
							whiteSpace='nowrap'>
							Paste an image URL here:
						</FormLabel>
						<Input
							focusBorderColor={borderColor}
							size='xs'
							value={url}
							onChange={handleChange}
						/>
					</Flex>
				</FormControl>
			</Flex>
			<Center flex={1}>{body}</Center>
		</Column>
	);
};

export default InsertUrl;

import React, { FC } from 'react';
import {
	Center,
	FormControl,
	Image,
	Stack,
	FormHelperText,
	InputProps,
	GridProps,
	Flex,
} from '@chakra-ui/react';
import UploadModal from '@/components/library/modals/upload-modal/UploadModal';
import Label from '../../form/label/Label';
import HelperText from '../../form/label/HelperText';

type FormDataType = InputProps &
	GridProps & {
		value: string | undefined;
		onChange: any;
		isRequired?: boolean;
		label?: string;
		helper?: string;
		isDisabled?: boolean;
	};

const VImage: FC<FormDataType> = ({
	value,
	onChange,
	isRequired = false,
	label,
	helper,
	isDisabled = false,
}) => {
	const type = value ? 'edit' : 'add';
	if (isDisabled)
		return (
			<Flex>
				<Image
					h='200px'
					w='200px'
					objectFit='contain'
					src={value}
				/>
			</Flex>
		);
	return (
		<FormControl isRequired={isRequired}>
			<Stack
				spacing={2}
				w='full'>
				<Label>{label}</Label>
				<Center sx={styles.container}>
					<UploadModal
						type={type}
						handleImage={onChange}
					/>
					{value && (
						<Image
							h='200px'
							w='100%'
							objectFit='contain'
							src={value}
						/>
					)}
				</Center>
				{helper && <HelperText>{helper}</HelperText>}
			</Stack>
		</FormControl>
	);
};

const styles = {
	container: {
		h: '200px',
		w: '200px',
		bg: 'transparent',
		position: 'relative',
	},
};

export default VImage;

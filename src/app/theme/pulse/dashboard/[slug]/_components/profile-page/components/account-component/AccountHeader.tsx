import NormalText from '../../../../../../_core-components/components/text/NormalText';
import { EditButton } from '../../../../../../_core-components/components/button';

import { Flex, FlexProps } from '@chakra-ui/react';
import React, { FC, useState } from 'react';

type AccountHeaderProps = FlexProps & {
	basic: any;
	css: any;
	title: string;
	isEdit: boolean;
	handleEdit: (value: boolean) => void;
	handleSubmit: () => void;
	isLoading?: boolean;
};

const AccountHeader: FC<AccountHeaderProps> = ({
	basic,
	css,
	title,
	isEdit,
	handleEdit,
	handleSubmit,
	isLoading,
	...props
}) => {
	const BORDER = `1px solid ${css?.borderColor || '#e7e7e7'}`;

	return (
		<Flex
			justifyContent='space-between'
			alignItems='center'
			pb='1rem'
			borderBottom={BORDER}
			{...props}
		>
			<NormalText
				fontSize={`${css?.titleSize || 16}px`}
				fontWeight='600'
				basic={basic}
			>
				{title}
			</NormalText>
			<EditButton
				display={isEdit ? 'none' : 'block'}
				onClick={() => handleEdit(true)}
				basic={basic}
			>
				Edit
			</EditButton>
			<Flex display={isEdit ? 'flex' : 'none'} gap={2}>
				<EditButton
					onClick={() => handleEdit(false)}
					basic={basic}
					border='none'
					color={css?.fgColor || '#3b3b3b'}
				>
					Cancel
				</EditButton>
				<EditButton isLoading={isLoading} onClick={handleSubmit} basic={basic}>
					Save
				</EditButton>
			</Flex>
		</Flex>
	);
};

export default AccountHeader;

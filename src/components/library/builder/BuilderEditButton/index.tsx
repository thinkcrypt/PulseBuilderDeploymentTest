import React, { FC, ReactNode } from 'react';
import { Button, ButtonProps } from '@chakra-ui/react';
import { Icon, IconNameOptions } from '../..';

type BuilderEditButtonProps = ButtonProps & {
	hover?: boolean;
	children?: ReactNode;
	icon?: IconNameOptions;
	section?: boolean;
	btnType?: 'edit' | 'delete';
};

const BuilderEditButton: FC<BuilderEditButtonProps> = ({
	hover,
	children,
	icon,
	section,
	btnType = 'edit',
	...props
}) => {
	const color = btnType === 'edit' ? '#333' : 'crimson';
	return (
		<Button
			{...buttonCSS}
			{...(section && { position: 'absolute' })}
			size={section ? 'md' : 'lg'}
			h={section ? '36px' : '42px'}
			_light={{
				color: color,
			}}
			leftIcon={
				<Icon
					name={icon || btnType == 'delete' ? 'delete-builder' : 'edit-builder'}
					size={14}
					color={color}
				/>
			}
			{...props}>
			{children || 'Click to Edit'}
		</Button>
	);
};

const buttonCSS: ButtonProps = {
	//position: 'absolute',
	colorScheme: 'gray',
	alignItems: 'center',
	borderRadius: '6px',
	textTransform: 'uppercase',
	fontSize: '14px',
	pl: 4,
	letterSpacing: '.25px',
	fontWeight: '600',
	// h: '44px',
	// size: 'lg',
};

export default BuilderEditButton;

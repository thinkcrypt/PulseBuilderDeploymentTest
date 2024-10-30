import type { ButtonProps as ChakraCloseButtonProps } from 'chakra3';
import { IconButton as ChakraIconButton } from 'chakra3';
import { forwardRef } from 'react';
import { LuX } from 'react-icons/lu';

export interface CloseButtonProps extends ChakraCloseButtonProps {}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(
	props,
	ref
) {
	return (
		<ChakraIconButton
			variant='ghost'
			aria-label='Close'
			ref={ref}
			{...props}>
			{props.children ?? <LuX />}
		</ChakraIconButton>
	);
});

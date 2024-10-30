import type { ColorPalette } from 'chakra3';
import { Status as ChakraStatus } from 'chakra3';
import { forwardRef } from 'react';

type StatusValue = 'success' | 'error' | 'warning' | 'info';

export interface StatusProps extends ChakraStatus.RootProps {
	value?: StatusValue;
}

const statusMap: Record<StatusValue, ColorPalette> = {
	success: 'green',
	error: 'red',
	warning: 'orange',
	info: 'blue',
};

export const Status = forwardRef<HTMLDivElement, StatusProps>(function Status(props, ref) {
	const { children, value = 'info', ...rest } = props;
	const colorPalette = rest.colorPalette ?? statusMap[value];
	return (
		<ChakraStatus.Root
			ref={ref}
			{...rest}
			colorPalette={colorPalette}>
			<ChakraStatus.Indicator />
			{children}
		</ChakraStatus.Root>
	);
});

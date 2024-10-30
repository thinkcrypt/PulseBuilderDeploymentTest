'use client';

import { ChakraProvider, defaultSystem } from 'chakra3';
import { ColorModeProvider } from './color-mode';

export function Provider(props: React.PropsWithChildren) {
	return (
		<ChakraProvider value={defaultSystem}>
			<ColorModeProvider>{props.children}</ColorModeProvider>
		</ChakraProvider>
	);
}

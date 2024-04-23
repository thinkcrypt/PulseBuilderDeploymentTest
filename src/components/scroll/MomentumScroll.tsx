import React, { useEffect, useRef } from 'react';
import Scroll from 'locomotive-scroll';
import { Flex } from '@chakra-ui/react';

const MyComponent = ({ children }: { children: any }) => {
	const scrollRef: any = useRef(null);

	useEffect(() => {
		const scroll = new Scroll({
			el: scrollRef.current,
			smooth: true,

			lerp: 0.02, // Controls damping (lower value means more damping)
			multiplier: 1, // Controls the speed of the scroll
			getSpeed: true,
		});

		return () => {
			if (scroll) scroll.destroy();
		};
	}, []);

	return <Flex ref={scrollRef}>{children}</Flex>;
};

export default MyComponent;

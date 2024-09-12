//

import { productSwiperBreakpoints } from './swiper/breakpoints';

const navbarHeight = '92px';

export const sizes = {
	NAVBAR_HEIGHT: navbarHeight,
	BODY_MIN_HEIGHT: `calc(100vh - ${navbarHeight})`,
	RADIUS: 'xl',
	PRODUCT_CARD_HEIGHT: '360px',
	CATEGORY_CARD_HEIGHT: '260px',
};

export const swiper = {
	BREAKPOINTS: {
		PRODUCT: productSwiperBreakpoints,
	},
};

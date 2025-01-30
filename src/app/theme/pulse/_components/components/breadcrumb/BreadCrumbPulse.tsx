'use client';

import { usePathname } from 'next/navigation';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbProps,
} from '@chakra-ui/react';
import { FC } from 'react';

type BreadCrumbPulseProps = BreadcrumbProps & {
	basic: any;
	css?: any;
	productName?: string; // Optional product name
};
const BreadCrumbPulse: FC<BreadCrumbPulseProps> = ({
	basic,
	css,
	productName,
}) => {
	console.log('object:', css);
	const pathname = usePathname();
	const pathnames = pathname.split('/').filter(Boolean);

	// Filter out "dashboard" and "products" if they are unnecessary
	let filteredPathnames = pathnames.filter(
		path => path !== 'dashboard' && path !== 'products'
	);

	// If last item is a product ID, replace it with product name (if available)
	if (productName && filteredPathnames.length > 0) {
		filteredPathnames[filteredPathnames.length - 1] = productName;
	}

	return (
		<Breadcrumb fontWeight='medium' fontSize='md'>
			<BreadcrumbItem>
				<BreadcrumbLink
					_hover={{ color: css?.hoverColor || '#ef4a23' }}
					color={css?.fgColor || '#3f3f3f'}
					href='/'
					fontSize={`${css?.fontSize || 16}px`}
					fontWeight={css?.fontWeight || 400}
					fontFamily={basic?.primaryFont}
				>
					Home
				</BreadcrumbLink>
			</BreadcrumbItem>

			{filteredPathnames.map((path, index) => {
				const href = `/${pathnames.slice(0, index + 1).join('/')}`;
				const isLast = index === filteredPathnames.length - 1;

				return (
					<BreadcrumbItem key={href} isCurrentPage={isLast}>
						<BreadcrumbLink
							href={href}
							textTransform='capitalize'
							color={
								isLast
									? css?.hoverColor || '#693529'
									: css?.fgColor || '#3f3f3f'
							}
							_hover={{ color: css?.hoverColor || '#ef4a23' }}
							fontSize={`${css?.fontSize || 16}px`}
							fontWeight={css?.fontWeight || 400}
							fontFamily={basic?.primaryFont}
						>
							{decodeURIComponent(path.replace(/-/g, ' '))}
						</BreadcrumbLink>
					</BreadcrumbItem>
				);
			})}
		</Breadcrumb>
	);
};

export default BreadCrumbPulse;

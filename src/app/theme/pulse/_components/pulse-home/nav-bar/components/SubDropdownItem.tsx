import Link from 'next/link';
import { FC } from 'react';
import {
	FlexColumn,
	useColors,
	NormalText,
} from '../../../../_components/index';

type SubDropdownItemProps = {
	css: any;
	basic: any;
	dropdown: {
		link: string;
		text: string;
	};
};

const SubDropdownItem: FC<SubDropdownItemProps> = ({
	css,
	basic,
	dropdown,
}) => {
	const colors = useColors();
	return (
		<FlexColumn>
			<Link href={dropdown?.link}>
				<NormalText
					px={2}
					py={1}
					fontSize='14px'
					css={css}
					basic={basic}
					_hover={{
						bg: css?.hoverFg,
						color: colors?.white,
					}}
				>
					{dropdown?.text}
				</NormalText>
			</Link>
		</FlexColumn>
	);
};

export default SubDropdownItem;

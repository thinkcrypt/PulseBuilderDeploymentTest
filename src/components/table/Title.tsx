import { Flex, Th, Tooltip } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { TbArrowUp, TbArrowDown, TbArrowsDownUp } from 'react-icons/tb';
import { BsInfoCircle } from 'react-icons/bs';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { updateTable } from '@/store/slices/tableSlice';

export type TitleProps = {
	children: React.ReactNode;
	info?: string;
	toSort?: boolean;
	sort?: string;
};

export const Title: React.FC<TitleProps> = ({ children, sort, info }) => {
	const { sort: val } = useAppSelector(state => state.table);
	const dispatch = useAppDispatch();
	const icon =
		val == `-${sort}` ? <TbArrowUp /> : val == sort ? <TbArrowDown /> : <TbArrowsDownUp />;

	const handleSort = (): any => {
		if (!sort) return;
		const sortVal: string = val == sort ? `-${sort}` : sort;
		dispatch(updateTable({ sort: sortVal, page: 1 }));
	};

	const body = Boolean(sort) ? (
		<Flex
			as={motion.div}
			align='center'
			gap={1}
			whileTap={{ scale: 0.9 }}>
			{children}
			{icon}
		</Flex>
	) : (
		children
	);

	const tooltip = info && (
		<Tooltip
			label={info}
			hasArrow
			placement='bottom-end'>
			<span>
				<BsInfoCircle />
			</span>
		</Tooltip>
	);

	return (
		<Th
			cursor={Boolean(sort) ? 'pointer' : 'default'}
			onClick={handleSort}
			userSelect='none'>
			<Flex
				align='center'
				gap={2}>
				{body}
				{tooltip}
			</Flex>
		</Th>
	);
};

export default Title;

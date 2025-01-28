// import { Heading, Icon } from '@/components';
// import { Button, Center, Flex, FlexProps } from '@chakra-ui/react';

// const Action = ({
// 	title,
// 	btnText,
// 	css,
// 	basic,
// 	...props
// }: FlexProps & {
// 	css: any;
// 	basic: any;
// 	title: string;
// 	btnText: string;
// }) => {
// 	return (
// 		<Flex
// 			justifyContent='space-between'
// 			alignItems='center'
// 			h='full'
// 			mb='1.4rem'
// 			{...props}
// 		>
// 			<Heading fontSize='1.5rem' css={css} basic={basic}>
// 				{title}
// 			</Heading>
// 			<Center cursor='pointer'>
// 				<Button
// 					bg='none'
// 					p='0px'
// 					_hover={{ bg: 'none' }}
// 					color={css?.btnColor || '#f37021'}
// 					mr={2}
// 				>
// 					{btnText}
// 				</Button>
// 				<Icon size={14} color={css?.btnColor || '#f37021'} name='arrow-right' />
// 			</Center>
// 		</Flex>
// 	);
// };

// export default Action;

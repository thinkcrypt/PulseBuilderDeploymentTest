import { Icon } from '../../../../_core-components/icon';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
	FacebookShareButton,
	LinkedinShareButton,
	WhatsappShareButton,
	PinterestShareButton,
} from 'react-share';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

type SocialShareProps = {
	productId: string;
	productData: any;
	css: any;
};

const SocialShare: FC<SocialShareProps> = ({ productId, productData, css }) => {
	const shareUrl = `${BASE_URL}/product/${productId}`;
	const title = productData?.name;
	const description = productData?.description;
	const media = productData?.image;
	//
	return (
		<Flex gap={2} flexWrap={{ base: 'wrap', lg: 'nowrap' }} p={2}>
			<FacebookShareButton url={shareUrl} title={title}>
				<Icon
					color={css?.iconColor}
					size={css?.iconSize || 18}
					name='facebook'
				/>
			</FacebookShareButton>

			<WhatsappShareButton url={shareUrl} title={title} separator=':: '>
				<Icon
					color={css?.iconColor}
					size={css?.iconSize || 18}
					name='whatsapp'
				/>
			</WhatsappShareButton>
			<LinkedinShareButton url={shareUrl} title={title}>
				<Icon
					color={css?.iconColor}
					size={css?.iconSize || 18}
					name='linkedin'
				/>
			</LinkedinShareButton>

			<PinterestShareButton
				url={shareUrl}
				title={title}
				description={description}
				media={media}
			>
				<Icon
					color={css?.iconColor}
					size={css?.iconSize || 18}
					name='pinterest'
				/>
			</PinterestShareButton>
		</Flex>
	);
};

export default SocialShare;

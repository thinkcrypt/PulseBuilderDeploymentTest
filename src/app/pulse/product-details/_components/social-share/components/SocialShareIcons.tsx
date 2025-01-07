import { Icon } from '@/components/library';
import { Flex } from '@chakra-ui/react';
import React, { FC } from 'react';
import {
	EmailIcon,
	EmailShareButton,
	FacebookIcon,
	FacebookMessengerIcon,
	FacebookMessengerShareButton,
	FacebookShareButton,
	LinkedinIcon,
	LinkedinShareButton,
	TwitterShareButton,
	WhatsappIcon,
	WhatsappShareButton,
	PinterestShareButton,
	XIcon,
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
				<Icon size={css?.iconSize || 18} color={css?.tabFg} name='facebook' />
			</FacebookShareButton>

			<WhatsappShareButton url={shareUrl} title={title} separator=':: '>
				<Icon size={css?.iconSize || 18} color={css?.tabFg} name='whatsapp' />
			</WhatsappShareButton>
			<LinkedinShareButton url={shareUrl} title={title}>
				<Icon size={css?.iconSize || 18} color={css?.tabFg} name='linkedin' />
			</LinkedinShareButton>

			<PinterestShareButton
				url={shareUrl}
				title={title}
				description={description}
				media={media}
			>
				<Icon size={css?.iconSize || 18} color={css?.tabFg} name='pinterest' />
			</PinterestShareButton>
		</Flex>
	);
};

export default SocialShare;

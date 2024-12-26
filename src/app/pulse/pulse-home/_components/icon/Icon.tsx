'use client';
// import colors from '@/theme/colors.theme';
import { FC } from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { FaFacebookF, FaRegMap } from 'react-icons/fa';
import { FaAngleLeft, FaLink, FaLinkedinIn } from 'react-icons/fa6';
import { FiTag, FiUser } from 'react-icons/fi';
import { IoIosHome } from 'react-icons/io';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import {
	IoLocation,
	IoLogoTiktok,
	IoMenu,
	IoSearchSharp,
} from 'react-icons/io5';
import { LuInstagram, LuShare2, LuTwitter } from 'react-icons/lu';
import {
	MdLocalPhone,
	MdOutlineDelete,
	MdOutlineShoppingBag,
} from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { TbArrowForward, TbBrandTelegram, TbHome } from 'react-icons/tb';

export type IconNameOptions =
	| 'category'
	| 'dashboard'
	| 'arrow'
	| 'search'
	| 'cart'
	| 'link'
	| 'instagram'
	| 'share'
	| 'cross'
	| 'leftArrow'
	| 'home'
	| 'map'
	| 'tag'
	| 'delete'
	| 'menu'
	| 'facebook'
	| 'linkedin'
	| 'telegram'
	| 'tiktok'
	| 'twitter'
	| 'phone'
	| 'location'
	| 'whatsapp'
	| 'instagram'
	| 'youtube'
	| 'user';

type IconProps = {
	size?: number;
	color?: string;
	name: IconNameOptions;
};

const icons: { [key in IconNameOptions]: FC<{ size: number; color: string }> } =
	{
		category: BiSolidCategory,
		dashboard: IoIosHome,
		arrow: TbArrowForward,
		search: IoSearchSharp,
		cart: MdOutlineShoppingBag,
		user: FiUser,
		link: FaLink,
		instagram: LuInstagram,
		share: LuShare2,
		leftArrow: FaAngleLeft,
		cross: RxCross2,
		home: TbHome,
		map: FaRegMap,
		delete: MdOutlineDelete,
		menu: IoMenu,
		tag: FiTag,
		facebook: FaFacebookF,
		linkedin: FaLinkedinIn,
		telegram: TbBrandTelegram,
		tiktok: IoLogoTiktok,
		twitter: LuTwitter,
		phone: MdLocalPhone,
		location: IoLocation,
		whatsapp: FaWhatsapp,
		// instagram: FaInstagram,
		youtube: FaYoutube,
	};

const Icon: FC<IconProps> = ({ name, ...props }) => {
	const IconComponent = icons[name] || IoIosHome;

	const defaultColor = '#424242';
	const brandColor = '#424242';

	return (
		<IconComponent
			size={props.size || 18}
			color={
				name == 'arrow' ? brandColor : props.color ? props.color : defaultColor
			}
			{...props}
		/>
	);
};

export default Icon;

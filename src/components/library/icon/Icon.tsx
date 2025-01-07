'use client';
import { FC } from 'react';
import { BiSolidCategory } from 'react-icons/bi';
import { FaFacebookF, FaRegMap, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaAngleLeft, FaLink, FaLinkedinIn } from 'react-icons/fa6';
import { FiTag, FiUser } from 'react-icons/fi';
import { IoIosHome, IoMdArrowDropright } from 'react-icons/io';
import { FaBars } from 'react-icons/fa';
import { IoAdd } from 'react-icons/io5';
import { GrSubtract } from 'react-icons/gr';

import {
	IoLocation,
	IoLogoTiktok,
	IoMenu,
	IoSearchSharp,
} from 'react-icons/io5';
import { LuInstagram, LuShare2, LuTwitter } from 'react-icons/lu';
import {
	MdArrowForwardIos,
	MdLocalPhone,
	MdOutlineArrowBackIosNew,
	MdOutlineDelete,
	MdOutlineShoppingBag,
} from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { TbArrowForward, TbBrandTelegram, TbHome } from 'react-icons/tb';
import { FaPinterestP } from 'react-icons/fa';

export type IconNameOptions =
	| 'category'
	| 'dashboard'
	| 'arrow'
	| 'search'
	| 'cart'
	| 'link'
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
	| 'arrow-left'
	| 'arrow-right'
	| 'arrow-right-solid'
	| 'youtube'
	| 'add'
	| 'subtract'
	| 'pinterest'
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
		'arrow-left': MdOutlineArrowBackIosNew,
		'arrow-right': MdArrowForwardIos,
		'arrow-right-solid': IoMdArrowDropright,
		add: IoAdd,
		subtract: GrSubtract,
		pinterest: FaPinterestP,
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

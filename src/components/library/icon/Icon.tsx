'use client';
import React, { FC } from 'react';
import { IoIosHome, IoIosAddCircleOutline, IoIosStar } from 'react-icons/io';
import { IoAdd, IoBagOutline, IoGridOutline, IoSearchOutline } from 'react-icons/io5';
import { TbArrowBack, TbSelector } from 'react-icons/tb';
import { BsBuildingsFill, BsCalendar2Date } from 'react-icons/bs';
import colors from '@/theme/colors.theme';
import { useColorModeValue } from '@chakra-ui/react';
import { TbArrowForward } from 'react-icons/tb';
import { TbSettings } from 'react-icons/tb';
import { LuImagePlus } from 'react-icons/lu';
import { GoHomeFill } from 'react-icons/go';
import { ImPriceTag } from 'react-icons/im';
import { BiSolidCategory } from 'react-icons/bi';
import { TbFileInvoice } from 'react-icons/tb';
import { MdBrandingWatermark } from 'react-icons/md';
import { RiCoupon2Fill } from 'react-icons/ri';
import { FaRegEnvelope, FaUserFriends } from 'react-icons/fa';
import { FaUserTag } from 'react-icons/fa';
import { FaUnlockKeyhole } from 'react-icons/fa6';
import { TbTruckDelivery } from 'react-icons/tb';
import { RiSettings3Fill } from 'react-icons/ri';
import { FaTable } from 'react-icons/fa6';
import { TiPrinter } from 'react-icons/ti';
import { IoMdBarcode } from 'react-icons/io';
import { CiMenuBurger, CiStar } from 'react-icons/ci';
import { GrSubtract } from 'react-icons/gr';
import { SiCkeditor4 } from 'react-icons/si';
import { FaRegEdit } from 'react-icons/fa';
import { MdFastfood } from 'react-icons/md';
import { BsCollectionFill } from 'react-icons/bs';
import { FcFeedback } from 'react-icons/fc';
import { MdFeedback } from 'react-icons/md';
import { FaRegClock } from 'react-icons/fa6';
import { BsThreeDots } from 'react-icons/bs';
import { MdOutlineCancel } from 'react-icons/md';
import { MdOutlineEdit } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { HiUserGroup } from 'react-icons/hi';
// import { IoMdBarcode } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import { IoStorefront } from 'react-icons/io5';
import { BiSolidBookContent } from 'react-icons/bi';
import { BiSolidReport } from 'react-icons/bi';
import { FaMoneyCheckAlt } from 'react-icons/fa';
import { TbBrandPatreonFilled } from 'react-icons/tb';
import { GiBuyCard } from 'react-icons/gi';
import { FaTruck } from 'react-icons/fa';
import { FaCircleInfo } from 'react-icons/fa6';
import { FaRegCopy } from 'react-icons/fa6';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { MdLocalPhone } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GoListUnordered } from 'react-icons/go';
import { TbFileExport } from 'react-icons/tb';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { HiArrowUturnLeft, HiArrowUturnRight } from 'react-icons/hi2';
import { GiBrokenPottery } from 'react-icons/gi';
import { GiReturnArrow } from 'react-icons/gi';
import { RiDiscountPercentFill } from 'react-icons/ri';
import { HiMiniRocketLaunch } from 'react-icons/hi2';
import { FaTshirt } from 'react-icons/fa';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { GiMoneyStack } from 'react-icons/gi';
import { PiUserListFill } from 'react-icons/pi';
import { AiOutlineThunderbolt } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2';
import { FaDesktop } from 'react-icons/fa';
import { FaPeopleGroup } from 'react-icons/fa6';
import { MdInventory } from 'react-icons/md';
import { BiTransferAlt } from 'react-icons/bi';
import { IoEye } from 'react-icons/io5';
import { IoEyeOff } from 'react-icons/io5';

export type IconNameOptions =
	| 'action-menu'
	| 'add'
	| 'add-circle'
	| 'add-image'
	| 'add-tag'
	| 'arrow'
	| 'arrow-left'
	| 'barcode'
	| 'brand'
	| 'brand-alt'
	| 'cart'
	| 'cart-bag'
	| 'category'
	| 'check'
	| 'clock-outline'
	| 'close'
	| 'collections'
	| 'content'
	| 'copy'
	| 'coupon'
	| 'customer'
	| 'customers'
	| 'damage'
	| 'dashboard'
	| 'date'
	| 'delete'
	| 'delete-builder'
	| 'delivery'
	| 'delivery-fill'
	| 'deploy'
	| 'desktop'
	| 'discount'
	| 'dots'
	| 'edit'
	| 'edit-builder'
	| 'envelope'
	| 'expense'
	| 'expense-categories'
	| 'export-doc'
	| 'eye'
	| 'eye-off'
	| 'feedback'
	| 'feedbacks'
	| 'fields'
	| 'home'
	| 'info'
	| 'inventory'
	| 'items'
	| 'leave'
	| 'location'
	| 'map'
	| 'menu'
	| 'mobile'
	| 'order'
	| 'payment'
	| 'phone'
	| 'pos'
	| 'product'
	| 'purchase'
	| 'rating-fill'
	| 'rating-outline'
	| 'redo'
	| 'report'
	| 'return'
	| 'role'
	| 'search'
	| 'select'
	| 'settings'
	| 'settings-fill'
	| 'shop'
	| 'staff'
	| 'store'
	| 'subtract'
	| 'supplier'
	| 'thunder'
	| 'transfer'
	| 'undo'
	| 'user'
	| 'z-cart'
	| 'z-grid';

type IconProps = {
	size?: number;
	color?: string;
	name: IconNameOptions;
};

const icons: any = {
	'action-menu': GoListUnordered,
	add: IoAdd,
	'add-circle': IoMdAddCircleOutline,
	'add-image': LuImagePlus,
	'add-tag': IoIosAddCircleOutline,
	arrow: TbArrowForward,
	'arrow-left': IoIosArrowBack,
	barcode: IoMdBarcode,
	brand: MdBrandingWatermark,
	'brand-alt': TbBrandPatreonFilled,
	cart: FaCartShopping,
	category: BiSolidCategory,
	check: FaCheckCircle,
	close: MdOutlineCancel,
	clock: FaRegClock,
	'clock-outline': FaRegClock,
	collections: BsCollectionFill,
	content: BiSolidBookContent,
	copy: FaRegCopy,
	customer: FaUserTag,
	customers: HiUserGroup,
	damage: GiBrokenPottery,
	dashboard: IoIosHome,
	date: BsCalendar2Date,
	delete: MdDelete,
	'delete-builder': RiDeleteBinLine,
	delivery: TbTruckDelivery,
	'delivery-fill': FaTruck,
	deploy: HiMiniRocketLaunch,
	desktop: FaDesktop,
	discount: RiDiscountPercentFill,
	dots: BsThreeDots,
	edit: MdOutlineEdit,
	'edit-builder': GrEdit,
	envelope: FaRegEnvelope,
	expense: FaMoneyCheckDollar,
	'export-doc': TbFileExport,
	eye: IoEye,
	'eye-off': IoEyeOff,
	feedback: FcFeedback,
	feedbacks: MdFeedback,
	fields: FaTable,
	home: GoHomeFill,
	info: FaCircleInfo,
	inventory: MdInventory,
	items: MdFastfood,
	leave: SiCkeditor4,
	location: BsBuildingsFill,
	map: FaMapMarkerAlt,
	menu: CiMenuBurger,
	mobile: HiMiniDevicePhoneMobile,
	order: TbFileInvoice,
	payment: GiMoneyStack,
	pos: TiPrinter,
	phone: MdLocalPhone,
	product: FaTshirt,
	purchase: GiBuyCard,
	rating: IoIosStar,
	'rating-fill': IoIosStar,
	'rating-outline': CiStar,
	redo: HiArrowUturnRight,
	report: BiSolidReport,
	return: GiReturnArrow,
	role: FaUnlockKeyhole,
	search: IoSearchOutline,
	select: TbSelector,
	settings: TbSettings,
	'settings-fill': RiSettings3Fill,
	shop: IoStorefront,
	staff: FaPeopleGroup,
	store: IoStorefront,
	subtract: GrSubtract,
	supplier: PiUserListFill,
	thunder: AiOutlineThunderbolt,
	transfer: BiTransferAlt,
	undo: HiArrowUturnLeft,
	user: FaUserFriends,

	//zhoei icons
	'z-cart': IoBagOutline,
	'z-grid': IoGridOutline,
};

const Icon: FC<IconProps> = ({ name, ...props }) => {
	const IconComponent = icons[name] || IoIosHome;
	const brandColor = useColorModeValue(colors.brand.light, colors.brand.dark);
	const defaultColor = useColorModeValue('#4a4a4a', 'white');
	return (
		<IconComponent
			size={props.size}
			color={name == 'arrow' ? brandColor : props.color ? props.color : defaultColor}
			{...props}
		/>
	);
};

export default Icon;

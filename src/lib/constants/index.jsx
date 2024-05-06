import {
	HiOutlineShoppingCart,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'
import { RxDashboard } from "react-icons/rx";
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { PiUsersThreeDuotone } from "react-icons/pi";
import { HiOutlineTicket } from "react-icons/hi2";

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <RxDashboard />
    },
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <GiFullMotorcycleHelmet />
	},
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <PiUsersThreeDuotone />
	},
	{
		key: 'orders',
		label: 'Orders',
		path: '/orders',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'Sales',
		label: 'Sales',
		path: '/sales',
		icon: <HiOutlineTicket />
	}
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label:'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
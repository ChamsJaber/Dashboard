import { HiOutlineTicket } from 'react-icons/hi'
import { IoPieChart, IoPeople, IoCart } from 'react-icons/io5'

export default function DashboardStatsGrid() {
	return (
		<div className="flex gap-4">
			<BoxWrapper rounded>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-amber-100">
					<HiOutlineTicket className="text-2xl text-amber-500" />
				</div>
				<div className="pl-4 ">
					<span className="text-sm text-gray-500 font-light ">Total Sales</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$54232</strong>
						<span className="text-sm text-green-500 pl-2">+343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper rounded>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-red-100">
					<IoPieChart className="text-2xl text-red-400" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Expenses</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">$3423</strong>
						<span className="text-sm text-green-500 pl-2">-343</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper rounded>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-blue-200">
					<IoPeople className="text-2xl text-blue-400" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Customers</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">12313</strong>
						<span className="text-sm text-red-500 pl-2">-30</span>
					</div>
				</div>
			</BoxWrapper>
			<BoxWrapper rounded>
				<div className="rounded-full h-12 w-12 flex items-center justify-center bg-emerald-100">
					<IoCart className="text-2xl text-emerald-500" />
				</div>
				<div className="pl-4">
					<span className="text-sm text-gray-500 font-light">Total Orders</span>
					<div className="flex items-center">
						<strong className="text-xl text-gray-700 font-semibold">16432</strong>
						<span className="text-sm text-red-500 pl-2">-43</span>
					</div>
				</div>
			</BoxWrapper>
		</div>
	)
}

function BoxWrapper({ children, rounded }) {
	return <div className={`bg-white p-4 flex-1 border border-gray-200 flex items-center ${rounded ? 'rounded-lg' : ''}`}>{children}</div>
}
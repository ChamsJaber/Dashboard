import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const data = [
	{ name: 'Male', value: 540 },
	{ name: 'Female', value: 620 },
]

const RADIAN = Math.PI / 180
const COLORS = ['#f87171', '#2dd4bf']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function BuyerProfilePieChart() {
	return (
		<div className="w-[20rem] h-[20rem] bg-white p-2 rounded-lg border border-gray-200 flex flex-col ">
			<strong className="text-gray-800 font-medium ">Buyer Profile</strong>
			<div className=" w-96 flex-1 text-xs ">
				<ResponsiveContainer width="75%" height="100%">
					<PieChart width={400} height={300}>
						<Pie
							data={data}
							cx="53%"
							cy="47%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
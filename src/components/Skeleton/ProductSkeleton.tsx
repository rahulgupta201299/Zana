import { Skeleton } from '@mui/material'

function ProductSkeleton() {
	return Array(10).fill(0).map((_, ind) => (
		<div
			key={ind}
			className="border-2 border-yellow-400 rounded-lg overflow-hidden cursor-pointer  bg-[rgba(255,255,255,0.05)] transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
		>
			<div className="bg-[rgba(255,255,255,0.05)]  h-80 md:h-80 flex items-center justify-center">
				<Skeleton width={256} height={300} />
			</div>

			{/* Info Section */}
			<div className="bg-gradient-to-br from-white/5 to-white/10 text-black p-1 md:p-1">
				<div className="mb-2">
					<span className="text-xs md:text-sm font-medium opacity-80">
						<Skeleton width={40} />
					</span>
				</div>
				<h3 className="text-lg md:text-2xl font-bold mb-2">
					<Skeleton width={80} />
				</h3>
				<p className="text-xs md:text-sm opacity-75 mb-3">
					<Skeleton width={250} />
				</p>
				<div className="flex items-center justify-between">
					<span className="text-xs md:text-sm font-medium px-3 py-1 bg-black/10 rounded-full">
						<Skeleton width={40} />
					</span>
					<span className="text-xs md:text-sm font-bold">
						<Skeleton width={100} />
					</span>
				</div>
			</div>
		</div>
	))
}

export default ProductSkeleton

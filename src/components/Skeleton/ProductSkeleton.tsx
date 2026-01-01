import React from 'react'
import { Skeleton } from '@mui/material'

function ProductSkeleton() {
	return (
		<div className="grid grid-cols-2 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{
				Array(10).fill(0).map((_, ind) => (
					<div
						key={ind}
						className="border-2 border-yellow-400 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
					>
						<div className="bg-white p-6 md:p-8 h-48 md:h-64 flex items-center justify-center">
							<Skeleton width={256} height={256} />
						</div>

						{/* Info Section */}
						<div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-4 md:p-6">
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
		</div>
	)
}

export default ProductSkeleton

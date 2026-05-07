import { Box } from '@mui/material'
import { ProductCmsProvider } from './ProductCmsContext'
import PreviewPanel from './PreviewPanel'
import AdminPanel from './AdminPanel'

function ProductCMS() {
	return (
		<ProductCmsProvider>
			<Box
				component="main"
				sx={{
					display: "grid",
					gridTemplateColumns: {
						xs: "1fr",
						lg: "minmax(360px, 0.92fr) minmax(460px, 1.08fr)",
					},
					gap: 3,
					minHeight: "100vh",
					p: { xs: 1.75, md: 3 },
				}}
			>
				<PreviewPanel />
				<AdminPanel />
			</Box>
		</ProductCmsProvider>
	)
}

export default ProductCMS

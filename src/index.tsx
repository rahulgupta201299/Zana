import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'

import './index.css'
import App from './App'

import store from '@/Configurations/AppStore'
import { queryClient } from '@/Configurations/QueryClient'

(window as any).queryClient = queryClient;

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<App />
		</Provider>
	</QueryClientProvider>
)

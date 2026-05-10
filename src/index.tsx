import { createRoot } from 'react-dom/client'
import { QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import App from './App'

import store, { PersistedAppStore } from '@/Configurations/AppStore'
import { queryClient } from '@/Configurations/QueryClient'

(window as any).queryClient = queryClient;

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
	<QueryClientProvider client={queryClient}>
		<Provider store={store}>
			<PersistGate persistor={PersistedAppStore} onBeforeLift={() => undefined}>
				{(_persisted: boolean) => <App />}
			</PersistGate>
		</Provider>
	</QueryClientProvider>
)

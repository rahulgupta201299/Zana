import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import './index.css'
import App from './App'

import store, { PersistedAppStore } from '@/Configurations/AppStore'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<PersistGate persistor={PersistedAppStore} onBeforeLift={() => undefined}>
			{(_persisted: boolean) => <App />}
		</PersistGate>
	</Provider>
)

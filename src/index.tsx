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

if ('serviceWorker' in navigator && !navigator.webdriver) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch((err) => {
      console.error('ServiceWorker registration failed: ', err);
    });
  });
}


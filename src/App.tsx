import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: { queries: { retry: 2, refetchOnWindowFocus: false } },
})

function App() {
	return (
		<BrowserRouter>
			<QueryClientProvider client={queryClient}>
				<AppRoutes />
			</QueryClientProvider>
		</BrowserRouter>
	)
}

export default App

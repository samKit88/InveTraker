import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routers/routers'
// import { AuthContextProvider } from './context/AuthContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store, { persistor } from './store/store'
import { MantineProvider } from '@mantine/core'
const queryClient = new QueryClient()
import '@mantine/notifications/styles.css'
import '@mantine/core/styles.css'
import './index.css'
import '@mantine/dropzone/styles.css'
import { PersistGate } from 'redux-persist/es/integration/react'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider>
            <RouterProvider router={router} />
          </MantineProvider>
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
)

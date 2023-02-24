import { SnackbarOrigin, SnackbarProvider } from 'notistack'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter } from 'react-router-dom'

import LoadingScreen from '../components/LoadingScreen'
import { isDev } from '../config/environements'
import { AuthProvider } from '../contexts/JWTContext'
import { SettingsProvider } from '../contexts/SettingsContext'
import { queryClient } from '../lib/react-query'
import { SnackbarUtilsConfigurator } from '../lib/toaster'

import CollapseDrawerProvider from './CollapseDrawerProvider'

const ErrorFallback = () => (
  <div role='alert'>
    <h2>Ooops, something went wrong :( </h2>
    <button type='button' onClick={() => window.location.assign(window.location.origin)}>
      Refresh
    </button>
  </div>
)

type AppProviderProps = {
  children: React.ReactNode
}

const anchorOrigin: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'right',
}

export default function AppProviders({ children }: AppProviderProps) {
  return (
    <SettingsProvider>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <React.Suspense fallback={<LoadingScreen />}>
          <SnackbarProvider anchorOrigin={anchorOrigin}>
            <SnackbarUtilsConfigurator />
            <QueryClientProvider client={queryClient}>
              <AuthProvider>
                <CollapseDrawerProvider>
                  {isDev() && <ReactQueryDevtools />}
                  <BrowserRouter>{children}</BrowserRouter>
                </CollapseDrawerProvider>
              </AuthProvider>
            </QueryClientProvider>
          </SnackbarProvider>
        </React.Suspense>
      </ErrorBoundary>
    </SettingsProvider>
  )
}

import React, { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { QueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from '@/components/common/ErrorBoundary'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { Layout } from '@/components/layout/Layout'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'

// Lazy load pages for better performance
const Dashboard = React.lazy(() => import('@/pages/Dashboard'))
const Trading = React.lazy(() => import('@/pages/Trading'))
const Strategy = React.lazy(() => import('@/pages/Strategy'))
const Backtesting = React.lazy(() => import('@/pages/Backtesting'))
const Analytics = React.lazy(() => import('@/pages/Analytics'))
const Settings = React.lazy(() => import('@/pages/Settings'))
const Welcome = React.lazy(() => import('@/pages/Welcome'))
const Login = React.lazy(() => import('@/pages/Login'))

function App() {
  const { isAuthenticated } = useAuthStore()
  const { theme } = useThemeStore()

  // Apply theme to document
  React.useEffect(() => {
    document.documentElement.className = theme
  }, [theme])

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary onReset={reset}>
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  <LoadingSpinner size="xl" />
                </div>
              }
            >
              <Routes>
                {/* Public routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/welcome" element={<Welcome />} />

                {/* Protected routes */}
                <Route
                  path="/*"
                  element={
                    isAuthenticated ? (
                      <Layout>
                        <Routes>
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/dashboard" element={<Dashboard />} />
                          <Route path="/trading" element={<Trading />} />
                          <Route path="/strategy" element={<Strategy />} />
                          <Route path="/backtesting" element={<Backtesting />} />
                          <Route path="/analytics" element={<Analytics />} />
                          <Route path="/settings" element={<Settings />} />
                          <Route path="*" element={<Navigate to="/dashboard" replace />} />
                        </Routes>
                      </Layout>
                    ) : (
                      <Navigate to="/welcome" replace />
                    )
                  }
                />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>

      {/* Global toast notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#1e293b',
            color: '#e2e8f0',
            border: '1px solid #334155',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </div>
  )
}

export default App
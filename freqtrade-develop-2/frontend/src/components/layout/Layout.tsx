import React from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { useAuthStore } from '@/stores/authStore'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false)
  const { user } = useAuthStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="lg:pl-64">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />

        {/* Page content */}
        <main className="p-4 lg:p-6">
          <div className="max-w-7xl mx-auto">
            {user && (
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-white">
                      Welcome back, {user.username}! 👋
                    </h1>
                    <p className="text-gray-400 mt-1">
                      Level {user.level} Trader • {user.xp} XP
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    {/* Level progress */}
                    <div className="hidden sm:block">
                      <div className="text-right mb-1">
                        <span className="text-sm text-gray-400">
                          Next Level: {1000 - (user.xp % 1000)} XP
                        </span>
                      </div>
                      <div className="w-32 h-2 bg-dark-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-success-500 rounded-full transition-all duration-500"
                          style={{ width: `${(user.xp % 1000) / 10}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
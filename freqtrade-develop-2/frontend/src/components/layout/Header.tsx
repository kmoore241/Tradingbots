import React from 'react'
import { Menu, Bell, Search, Moon, Sun, Settings, LogOut, User } from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'
import { useThemeStore } from '@/stores/themeStore'
import { Dropdown } from '@/components/ui/Dropdown'

interface HeaderProps {
  onMenuClick: () => void
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { user, logout } = useAuthStore()
  const { theme, toggleTheme } = useThemeStore()
  const [notifications] = React.useState([
    { id: '1', message: 'New trade executed: BTC/USDT', time: '2 min ago', type: 'success' },
    { id: '2', message: 'Strategy optimization complete', time: '5 min ago', type: 'info' },
    { id: '3', message: 'Low balance warning', time: '10 min ago', type: 'warning' },
  ])

  const userMenuItems = [
    {
      icon: User,
      label: 'Profile',
      onClick: () => console.log('Profile clicked'),
    },
    {
      icon: Settings,
      label: 'Settings',
      onClick: () => console.log('Settings clicked'),
    },
    {
      type: 'divider' as const,
    },
    {
      icon: LogOut,
      label: 'Sign out',
      onClick: logout,
      className: 'text-danger-400 hover:text-danger-300',
    },
  ]

  return (
    <header className="h-16 bg-dark-800/80 backdrop-blur-xl border-b border-dark-700 flex items-center justify-between px-4 lg:px-6">
      {/* Left side */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Search */}
        <div className="hidden sm:block relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search trades, strategies..."
            className="pl-10 pr-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent w-64"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </button>

        {/* Notifications */}
        <Dropdown
          trigger={
            <button className="relative p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
              <Bell className="w-5 h-5" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-danger-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications.length}
                </span>
              )}
            </button>
          }
        >
          <div className="w-80">
            <div className="px-4 py-3 border-b border-dark-600">
              <h3 className="font-medium text-white">Notifications</h3>
            </div>
            <div className="max-h-96 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="px-4 py-3 hover:bg-dark-700 border-b border-dark-600 last:border-b-0"
                >
                  <p className="text-sm text-gray-300">{notification.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                </div>
              ))}
            </div>
            <div className="px-4 py-3 border-t border-dark-600">
              <button className="text-sm text-primary-400 hover:text-primary-300">
                View all notifications
              </button>
            </div>
          </div>
        </Dropdown>

        {/* User menu */}
        {user && (
          <Dropdown
            trigger={
              <button className="flex items-center gap-2 p-2 text-gray-400 hover:text-white hover:bg-dark-700 rounded-lg transition-colors">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-success-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:block text-sm font-medium text-gray-300">
                  {user.username}
                </span>
              </button>
            }
            items={userMenuItems}
          />
        )}
      </div>
    </header>
  )
}
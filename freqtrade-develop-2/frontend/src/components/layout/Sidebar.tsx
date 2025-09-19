import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { clsx } from 'clsx'
import {
  LayoutDashboard,
  TrendingUp,
  Brain,
  BarChart3,
  PieChart,
  Settings,
  X,
  Trophy,
  Target,
  Activity,
  Zap,
  ChevronDown,
  ChevronRight,
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

interface NavItem {
  name: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  badge?: string
  description?: string
  children?: NavItem[]
}

const navigation: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    description: 'Overview and quick stats',
  },
  {
    name: 'Trading',
    href: '/trading',
    icon: TrendingUp,
    badge: 'Live',
    description: 'Active trades and positions',
    children: [
      { name: 'Active Trades', href: '/trading/active', icon: Activity },
      { name: 'Trade History', href: '/trading/history', icon: BarChart3 },
      { name: 'Positions', href: '/trading/positions', icon: Target },
    ],
  },
  {
    name: 'Strategy',
    href: '/strategy',
    icon: Brain,
    description: 'Trading strategies and AI',
    children: [
      { name: 'Strategy Builder', href: '/strategy/builder', icon: Brain },
      { name: 'FreqAI Models', href: '/strategy/freqai', icon: Zap },
      { name: 'Optimization', href: '/strategy/optimization', icon: Target },
    ],
  },
  {
    name: 'Backtesting',
    href: '/backtesting',
    icon: BarChart3,
    description: 'Test strategies with historical data',
  },
  {
    name: 'Analytics',
    href: '/analytics',
    icon: PieChart,
    description: 'Performance insights and reports',
    children: [
      { name: 'Performance', href: '/analytics/performance', icon: Trophy },
      { name: 'Risk Analysis', href: '/analytics/risk', icon: Activity },
      { name: 'Market Analysis', href: '/analytics/market', icon: TrendingUp },
    ],
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
    description: 'Bot configuration and preferences',
  },
]

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation()
  const { user } = useAuthStore()
  const [expandedItems, setExpandedItems] = React.useState<string[]>([])

  const toggleExpanded = (itemName: string) => {
    setExpandedItems(prev =>
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    )
  }

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(`${href}/`)
  }

  const isParentActive = (item: NavItem) => {
    if (isActive(item.href)) return true
    return item.children?.some(child => isActive(child.href)) || false
  }

  return (
    <div
      className={clsx(
        'fixed inset-y-0 left-0 z-50 w-64 bg-dark-800/95 backdrop-blur-xl border-r border-dark-700 transform transition-transform duration-300 ease-in-out lg:translate-x-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-6 border-b border-dark-700">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-success-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-white">Freqtrade</h2>
            <p className="text-xs text-gray-400">Trading Bot</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="lg:hidden p-1 text-gray-400 hover:text-white transition-colors"
          aria-label="Close sidebar"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* User info */}
      {user && (
        <div className="p-4 border-b border-dark-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-success-500 rounded-full flex items-center justify-center text-white font-semibold">
              {user.username.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user.username}
              </p>
              <p className="text-xs text-gray-400">
                Level {user.level} • {user.xp} XP
              </p>
            </div>
          </div>
          {/* Mini XP bar */}
          <div className="mt-3">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Level {user.level}</span>
              <span>Level {user.level + 1}</span>
            </div>
            <div className="w-full h-1.5 bg-dark-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-primary-500 to-success-500 rounded-full transition-all duration-500"
                style={{ width: `${(user.xp % 1000) / 10}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navigation.map((item) => (
          <div key={item.name}>
            <div className="relative">
              <NavLink
                to={item.href}
                onClick={() => {
                  if (item.children) {
                    toggleExpanded(item.name)
                  }
                  if (window.innerWidth < 1024) {
                    onClose()
                  }
                }}
                className={({ isActive: navIsActive }) =>
                  clsx(
                    'group flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-dark-700',
                    (navIsActive || isParentActive(item))
                      ? 'bg-primary-500/20 text-primary-300 border border-primary-500/30'
                      : 'text-gray-300 hover:text-white'
                  )
                }
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="truncate">{item.name}</span>
                    {item.badge && (
                      <span className="px-1.5 py-0.5 text-xs bg-success-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-xs text-gray-500 truncate mt-0.5">
                      {item.description}
                    </p>
                  )}
                </div>
                {item.children && (
                  <div className="flex-shrink-0">
                    {expandedItems.includes(item.name) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </div>
                )}
              </NavLink>
            </div>

            {/* Submenu */}
            {item.children && expandedItems.includes(item.name) && (
              <div className="mt-2 ml-8 space-y-1">
                {item.children.map((child) => (
                  <NavLink
                    key={child.name}
                    to={child.href}
                    onClick={() => {
                      if (window.innerWidth < 1024) {
                        onClose()
                      }
                    }}
                    className={({ isActive }) =>
                      clsx(
                        'flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors',
                        isActive
                          ? 'bg-primary-500/10 text-primary-300'
                          : 'text-gray-400 hover:text-gray-300 hover:bg-dark-700'
                      )
                    }
                  >
                    <child.icon className="w-4 h-4" />
                    {child.name}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      {/* Achievements section */}
      {user && user.achievements.length > 0 && (
        <div className="p-4 border-t border-dark-700">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="w-4 h-4 text-warning-500" />
            <span className="text-sm font-medium text-gray-300">Latest Achievement</span>
          </div>
          <div className="text-xs text-gray-400">
            {user.achievements[user.achievements.length - 1].replace('_', ' ').toUpperCase()}
          </div>
        </div>
      )}
    </div>
  )
}
import React from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use'
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Trophy,
  Target,
  Zap,
  Brain,
  Star,
  Gift,
  BarChart3,
  Users,
  Play,
  Pause,
} from 'lucide-react'
import { useAuthStore } from '@/stores/authStore'

// Mock data - in real app this would come from API
const mockStats = {
  totalBalance: 12450.67,
  totalPnL: 2340.12,
  totalPnLPercentage: 23.1,
  activeTrades: 8,
  todaysPnL: 145.32,
  botStatus: 'running' as const,
}

const mockTrades = [
  { id: 1, pair: 'BTC/USDT', side: 'BUY', amount: 0.1, profit: 125.50, status: 'closed' },
  { id: 2, pair: 'ETH/USDT', side: 'SELL', amount: 2.5, profit: -45.20, status: 'open' },
  { id: 3, pair: 'ADA/USDT', side: 'BUY', amount: 1000, profit: 78.90, status: 'closed' },
]

const achievements = [
  { id: 1, name: 'First Profit', description: 'Made your first profitable trade', icon: Trophy, earned: true },
  { id: 2, name: 'Week Warrior', description: 'Traded for 7 consecutive days', icon: Target, earned: true },
  { id: 3, name: 'Strategy Master', description: 'Created your first custom strategy', icon: Brain, earned: false },
  { id: 4, name: 'Risk Manager', description: 'Set up proper risk management', icon: Activity, earned: false },
]

const dailyQuests = [
  { id: 1, title: 'Check Strategy Performance', reward: '50 XP', completed: false },
  { id: 2, title: 'Review 3 Trading Pairs', reward: '30 XP', completed: true },
  { id: 3, title: 'Update Risk Settings', reward: '40 XP', completed: false },
]

export default function Dashboard() {
  const { user, addXP, unlockAchievement } = useAuthStore()
  const { width, height } = useWindowSize()
  const [showConfetti, setShowConfetti] = React.useState(false)
  const [selectedTimeframe, setSelectedTimeframe] = React.useState('24h')

  // Simulate level up
  const handleCompleteQuest = (questId: number, reward: string) => {
    const xpAmount = parseInt(reward.split(' ')[0])
    addXP(xpAmount)

    // Show confetti for level up
    if (user && (user.xp + xpAmount) >= (Math.floor(user.xp / 1000) + 1) * 1000) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 3000)
    }
  }

  const statsCards = [
    {
      title: 'Total Balance',
      value: `$${mockStats.totalBalance.toLocaleString()}`,
      change: '+5.2%',
      changeType: 'positive' as const,
      icon: DollarSign,
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Total P&L',
      value: `$${mockStats.totalPnL.toLocaleString()}`,
      change: `+${mockStats.totalPnLPercentage}%`,
      changeType: 'positive' as const,
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Active Trades',
      value: mockStats.activeTrades.toString(),
      change: '+2',
      changeType: 'positive' as const,
      icon: Activity,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: "Today's P&L",
      value: `$${mockStats.todaysPnL.toFixed(2)}`,
      change: '+12.3%',
      changeType: 'positive' as const,
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
    },
  ]

  return (
    <div className="space-y-6">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.3}
        />
      )}

      {/* Bot Status Banner */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-success-500/20 to-primary-500/20 border border-success-500/30 rounded-xl p-4"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 bg-success-400 rounded-full animate-pulse" />
            <span className="text-success-300 font-medium">Bot is running</span>
            <span className="text-gray-400">• Auto-trading enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn-secondary px-3 py-1 text-sm">
              <Pause className="w-4 h-4 mr-1" />
              Pause
            </button>
            <button className="btn-primary px-3 py-1 text-sm">
              Settings
            </button>
          </div>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="card group hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
                <p className="text-2xl font-bold text-white mb-2">{stat.value}</p>
                <div className="flex items-center gap-1">
                  {stat.changeType === 'positive' ? (
                    <TrendingUp className="w-4 h-4 text-success-400" />
                  ) : (
                    <TrendingDown className="w-4 h-4 text-danger-400" />
                  )}
                  <span className={`text-sm ${stat.changeType === 'positive' ? 'text-success-400' : 'text-danger-400'}`}>
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Performance Chart Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Portfolio Performance</h3>
              <div className="flex gap-2">
                {['24h', '7d', '30d', '1y'].map((timeframe) => (
                  <button
                    key={timeframe}
                    onClick={() => setSelectedTimeframe(timeframe)}
                    className={`px-3 py-1 text-sm rounded-lg transition-colors ${
                      selectedTimeframe === timeframe
                        ? 'bg-primary-500 text-white'
                        : 'text-gray-400 hover:text-white hover:bg-dark-700'
                    }`}
                  >
                    {timeframe}
                  </button>
                ))}
              </div>
            </div>
            <div className="h-64 bg-dark-700 rounded-lg flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <BarChart3 className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Chart component would go here</p>
                <p className="text-sm">Showing {selectedTimeframe} performance</p>
              </div>
            </div>
          </motion.div>

          {/* Recent Trades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="card"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">Recent Trades</h3>
              <button className="text-primary-400 hover:text-primary-300 text-sm">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {mockTrades.map((trade) => (
                <div key={trade.id} className="flex items-center justify-between p-3 bg-dark-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${trade.status === 'open' ? 'bg-warning-400' : 'bg-success-400'}`} />
                    <div>
                      <p className="font-medium text-white">{trade.pair}</p>
                      <p className="text-sm text-gray-400">{trade.side} • {trade.amount}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-medium ${trade.profit > 0 ? 'text-success-400' : 'text-danger-400'}`}>
                      {trade.profit > 0 ? '+' : ''}${trade.profit.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-400 capitalize">{trade.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Daily Quests */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="card"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-primary-400" />
              <h3 className="font-semibold text-white">Daily Quests</h3>
            </div>
            <div className="space-y-3">
              {dailyQuests.map((quest) => (
                <div key={quest.id} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className={`text-sm ${quest.completed ? 'text-gray-400 line-through' : 'text-gray-300'}`}>
                      {quest.title}
                    </p>
                    <p className="text-xs text-primary-400">{quest.reward}</p>
                  </div>
                  {!quest.completed && (
                    <button
                      onClick={() => handleCompleteQuest(quest.id, quest.reward)}
                      className="text-xs bg-primary-500 hover:bg-primary-600 text-white px-2 py-1 rounded"
                    >
                      Complete
                    </button>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="card"
          >
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-5 h-5 text-warning-400" />
              <h3 className="font-semibold text-white">Achievements</h3>
            </div>
            <div className="space-y-3">
              {achievements.map((achievement) => (
                <div key={achievement.id} className={`flex items-center gap-3 p-3 rounded-lg ${achievement.earned ? 'bg-warning-500/10 border border-warning-500/20' : 'bg-dark-700'}`}>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${achievement.earned ? 'bg-warning-500/20' : 'bg-dark-600'}`}>
                    <achievement.icon className={`w-4 h-4 ${achievement.earned ? 'text-warning-400' : 'text-gray-500'}`} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-medium ${achievement.earned ? 'text-warning-300' : 'text-gray-400'}`}>
                      {achievement.name}
                    </p>
                    <p className="text-xs text-gray-500">{achievement.description}</p>
                  </div>
                  {achievement.earned && <Star className="w-4 h-4 text-warning-400" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Level Progress */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="card"
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-primary-400" />
              <h3 className="font-semibold text-white">Level Progress</h3>
            </div>
            {user && (
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-400">Level {user.level}</span>
                  <span className="text-sm text-gray-400">{user.xp % 1000}/1000 XP</span>
                </div>
                <div className="w-full h-3 bg-dark-700 rounded-full overflow-hidden mb-3">
                  <div
                    className="h-full bg-gradient-to-r from-primary-500 to-success-500 rounded-full transition-all duration-500"
                    style={{ width: `${(user.xp % 1000) / 10}%` }}
                  />
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Gift className="w-4 h-4" />
                  <span>Next reward at Level {user.level + 1}</span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
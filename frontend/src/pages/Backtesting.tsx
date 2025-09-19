import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Clock, TrendingUp, Database } from 'lucide-react'

export default function Backtesting() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <BarChart3 className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Backtesting Lab</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Test your strategies against historical data to validate performance before going live.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="card text-center">
            <Clock className="w-8 h-8 text-orange-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Historical Testing</h3>
            <p className="text-sm text-gray-400">Years of market data</p>
          </div>
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Performance Metrics</h3>
            <p className="text-sm text-gray-400">Detailed analytics</p>
          </div>
          <div className="card text-center">
            <Database className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Data Management</h3>
            <p className="text-sm text-gray-400">Market data download</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
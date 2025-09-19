import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Activity, DollarSign, AlertTriangle } from 'lucide-react'

export default function Trading() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-success-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <TrendingUp className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Trading Module</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Advanced trading interface with real-time market data, position management, and risk controls.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="card text-center">
            <Activity className="w-8 h-8 text-primary-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Active Trades</h3>
            <p className="text-sm text-gray-400">Monitor live positions</p>
          </div>
          <div className="card text-center">
            <DollarSign className="w-8 h-8 text-success-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">P&L Tracking</h3>
            <p className="text-sm text-gray-400">Real-time profit/loss</p>
          </div>
          <div className="card text-center">
            <AlertTriangle className="w-8 h-8 text-warning-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Risk Management</h3>
            <p className="text-sm text-gray-400">Automated risk controls</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
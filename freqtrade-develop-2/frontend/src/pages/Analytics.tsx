import React from 'react'
import { motion } from 'framer-motion'
import { PieChart, Trophy, Activity, TrendingUp } from 'lucide-react'

export default function Analytics() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <PieChart className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Analytics Dashboard</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Comprehensive insights into your trading performance with advanced analytics and reporting.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="card text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Performance</h3>
            <p className="text-sm text-gray-400">ROI and metrics</p>
          </div>
          <div className="card text-center">
            <Activity className="w-8 h-8 text-red-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Risk Analysis</h3>
            <p className="text-sm text-gray-400">Risk assessment</p>
          </div>
          <div className="card text-center">
            <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Market Analysis</h3>
            <p className="text-sm text-gray-400">Market insights</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
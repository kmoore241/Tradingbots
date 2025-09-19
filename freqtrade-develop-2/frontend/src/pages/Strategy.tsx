import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, Target, Code } from 'lucide-react'

export default function Strategy() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Strategy Center</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Build, test, and optimize your trading strategies with advanced AI and machine learning tools.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="card text-center">
            <Code className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Strategy Builder</h3>
            <p className="text-sm text-gray-400">Visual strategy creation</p>
          </div>
          <div className="card text-center">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">FreqAI Models</h3>
            <p className="text-sm text-gray-400">AI-powered predictions</p>
          </div>
          <div className="card text-center">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Optimization</h3>
            <p className="text-sm text-gray-400">Parameter tuning</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
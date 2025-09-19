import React from 'react'
import { motion } from 'framer-motion'
import { Settings as SettingsIcon, Shield, Bell, Palette } from 'lucide-react'

export default function Settings() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-16"
      >
        <div className="w-16 h-16 bg-gradient-to-r from-gray-500 to-gray-400 rounded-xl flex items-center justify-center mx-auto mb-4">
          <SettingsIcon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Settings & Configuration</h2>
        <p className="text-gray-400 max-w-md mx-auto">
          Customize your trading bot configuration, preferences, and security settings.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="card text-center">
            <Shield className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Security</h3>
            <p className="text-sm text-gray-400">API keys & security</p>
          </div>
          <div className="card text-center">
            <Bell className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Notifications</h3>
            <p className="text-sm text-gray-400">Alerts & messages</p>
          </div>
          <div className="card text-center">
            <Palette className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-1">Appearance</h3>
            <p className="text-sm text-gray-400">Theme & UI settings</p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
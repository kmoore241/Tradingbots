import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  username: string
  level: number
  xp: number
  achievements: string[]
  joinedAt: string
}

interface AuthState {
  isAuthenticated: boolean
  user: User | null
  token: string | null
  isLoading: boolean
  login: (credentials: { username: string; password: string }) => Promise<void>
  logout: () => void
  updateUser: (updates: Partial<User>) => void
  addXP: (amount: number) => void
  unlockAchievement: (achievement: string) => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      isLoading: false,

      login: async (credentials) => {
        set({ isLoading: true })
        try {
          // TODO: Replace with actual API call
          await new Promise(resolve => setTimeout(resolve, 1000))

          // Mock successful login
          const mockUser: User = {
            id: '1',
            username: credentials.username,
            level: 1,
            xp: 0,
            achievements: ['first_login'],
            joinedAt: new Date().toISOString(),
          }

          set({
            isAuthenticated: true,
            user: mockUser,
            token: 'mock-jwt-token',
            isLoading: false,
          })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      logout: () => {
        set({
          isAuthenticated: false,
          user: null,
          token: null,
        })
      },

      updateUser: (updates) => {
        const { user } = get()
        if (user) {
          set({ user: { ...user, ...updates } })
        }
      },

      addXP: (amount) => {
        const { user } = get()
        if (user) {
          const newXP = user.xp + amount
          const newLevel = Math.floor(newXP / 1000) + 1

          set({
            user: {
              ...user,
              xp: newXP,
              level: newLevel,
            }
          })

          // Level up achievement
          if (newLevel > user.level) {
            get().unlockAchievement(`level_${newLevel}`)
          }
        }
      },

      unlockAchievement: (achievement) => {
        const { user } = get()
        if (user && !user.achievements.includes(achievement)) {
          set({
            user: {
              ...user,
              achievements: [...user.achievements, achievement],
            }
          })
        }
      },
    }),
    {
      name: 'freqtrade-auth',
      partialize: (state) => ({
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        token: state.token,
      }),
    }
  )
)
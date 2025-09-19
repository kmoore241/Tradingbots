import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type Theme = 'dark' | 'light' | 'system'

interface ThemeState {
  theme: Theme
  effectiveTheme: 'dark' | 'light'
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const getSystemTheme = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') return 'dark'
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getEffectiveTheme = (theme: Theme): 'dark' | 'light' => {
  return theme === 'system' ? getSystemTheme() : theme
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      effectiveTheme: 'dark',

      setTheme: (theme) => {
        const effectiveTheme = getEffectiveTheme(theme)
        set({ theme, effectiveTheme })
      },

      toggleTheme: () => {
        const { theme } = get()
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        get().setTheme(newTheme)
      },
    }),
    {
      name: 'freqtrade-theme',
      onRehydrateStorage: () => (state) => {
        if (state) {
          // Update effective theme on rehydration
          state.effectiveTheme = getEffectiveTheme(state.theme)

          // Listen for system theme changes
          if (typeof window !== 'undefined' && state.theme === 'system') {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
            mediaQuery.addEventListener('change', () => {
              state.setTheme('system')
            })
          }
        }
      },
    }
  )
)
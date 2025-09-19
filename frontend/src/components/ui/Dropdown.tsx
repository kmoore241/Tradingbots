import React from 'react'
import { clsx } from 'clsx'

interface DropdownItem {
  icon?: React.ComponentType<{ className?: string }>
  label?: string
  onClick?: () => void
  className?: string
  type?: 'item' | 'divider'
}

interface DropdownProps {
  trigger: React.ReactNode
  children?: React.ReactNode
  items?: DropdownItem[]
  className?: string
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  items,
  className,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen])

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div
          className={clsx(
            'absolute right-0 top-full mt-2 bg-dark-800 border border-dark-600 rounded-lg shadow-xl z-50 min-w-48',
            'animate-in fade-in-0 zoom-in-95 slide-in-from-top-2 duration-200',
            className
          )}
        >
          {children ? (
            children
          ) : (
            <div className="py-1">
              {items?.map((item, index) => {
                if (item.type === 'divider') {
                  return (
                    <div
                      key={index}
                      className="my-1 border-t border-dark-600"
                    />
                  )
                }

                const Icon = item.icon

                return (
                  <button
                    key={index}
                    onClick={() => {
                      item.onClick?.()
                      setIsOpen(false)
                    }}
                    className={clsx(
                      'w-full flex items-center gap-2 px-4 py-2 text-sm text-left hover:bg-dark-700 transition-colors',
                      item.className || 'text-gray-300 hover:text-white'
                    )}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    {item.label}
                  </button>
                )
              })}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
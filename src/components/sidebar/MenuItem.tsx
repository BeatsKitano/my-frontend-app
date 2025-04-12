'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Tooltip } from 'react-tooltip'
import { cn } from '@/lib/utils'
import { IconType } from '@/types'

// 图标映射
const iconComponents: Record<IconType, React.ComponentType<{ className?: string }>> = {
  dashboard: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  users: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  settings: ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  // 可以继续添加更多图标
}

interface MenuItemProps {
  icon: IconType
  label: string
  href: string
  isSidebarOpen: boolean
  className?: string
}

export default function MenuItem({
  icon,
  label,
  href,
  isSidebarOpen,
  className,
}: MenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname === href
  const IconComponent = iconComponents[icon]

  return (
    <li>
      <Link
        href={href}
        className={cn(
          'flex items-center p-3 rounded-lg transition-colors',
          'hover:bg-gray-100',
          isActive ? 'bg-primary-50 text-primary-600' : 'text-gray-700',
          className
        )}
        data-tooltip-id="sidebar-tooltip"
        data-tooltip-content={label}
        data-tooltip-place="right"
      >
        <IconComponent
          className={cn(
            'w-6 h-6 flex-shrink-0',
            isActive ? 'text-primary-600' : 'text-gray-500'
          )}
        />
        {isSidebarOpen && (
          <span className="ml-3 font-medium whitespace-nowrap">{label}</span>
        )}
      </Link>

      {/* 只在侧边栏收起时显示工具提示 */}
      {!isSidebarOpen && (
        <Tooltip
          id="sidebar-tooltip"
          className="z-50"
          delayShow={300}
        />
      )}
    </li>
  )
}
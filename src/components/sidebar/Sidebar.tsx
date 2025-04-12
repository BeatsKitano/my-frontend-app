'use client'

import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import MenuItem from './MenuItem'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true)

  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <div
      className={`${
        isOpen ? 'w-64' : 'w-20'
      } bg-white shadow-md transition-all duration-300 flex flex-col`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        {isOpen ? (
          <h1 className="text-xl font-bold text-primary">Dashboard</h1>
        ) : (
          <div className="w-8 h-8 bg-primary rounded-md" />
        )}
        <button onClick={toggleSidebar} className="text-gray-500 hover:text-gray-700">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          <MenuItem
            icon="dashboard"
            label="Dashboard"
            href="/dashboard"
            isSidebarOpen={isOpen}
          />
          <MenuItem
            icon="users"
            label="Users"
            href="/users"
            isSidebarOpen={isOpen}
          />
          <MenuItem
            icon="settings"
            label="Settings"
            href="/settings"
            isSidebarOpen={isOpen}
          />
        </ul>
      </nav>
    </div>
  )
}
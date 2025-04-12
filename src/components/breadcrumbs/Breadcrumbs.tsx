'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split('/').filter(Boolean)

  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-primary"
          >
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              <Link
                href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                className={`text-sm font-medium ${
                  index === pathSegments.length - 1
                    ? 'text-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {segment.charAt(0).toUpperCase() + segment.slice(1)}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
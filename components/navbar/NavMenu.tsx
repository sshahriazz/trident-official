import React from 'react'

export default function NavMenu() {
    return (
        <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <a href="#" className="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white">
                    Dashboard
                </a>
                <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Team
                </a>
                <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Projects
                </a>
                <a
                    href="#"
                    className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Calendar
                </a>
            </div>
        </div>
    )
}

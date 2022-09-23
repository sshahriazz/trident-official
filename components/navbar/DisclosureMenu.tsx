import { Disclosure } from '@headlessui/react'
import { BellIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function DisclosureMenu() {
    return (
        <Disclosure.Panel className="sm:hidden">
            {/* <div className="space-y-1 px-2 pt-2 pb-3">
                Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white"
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
                >
                    Dashboard
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Team
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Projects
                </Disclosure.Button>
                <Disclosure.Button
                    as="a"
                    href="#"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                    Calendar
                </Disclosure.Button>
            </div> */}
            {/* <div className="border-t border-gray-700 pt-4 pb-3">
                <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                        <Image
                            className="h-10 w-10 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt="testing"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className="ml-3">
                        <div className="text-base font-medium text-white">Tom Cook</div>
                        <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                    </div>
                    <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        Your Profile
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        Settings
                    </Disclosure.Button>
                    <Disclosure.Button
                        as="a"
                        href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                        Sign out
                    </Disclosure.Button>
                </div>
            </div> */}
        </Disclosure.Panel>
    )
}

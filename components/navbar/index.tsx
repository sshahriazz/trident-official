/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/future/image";
import NavMenu from "./NavMenu";
import BorderLineButton from "../common/button/BorderLineButton";
import Link from "next/link";
export default function Navbar() {
    const [hideNavMenu] = useState(false);
    return (
        <Disclosure as="nav">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-0 border-b">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Link href={'/'}>
                                        <Image
                                            className="hidden sm:block cursor-pointer"
                                            src={"/assets/logo/trident-logo.svg"}
                                            alt="trident-logo"
                                            width={166}
                                            height={40}
                                        />
                                    </Link>
                                    <Link href={'/'}>
                                        <Image
                                            className="sm:hidden cursor-pointer"
                                            src={"/assets/logo/trident-logo.svg"}
                                            alt="trident-logo-mobile"
                                            width={120}
                                            height={40}
                                        />
                                    </Link>
                                </div>
                                {/* ------------------------ Nav Menu ------------------- */}
                                {hideNavMenu && <NavMenu />}
                            </div>
                            {/* <div className="hidden sm:ml-6 sm:block">
                                <div className="flex items-center">
                                    <button
                                        type="button"
                                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>

                                    <ProfileMenuDropdown />
                                </div>
                            </div> */}

                            <div className="-mr-2 flex sm:hidden">
                                {/* Mobile menu button */}
                                {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button> */}

                            </div>
                            <div className="gap-3 hidden md:flex">
                                <BorderLineButton onClick={() => { }}>
                                    <span>Set a meeting</span>
                                </BorderLineButton>
                            </div>
                            <div className="gap-3 flex md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-primary-500">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    {/* <DisclosureMenu /> */}
                </>
            )}
        </Disclosure>
    );
}

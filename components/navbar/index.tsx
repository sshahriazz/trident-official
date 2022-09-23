/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import Image from "next/future/image";
import NavMenu from "./NavMenu";
import ProfileMenuDropdown from "./ProfileMenuDropdown";
import DisclosureMenu from "./DisclosureMenu";
import TridentLogo from "../../assets/logo/trident-logo.svg";
function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}
export default function Navbar() {
    const [hideNavMenu] = useState(false);
    return (
        <Disclosure as="nav" className="bg-white py-2">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image
                                        className=""
                                        src={TridentLogo}
                                        alt="testing"
                                        width={166}
                                        height={40}
                                    />
                                    {/* <Image
                                        className="hidden h-8 w-auto lg:block"
                                        src="/technext-logo.png"
                                        alt="Your Company"
                                        width={100}
                                        height={100}
                                    /> */}
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
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>

                            </div>
                            <div className="gap-3 hidden sm:flex">
                                <button className="py-2 px-6 border border-primaryDark rounded-full text-primaryDark hover:bg-primary hover:text-white">
                                        <span>Sign In </span>
                                      
                                </button>
                                <button className="py-2 px-6 border border-primaryDark rounded-full text-primaryDark hover:bg-primary hover:text-white">
                                    <span>Book a Demp </span>
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* <DisclosureMenu /> */}
                </>
            )}
        </Disclosure>
    );
}

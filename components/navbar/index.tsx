/* This example requires Tailwind CSS v2.0+ */
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/future/image";
import NavMenu from "./NavMenu";
import TridentLogo from "../../assets/logo/trident-logo.svg";
import MobileTridentLogo from '../../assets/logo/trident-logo-mobile.svg'
import BorderLineButton from "../common/button/BorderLineButton";
export default function Navbar() {
    const [hideNavMenu] = useState(false);
    return (
        <Disclosure as="nav" className="container bg-white sm:py-2 mx-auto">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-0">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <Image
                                        className="hidden sm:block"
                                        src={TridentLogo}
                                        alt="trident-logo"
                                        width={166}
                                        height={40}
                                    />
                                    <Image
                                        className="sm:hidden "
                                        src={MobileTridentLogo}
                                        alt="trident-logo-mobile"
                                        width={40}
                                        height={40}
                                    />
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
                                <BorderLineButton onClick={() => { }}>
                                    <span>Sign In </span>
                                </BorderLineButton>
                                <BorderLineButton onClick={() => { }}>
                                    <span>Book a Demo </span>
                                </BorderLineButton>
                            </div>

                        </div>
                    </div>

                    {/* <DisclosureMenu /> */}
                </>
            )}
        </Disclosure>
    );
}

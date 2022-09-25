import Image from "next/image";
import { navigation } from "content";

const EmailIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_951)">
      <path
        d="M16.6605 0.656375C11.5179 2.26091 6.03138 4.45466 0.513254 6.48985C-0.175457 6.74438 -0.170183 7.67602 0.523801 7.87993C2.12728 8.35067 3.73708 8.84427 5.34724 9.34454C5.45165 9.37688 5.56486 9.36247 5.65697 9.30481C8.23111 7.6936 10.8253 6.03845 13.3428 4.47329C13.4733 4.39208 13.6153 4.57559 13.5021 4.67931C11.4567 6.55665 9.33009 8.50923 7.23513 10.4312C7.10083 10.5543 7.07657 10.7568 7.17712 10.9097C8.52677 12.9625 9.87185 15.0254 11.1311 17.0518C11.4511 17.5679 12.208 17.46 12.4358 16.8729C14.4049 11.7735 16.4784 6.7254 17.961 1.95259C18.1867 1.22063 17.3914 0.429969 16.6605 0.656375V0.656375Z"
        fill="black"
      />
      <path
        d="M5.09766 10.9324C5.11031 12.3594 5.13633 13.7864 5.17535 15.2134C5.19363 15.823 5.91223 16.1616 6.34395 15.7555C6.79535 15.3322 7.25203 14.9051 7.71293 14.4755C7.93582 14.2677 7.9766 13.9235 7.8075 13.6634C7.16625 12.6769 6.51762 11.6901 5.87039 10.7081C5.63906 10.3573 5.09414 10.5162 5.09801 10.9324H5.09766Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_951">
        <rect width="18" height="18" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default function index() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="pt-12 pb-4">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 pb-4">
          <div className="space-y-4 xl:col-span-1">
            <div className="flex-shrink-0">
              <Image
                src={"/assets/logo/trident-logo.svg"}
                alt="trident-logo"
                width={150}
                height={35}
              />
            </div>
            <p className="text-base text-gray-500">
              Making the world a better place through constructing elegant
              hierarchies.
            </p>
            <div className="flex space-x-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-black hover:bg-[#CDF0EB] hover:border-[#CDF0EB] border rounded-full p-2"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-base font-medium text-gray-900 text-center sm:text-left">
                Solutions
              </h3>
              <ul
                role="list"
                className="mt-4 space-y-4 text-center sm:text-left"
              >
                {navigation.solutions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-medium text-gray-900 text-center sm:text-left">
                Support
              </h3>
              <ul
                role="list"
                className="mt-4 space-y-4 text-center sm:text-left"
              >
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-base text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div className="px-4 md:px-10 lg:px-0">
                <h3 className="text-base font-medium text-gray-900 text-center sm:text-left">
                  News Letter
                </h3>
                <p className="text-sm text-gray-500 mt-4">
                  Sign up for the latest news, company insights, and Whirl
                  updates.
                </p>
                <form action="" className="mt-4">
                  <div className="relative">
                    <div className="w-full">
                      <input
                        className="border w-full rounded-full py-2 pl-6"
                        type="email"
                        required
                        placeholder="your email"
                      />
                    </div>

                    <div className="absolute right-1 top-[10%]">
                      <button
                        className="bg-pink-300 rounded-[9999px] p-2 aspect-square"
                        type="submit"
                      >
                        <EmailIcon />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-4">
          <p className="text-base text-gray-400 text-center">
            &copy; 2022 Trident. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

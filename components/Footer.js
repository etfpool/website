import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center">
      <ThemeSwitcher />
      <footer className="w-full bg-opacity-20 dark:bg-opacity-40 mt-8 p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/" className="flex items-center mb-4 md:mb-0">
            <div className="flex">
              <Image
                height={32}
                width={32}
                src="/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="ml-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Rgeen.com
              </span>
            </div>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li className="mr-4 hover:underline md:mr-6 ">
              <Link href="/about">About</Link>
            </li>
            <li className="mr-4 hover:underline md:mr-6 ">
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li className="hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <Link href="https://rgeen.com/" className="hover:underline">
            Rgeen™
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

import ThemeSwitcher from './ThemeSwitcher';

export default function Footer({ copyrightText }) {
  return (
    // <footer className="py-16 flex flex-col items-center">
    //   <p className="dark:text-white uppercase mb-3 font-bold opacity-60">
    //     {copyrightText}
    //   </p>
    //   <ThemeSwitcher />
    // </footer>

    <div className="w-full flex flex-col items-center">
      <ThemeSwitcher />
      <footer className="w-full bg-opacity-20 dark:bg-opacity-40 mt-8 p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 md:mb-0">
            <img
              src="/logo.png"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Rgeen.com
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a href="/privacy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{' '}
          <a href="https://rgeen.com/" className="hover:underline">
            Rgeen™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
}

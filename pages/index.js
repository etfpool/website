import Link from 'next/link';

import Layout, { GradientBackground } from '../components/Layout';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';
import SearchBar from '../components/SearchBar';
import { isAuth } from '../actions/auth';
import { useEffect, useState } from 'react';

export default function Index({ posts, globalData }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (isAuth()) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);
  const sunIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="24"
      fill="none"
      viewBox="0 0 25 24"
      className="dark:opacity-50"
    >
      <g
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        clipPath="url(#clip0_192_823)"
      >
        <path d="M12.5 17a5 5 0 100-10 5 5 0 000 10zM12.5 1v2M12.5 21v2M4.72 4.22l1.42 1.42M18.86 18.36l1.42 1.42M1.5 12h2M21.5 12h2M4.72 19.78l1.42-1.42M18.86 5.64l1.42-1.42"></path>
      </g>
      <defs>
        <clipPath id="clip0_192_823">
          <path
            className="fill-current text-white"
            d="M0 0H24V24H0z"
            transform="translate(.5)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );

  const moonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="20"
      fill="none"
      viewBox="0 0 21 20"
    >
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="stroke-current text-gray-400 dark:text-white"
        d="M19.5 10.79A9 9 0 119.71 1a7 7 0 009.79 9.79v0z"
      ></path>
    </svg>
  );
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <header className="md:pt-20 pt-10 pb-12">
        <img
          className="w-12 h-12 rounded-full block mx-auto mb-4 bg-white"
          src="./logo.png"
          alt="logo"
        />
        <p className="text-2xl dark:text-white text-center">
          <Link href="/">Make yOUR investment always Green</Link>
        </p>
      </header>
      <main className="md:mt-20 mt-0 w-full">
        <h1 className="text-3xl lg:text-5xl text-center md:mb-12 mb-8">
          Rgeen
        </h1>
        <SearchBar />
        <div className="flex flex-col md:flex-row justify-center mb-8">
          <Link href={'/hyips'}>
            <button
              type="button"
              className="dark:bg-opacity-60 bg-opacity-40 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Best Hyips
            </button>
          </Link>
          <Link href={'https://app.rgeen.com'}>
            <button
              type="button"
              className="dark:bg-opacity-60 bg-opacity-40 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Cryptocurrencies
            </button>
          </Link>
          <Link href={'/play-to-earn'}>
            <button
              type="button"
              className="dark:bg-opacity-60 bg-opacity-40 text-white bg-gray-800 hover:bg-gray-900 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
            >
              Play To Earn
            </button>
          </Link>
        </div>
      </main>
      <footer className="w-full fixed bottom-0 bg-opacity-0 dark:bg-opacity-0 p-4 rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="flex mt-6 md:mb-8 mb-0 justify-center rounded-3xl p-1">
          <button
            type="button"
            aria-label="Use Dark Mode"
            onClick={() => {
              document.documentElement.classList.add('dark');
              localStorage.setItem('theme', 'dark');
            }}
            className="flex items-center h-full pr-2 dark:bg-primary rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
          >
            {moonIcon}
          </button>

          <button
            type="button"
            aria-label="Use Light Mode"
            onClick={() => {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('theme', 'light');
            }}
            className="flex items-center h-full pr-2 bg-primary dark:bg-transparent rounded-3xl flex justify-center align-center p-2 w-24 h-10 transition"
          >
            {sunIcon}
          </button>
        </div>
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="invisible md:visible flex items-center mb-4 md:mb-0"
          >
            <>
              <img
                src="/logo.png"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite Logo"
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                Rgeen.com
              </span>
            </>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/about" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/contact" className="mr-4 hover:underline">
                Contact
              </Link>
            </li>
            {loggedIn ? (
              <>
                <li>
                  <Link href="/admin" className="mr-4 hover:underline">
                    {isAuth().name}
                  </Link>
                </li>
                <li>
                  <Link href="/login" className="mr-4 hover:underline">
                    Logout
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login" className="mr-4 hover:underline">
                    Login
                  </Link>
                </li>
                {/* <li>
                  <a href="/register" className="mr-4 hover:underline">
                    Register
                  </a>
                </li> */}
              </>
            )}
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
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
    </Layout>
  );
}

export function getStaticProps() {
  const globalData = getGlobalData();
  return { props: { globalData } };
}

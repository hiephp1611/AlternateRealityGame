import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-evildark text-white w-full md:flex md:justify-center flex-shrink-0 mt-auto">
        <div className="p-4 md:w-4/5 md:max-w-4xl">
            <span className="text-6xl font-goldman whitespace-nowrap">INISTR</span>
            <ul className="text-sm font-medium text-gray-500 md:float-right md:text-right py-4 md:py-0">
                <li className="mb-3">
                    hello@inistr.com
                </li>
                <li>
                    Eckens väg 38
                </li>
                <li>
                    433 33, Partille
                </li>
            </ul>
            <span className="block text-sm text-gray-500 dark:text-gray-400">© 2023 INISTR All Rights Reserved.</span>
        </div>
    </footer>
  )
}

"use client";

import Link from 'next/link';
import { useState } from 'react';
import Header from './(header)/header';
import './globals.css'
import About from './about/page';
import { RecoilRoot } from 'recoil';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const pathname = usePathname()
  const [menuIsShown, setMenuIsShown] = useState(false);

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {
          pathname === "/intercept" ?
            (
              <div>
                {children}
              </div>
            )
            :
            (
              <RecoilRoot>
                <div className="bg-glacier-400">
                  <div className={`relative z-10 transition-all md:right-0 ${menuIsShown ? "right-56" : "right-0"}`}>
                    <div className="bg-glacier-300">
                      <Header menuIsShown={menuIsShown} setMenuIsShown={setMenuIsShown} />
                      <div className="flex flex-row w-full h-full">
                        <main className="p-4 grow flex flex-col items-center overflow-auto min-h-screen">
                          {children}
                        </main>
                        <div className="hidden md:block bg-glacier-500 w-[40vw] max-w-md relative font-fraunces">
                          <About />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 right-0 w-56 font-fraunces text-white p-6">
                    <h1 className="text-2xl">Menu</h1>

                    <div className="cursor-pointer">
                      <Link href="/about">About me</Link>
                    </div>
                  </div>
                </div>
              </RecoilRoot>
            )
        }
      </body>
    </html>
  )
}

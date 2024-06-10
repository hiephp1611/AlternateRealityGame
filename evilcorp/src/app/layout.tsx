"use client"

import './globals.css'
import Header from './(Components)/Header'
import Footer from './(Components)/Footer'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuIsShown, setMenuIsShown] = useState(false);
  const pathname = usePathname()

  return (
    <html lang="en">
      <head />
      {
        pathname === "/uqid" ? (
          <body>
            {children}
          </body>
        ) : (
          <body className="flex flex-col min-h-screen font-kanit">
            <Header menuIsShown={menuIsShown} setMenuIsShown={setMenuIsShown} />
            <main className="flex flex-col items-center">
              {children}
            </main>
            <Footer />
          </body>
        )
      }
    </html>
  )
}

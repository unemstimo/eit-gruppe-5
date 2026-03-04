
import type { Metadata } from 'next'
import './globals.css'

import { Outfit } from 'next/font/google'
import Providers from '@/components/layout/providers'

export const metadata: Metadata = {
    title: 'EiT',
    description: 'EiT - Eksperter i Teams - Gruppe 5',
}

const outfit = Outfit({ subsets: ['latin'] })

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en' suppressHydrationWarning className='light'>
            <body className={`${outfit.className} min-h-full bg-gray-700`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
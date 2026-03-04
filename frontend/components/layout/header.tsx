'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    { label: 'Hjem', href: '/' },
    { label: 'Planer', href: '/planer' },
    { label: 'Min side', href: '/minside' },
]

export default function Header() {
    const pathname = usePathname()
    return (
        <header className='my-4 hidden w-full py-4 text-lg lg:block'>
            <div className='flex w-full items-end-safe justify-end text-black'>
                {navLinks.map((link, index) => (
                    <Link
                        key={index}
                        href={link.href}
                        className={`h-full w-1/8 text-center text-lg decoration-2 hover:underline ${
                            pathname === link.href ? 'underline' : ''
                        }`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
        </header>
    )
}
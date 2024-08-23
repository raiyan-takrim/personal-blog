"use client"
import React from 'react'
import { ModeToggle } from './theme-toggler'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navLinks = [
    {
        title: 'Home',
        url: '/'
    },
    {
        title: 'Posts',
        url: '/posts'
    },
    {
        title: 'Create',
        url: '/create-post'
    },
]

export default function Navigation() {
    const pathname = usePathname()
    return (
        <div className='flex sm:container mx-4 sm:mx-auto justify-between place-items-center max-w-[1020px]'>
            <Link href='/'>
                <h1 className='font-bold'>BLOG</h1>
            </Link>
            <nav className='flex place-items-center'>
                {
                    navLinks.map((link) => {
                        return <Link key={link.title} href={link.url} className={clsx(
                            'w-16 md:w-24 text-sm  hover:text-primary/100 inline-block',
                            link.url === pathname ? "font-bold text-primary/100" : "text-primary/80 font-medium"
                        )}>{link.title}</Link>
                    })
                }
                <ModeToggle />
            </nav>
        </div>
    )
}

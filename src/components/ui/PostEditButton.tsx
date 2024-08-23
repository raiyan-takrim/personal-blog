"use client"
import React from 'react'
// import { Button } from './button'
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function PostEditButton({ id }: { id: string }) {
    // const router = useRouter()
    // const redirectToThePost = () => {
    //     // console.log("clicked me! I am a Edit Button")
    //     router.push(`/posts/${id}/edit`)
    // }
    return (
        <Link href={`/posts/${id}/edit`} className='w-full block p-2 rounded-sm hover:bg-accent'>Edit</Link>
    )
}

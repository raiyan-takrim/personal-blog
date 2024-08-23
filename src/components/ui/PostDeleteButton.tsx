"use client"
import { deletePost } from '@/actions/action'
import React from 'react'
import { Button } from './button'
import Link from 'next/link'

export default function PostDeleteButton({ id }: { id: string }) {
    return (
        <span className='w-full cursor-pointer text-red-500' onClick={() => {

            deletePost(id)
        }}>Delete</span>
    )
}

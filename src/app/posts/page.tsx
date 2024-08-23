import { getAllPost } from '@/actions/action';
import PageHeading from '@/components/ui/PageHeading';
import { query } from '@/lib/db';
import { postTypes } from '@/types/post-types';
import Link from 'next/link';
import React from 'react'

export default async function Posts() {

    // const posts: postTypes = await query(`SELECT * FROM posts
    //     ORDER BY created_at DESC`).then((res) => res.rows)
    const posts: postTypes = await getAllPost()

    return (
        <main className='py-10'>
            <div>
                <PageHeading>All Post</PageHeading>
            </div>
            <div className='flex flex-col'>
                {
                    posts.map(post => {
                        return (
                            <div key={post.id} className='p-4 hover:bg-accent rounded-md transition-all duration-500'>
                                <Link href={`/posts/${post.id}`} className='block'>
                                    <small className='text-[#666] dark:text-zinc-300'>{post.created_at.toLocaleString()}</small>
                                    <h3 className='text-lg font-medium my-2'>{post.title}</h3>
                                </Link>
                            </div>)
                    })
                }
            </div>
        </main >
    )
}

import { getPost } from '@/actions/action'
import { Button } from '@/components/ui/button';
import DeleteDialogue from '@/components/ui/DeleteDialogue';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import PostDeleteButton from '@/components/ui/PostDeleteButton';
import PostEditButton from '@/components/ui/PostEditButton';
import { Ellipsis } from 'lucide-react';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import React from 'react'

type PostProps = {
    params: { id: string, };
    path: string;
}
type PostType = { id: string; title: string; body: string; created_at: Date; updated_at: Date }


export default async function Post({ params }: PostProps) {
    const headerlist = headers()
    const referer = headerlist.get('referer')
    let pathname = '/'
    if (referer) {
        const url = new URL(referer)
        pathname = url.pathname;
    }
    const post: PostType | null = await getPost(params.id)
    if (!post) {
        return notFound()
    }

    return (
        <main className='py-10'>
            <div className='flex justify-between place-items-center pb-4 border-b-2 gap-10'>
                <div>
                    <h1 className='text-lg font-medium'>{post.title}</h1>
                </div>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant={'ghost'} size={'icon'}><Ellipsis /></Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className='flex flex-col'>

                        <PostEditButton id={post.id} />

                        <DeleteDialogue id={post.id} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='py-4'>
                <p className='tracking-wide whitespace-pre-wrap leading-relaxed'>{post.body}</p>
            </div>
        </main >
    )
}

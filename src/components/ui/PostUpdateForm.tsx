"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { editPost } from "@/actions/action"
import { PostUpdateFormProps } from "@/types/post-types"
import Link from "next/link"

const formSchema = z.object(
    {
        title: z.string().min(1, {
            message: "Title can't be empty.",
        }), body: z.string().min(1, {
            message: "Body can't be empty.",
        }),
    }
)


export default function PostUpdateForm({ id, oldPost }: PostUpdateFormProps) {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: `${oldPost.title}`,
            body: `${oldPost.body}`,
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await editPost(values, id)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 flex flex-col">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Post title.." {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Body</FormLabel>
                            <FormControl>
                                <Textarea className="resize-none" placeholder="Body of the post.." rows={10} {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="flex justify-between place-items-center">
                    <Link href={`/posts/${id}`} className="text-destructive font-semibold">Cancel</Link>
                    <Button type="submit" className="font-semibold">UPDATE</Button>
                </div>
            </form>
        </Form>
    )
}

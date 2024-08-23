"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { createPost } from "@/actions/action"
import { useRouter } from "next/navigation"
import PageHeading from "@/components/ui/PageHeading"

const formSchema = z.object(
    {
        title: z.string().min(1, {
            message: "Title can't be empty.",
        }), body: z.string().min(1, {
            message: "Body can't be empty.",
        }),
    }
)

export default function ProfileForm() {
    const router = useRouter()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            body: "",
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        await createPost(values)
        router.push('/posts')
    }

    return (
        <main className="py-10 max-w-[600px] mx-auto">
            <PageHeading>Create A New Post</PageHeading>
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
                                    <Textarea className="resize-none" placeholder="Body of the post.." rows={8} {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" variant="default" className="font-semibold">Post</Button>
                </form>
            </Form>
        </main>
    )
}

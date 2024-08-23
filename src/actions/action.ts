"use server"

import { query } from "@/lib/db"
import { notFound, redirect } from "next/navigation"

export async function createPost(values: { title: string, body: string }) {
    await query(`INSERT INTO posts (title,body)
        VALUES ($1,$2)`, [values.title, values.body])
}

export async function getAllPost() {
    return await query(`SELECT * FROM posts
        ORDER BY created_at DESC`).then((res) => res.rows)
}
export async function getPost(id: string) {
    const postId = parseInt(id, 10);

    if (isNaN(postId)) {
        return null;
    }

    const fetchedPost = await query(`SELECT * FROM posts
        WHERE id = $1`, [id]).then((res) => res.rows)

    if (fetchedPost.length == 0) {
        console.log("not found")
        return null
    }
    return fetchedPost[0]
}

export async function editPost(values: { title: string, body: string }, id: string) {
    await query(`UPDATE posts
        SET title = $1 , body = $2
        WHERE id = $3`, [values.title, values.body, id])
    redirect(`/posts/${id}`)
}

export async function deletePost(id: string) {
    await query(`DELETE FROM posts
        WHERE id = $1`, [id])
    redirect('/posts')
}

// export async function postNotFound() {
//     notFound();
// }

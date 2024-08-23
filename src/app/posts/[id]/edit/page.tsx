import { getPost } from "@/actions/action"
import PageHeading from "@/components/ui/PageHeading"
import PostUpdateForm from "@/components/ui/PostUpdateForm"

export default async function editFormPage({ params }: { params: { id: string } }) {
    const oldPost = await getPost(params.id)
    return (
        <div className="py-10 max-w-[700px] mx-auto">
            <PageHeading>Update Post</PageHeading>
            <PostUpdateForm id={params.id} oldPost={oldPost} />
        </div>
    )

}

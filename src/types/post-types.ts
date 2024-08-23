export type postTypes = { id: number; title: string; body: string; created_at: Date; updated_at: Date }[]

export type PostUpdateFormProps = {
    id: string;
    oldPost: {
        id: number;
        title: string;
        body: string;
        created_at: Date;
        updated_at: Date;
    }
}
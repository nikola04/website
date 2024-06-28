export default function BlogPage({ params: { id } }: {
    params: {
        id: string
    }
}){
    return <p>{id}</p>
}
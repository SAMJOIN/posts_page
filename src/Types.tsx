export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export type PaginatorProps = {
    currentPage: number,
    pageCount: number,
    onPageChange: (page: number) => void
}
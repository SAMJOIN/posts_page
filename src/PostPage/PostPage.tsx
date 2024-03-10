import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Post as PostType } from '../Types'
import style from './PostPage.module.css'

const PostPage = () => {

    const [post, setPost] = useState<PostType | null>(null);
    const params = useParams();
    const postId = Number(params.postID);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, { method: "GET" })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch post');
                }
                return response.json();
            })
            .then(data => setPost(data))
            .catch(error => {
                console.error('Error fetching post:', error);
            })
    }, [postId])

    return (
        <div className={style.post}>
            <div className={style.blogTop}>
                <div className={style.textContent}>
                    <Link to={'/'} className={style.backTo}>
                        <div className={style.vector}>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 5H3.83L7.41 1.41L6 0L0 6L6 12L7.41 10.59L3.83 7H18V5Z" fill="#0A0A0A" />
                            </svg>
                        </div>
                        <p>Вернуться к статьям</p>
                    </Link>
                </div>
            </div>
            <div className={style.article}>
                <h1>{post && post.title}</h1>
                <img src="https://placehold.co/848x477"/>
                <p>{post && post.body}</p>
            </div>
        </div>
    );
}

export default PostPage;
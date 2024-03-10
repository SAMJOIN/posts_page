import { Link } from "react-router-dom";
import { Post as PostType } from "../Types";
import style from './Post.module.css'

const Post = (props: PostType) => {
    return (
        <div className={style.post}>
            <img className={style.img} src="https://placehold.co/558x273" />
            <div className={style.content}>
                <h1>{props.title}</h1>
                <Link to={`/${props.id}`} className={style.button}>Читать далее</Link>
            </div>
        </div>
    );
}

export default Post;
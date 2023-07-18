import { useSelector } from "react-redux";
import { selectPostById } from "../features/posts/postsSlice";
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from "./ReactionButtons";
import { useParams, Link } from "react-router-dom";

const SinglePostPage = () => {
    const { postId } = useParams();
    const post = useSelector((state) => selectPostById(state, Number(postId)));

    if (!post) {
        return (
            <div>Post Not Found!</div>
        )
    };

    return (
        <article>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <p>
                <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
                <PostAuthor userId={post.userId} />
                <TimeAgo timestamp={post.date} />
            </p>
            <ReactionButtons post={post} />
        </article>
    )
}

export default SinglePostPage
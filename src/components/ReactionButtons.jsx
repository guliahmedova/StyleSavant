import { useDispatch } from "react-redux";
import { reactionAdded } from "../features/posts/postsSlice";

const reactionEmoji = {
    thumsUp: '👍',
    wow: '😯',
    heart: '❤',
    rocket: '🚀',
    coffee: '☕'
}

const ReactionButtons = ({ post }) => {
    const dispatch = useDispatch();

    const reactionsButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
        return (
            <button key={name} type="button" className="text-white border p-2 rounded" onClick={() => dispatch(reactionAdded({ postId: post.id, reaction: name }))}>
                {emoji} {post.reactions[name]}
            </button>
        )
    });

    return (
        <div className="grid xl:grid-cols-5 gap-4 mt-4 md:grid-cols-4 sm:grid-cols-3 gap-2">{reactionsButtons}</div>
    )
}

export default ReactionButtons
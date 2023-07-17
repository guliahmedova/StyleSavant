import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({ post }) => {
    console.log(post)
    return (
        <div className="max-w-sm p-6 bg-white border border-gray-200 mb-4 rounded-lg shadow dark:bg-indigo-900 dark:border-indigo-700">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body.substring(0, 100)}</p>
            <div className="flex items-center justify-between my-3">
                <PostAuthor userId={post.id} />
                <TimeAgo timestamp={post.date} />
            </div>
            <a href="#" className="inline-flex my-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Post
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
            </a>
            <ReactionButtons post={post} />
        </div>
    )
}

export default PostsExcerpt
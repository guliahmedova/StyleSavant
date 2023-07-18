import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewPost } from "../features/posts/postsSlice";
import { selectAllUsers } from "../features/users/usersSlice";

const AddPostForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [userId, setUserId] = useState('');
    const [addRequestStatus, setAddRequestStatus] = useState('iddle');

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'iddle';

    const users = useSelector(selectAllUsers);
    const dispatch = useDispatch();

    const onSavePostClicked = () => {
        if (canSave) {
            try {
                setAddRequestStatus('pending');
                dispatch(addNewPost({ title, body: content, userId })).unwrap()
                setTitle('');
                setContent('');
                setUserId('');
            } catch (error) {
                console.log('Failed to save the post ', error);
            } finally {
                setAddRequestStatus('iddle');
            }
        }
    };

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>{user.name}</option>
    ));

    return (
        <div>
            <h2 className="my-2 text-indigo-900 text-center text-2xl"> Add A New Post</h2>
            <form>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-indigo-900">Title</label>
                    <input type="text" name="title" value={title} onChange={onTitleChanged} id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-indigo-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-indigo-900">Author</label>
                    <select id="countries" value={userId} onChange={onAuthorChanged} className="bg-indigo-200 border border-gray-300 text-indigo-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-indigo-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-indigo-900 dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="">Select Author</option>
                        {userOptions}
                    </select>
                </div>
                <div className="mb-6 mt-6">
                    <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-indigo-900">Content</label>
                    <input type="text" name="content" value={content} onChange={onContentChanged} id="large-input" className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-indigo-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-indigo-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                </div>
                <button type="button" onClick={onSavePostClicked} disabled={!canSave} className="text-white bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save Post</button>
            </form>
        </div>
    )
}

export default AddPostForm